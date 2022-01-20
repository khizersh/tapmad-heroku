import React, { useEffect } from "react";
import ItemCard from "../../modules/search/ItemCard";
import { viewMoreContent } from "../../services/apilinks";
import { get } from "../../services/http-service";
import { setUrlAccordingToVideoType } from "../../services/utils";
import requestIp from "request-ip";
import { IsLiveChannel } from "../../services/constants";

export default function ViewMore(props) {

    console.log("props in more : ",props);
    return <div className="row mx-auto">
        {props.data.Sections == null ?
            <div className="col-12"><h3 className="text-center">No data found</h3></div>
            : props.data.Sections.Videos.map((video, i) => {
                let slug = setUrlAccordingToVideoType(video, IsLiveChannel);
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
    let url = viewMoreContent(0, 5, slug[1], slug[2]);
    console.log("url : ",url , ip);
    var response = await get(url, ip);
    return {
        props: {
            data: response.data, env: process.env.TAPENV
        }
    };
}