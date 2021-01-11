import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CategoryDetail from "../../modules/category/CategoryDetail";
import { manipulateUrls } from "../../services/utils";
import { get } from "../../services/http-service";

const Syno = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video) {
      setVideo(props?.data?.Video);
      setVideoList(props?.data?.Sections);
    }
  }

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div className="container-fluid">
      <CategoryDetail video={video} videoList={videoList} />
    </div>
  );
};

export default Syno;

export async function getServerSideProps(context) {
  let { OriginalMovieId, isChannel } = manipulateUrls(context.query);

  const data = await get(
    `https://api.tapmad.com/api/getRelatedChannelsOrVODs/V1/en/web/${OriginalMovieId}/${isChannel}`
  );

  // Pass data to the page via props
  return { props: { data: data.data } };
}
