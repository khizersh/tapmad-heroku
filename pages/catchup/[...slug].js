import React, { useState, useEffect } from "react";
import { manipulateUrls } from "../../services/utils";
import { CatchupService } from "../../modules/catchup/catchup.service";
import VideoDetail from "../../modules/catchup/VideoDetail";
import requestIp from "request-ip";

const CatchupDetail = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  console.log("catchup api call");
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
      {video && <VideoDetail video={video} videoList={videoList} />}
    </div>
  );
};

export default CatchupDetail;

export async function getServerSideProps(context) {
  let { CleanVideoId } = manipulateUrls(context.query);
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  console.log("CleanVideoId: ", CleanVideoId);
  const data = await CatchupService.getCatchupVideo(CleanVideoId, ip);
  console.log("data: ", data.responseCode);

  if (data.responseCode == 1) {
    return { props: { video: data.data.Video, videoList: data.data.Videos } };
  } else {
    return { props: { video: null, videoList: [] } };
  }
}
