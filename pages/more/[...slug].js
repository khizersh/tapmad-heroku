import React, { useEffect } from "react";
import ItemCard from "../../modules/search/ItemCard";
import { viewMoreContent } from "../../services/apilinks";
import { get } from "../../services/http-service";
import { SEOFriendlySlugsForVideo } from "../../services/utils";
import requestIp from "request-ip";

export default function ViewMore(props) {
    console.log("props ", props);
    return <div className="row">
        {props.data.Sections == null ?
            <div className="col-12"><h3 className="text-center">No data found</h3></div>
            : props.data.Sections.Videos.map((video, i) => {
                let slug = SEOFriendlySlugsForVideo(video);
                return <ItemCard item={video} key={i} slug={slug} />;
            })}
    </div>
}

export async function getServerSideProps(context) {
    var slug = context.query.slug;
    var ip = requestIp.getClientIp(context.req);
    if (process.env.TAPENV == "local") {
        ip = "39.44.217.70";
    }
    var response = await get(viewMoreContent(0, 5, slug[1], slug[2]), ip);
    return {
        props: {
            data: response.data, env: process.env.TAPENV
        }
    };
}