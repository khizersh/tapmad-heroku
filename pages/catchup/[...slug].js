import React, { useState, useEffect, useContext } from "react";
import { manipulateUrls } from "../../services/utils";
import { CatchupService } from "../../modules/catchup/catchup.service";
import VideoDetail from "../../modules/catchup/VideoDetail";
import requestIp from "request-ip";
import { CatchupContext } from "../../contexts/CatchupContext";

const CatchupDetail = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);
  const { catchupState } = useContext(CatchupContext);

  if (!mount) {
    if (!video) {
      setVideo(props.video);
      if (catchupState && catchupState.relatedContent) {
        setVideoList(catchupState.relatedContent);
      }
      setMount(true);
    }
  }

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {/* <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }}
        />
      </Head> */}
      <div className="container-fluid">
        {video && <VideoDetail video={video} videoList={videoList} />}
      </div>
    </>
  );
};

export default CatchupDetail;

export async function getServerSideProps(context) {
  let { CleanVideoId } = manipulateUrls(context.query);
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }

  const data = await CatchupService.getCatchupVideo(CleanVideoId, ip);

  if (data.responseCode == 1) {
    return {
      props: {
        video: data.data.Video, videoList: data.data.Videos, env: process.env.TAPENV
      }
    };
  } else {
    return {
      props: {
        video: null, videoList: [], env: process.env.TAPENV
      }
    };
  }
}
