import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { get } from "../../services/http-service";
import {
  manipulateUrls,
  manipulateUrlsForCatgeory,
} from "../../services/utils";
import Image from "next/image";
import CardHorizontal from "../../modules/home/CardHorizontal";
import CategoryDetail from "../../modules/category/CategoryDetail";

const Category = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video) {
      let vid = {
        VideoName: props?.data?.CategoryName,
        VideoDescription: props?.data?.CategoryDescription,
        NewVideoImageThumbnail: props?.data?.NewCategoryImage,
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
  let { categoryId } = manipulateUrlsForCatgeory(context.query);
  const data = await get(
    `https://api.tapmad.com/api/getSeasonVodByCategoryId/V1/en/web/${categoryId}`
  );

  return { props: { data: data.data } };
}
