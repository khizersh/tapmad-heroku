import React, { useEffect, useState } from "react";
import { get } from "../../services/http-service";
import { manipulateUrlsForCatgeory } from "../../services/utils";
import CategoryDetail from "../../modules/category/components/CategoryDetail";
import { getSeasonVodByCategoryId } from "../../services/apilinks";
import requestIp from "request-ip";

const Category = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video) {
      let vid = {
        VideoName: props.data.CategoryName,
        VideoDescription: props.data.CategoryDescription,
        NewVideoImageThumbnail: props.data.CategoryMobileLargeImage,
      };
      setVideo(vid);
      setVideoList([{ Videos: props?.data?.Videos }]);
    }
  }

  useEffect(() => {
    setMount(true);
  }, [props]);

  return (
    <div className="container-fluid">
      <CategoryDetail video={video} videoList={videoList} />
    </div>
  );
};

export default Category;

export async function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  let { categoryId } = manipulateUrlsForCatgeory(context.query);
  const data = await get(getSeasonVodByCategoryId + categoryId, ip);

  return { props: { data: data.data } };
}
