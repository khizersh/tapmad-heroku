import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { get } from "../../services/http-service";
import { manipulateUrls , manipulateUrlsForCatgeory } from "../../services/utils";
import Image from "next/image";
import CardHorizontal from "../../modules/home/CardHorizontal";
import CategoryDetail from "../../modules/category/CategoryDetail";

const Category = () => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router && router.query) {
      getChannelData(router.query);
    }
  }, [router.query]);

  async function getChannelData(query) {
    if (query && query.slug) {
      let seriesDetail = manipulateUrlsForCatgeory(router.query);
      getVideosByCategory(seriesDetail.categoryId);
    }
  }

  const getVideosByCategory = async (id) => {
    const data = await get(
      `https://api.tapmad.com/api/getSeasonVodByCategoryId/V1/en/web/${id}`
    );

    if(data?.data?.Response?.responseCode){
      let vid = {
        VideoName : data?.data?.CategoryName,
        VideoDescription: data?.data?.CategoryDescription,
        NewVideoImageThumbnail : data?.data?.NewCategoryImage
      }

          setVideo(vid)
          setVideoList([{Videos: data.data.Videos}])
    }

  };
  return (
    <div className="container-fluid">
      <CategoryDetail video={video} videoList={videoList} />
    </div>
  );
};

export default withRouter(Category);
