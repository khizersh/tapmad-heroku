import React, { useState, useEffect } from "react";
import { manipulateUrls } from "../../services/utils";
import { CatchupService } from "../../modules/catchup/catchup.service";
import VideoDetail from "../../modules/catchup/VideoDetail";

const CatchupDetail = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video) {
      setVideo(props.video);
      setVideoList(props.videoList);
      setMount(true);
    }
  }

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div className="container-fluid">
      <VideoDetail video={video} videoList={videoList} />
    </div>
  );
};

export default CatchupDetail;

export async function getServerSideProps(context) {
  let { isChannel, OriginalMovieId, isFree, CleanVideoId } = manipulateUrls(
    context.query
  );
  console.log("CleanVideoId: ", CleanVideoId);
  const data = await CatchupService.getCatchupVideo(CleanVideoId);

  if (data.responseCode == 1) {
    return { props: { video: data.data.Video, videoList: data.data.Videos } };
  } else {
    return { props: { video: null, videoList: [] } };
  }
}
