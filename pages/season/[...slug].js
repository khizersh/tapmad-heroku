import React, { useEffect, useState } from "react";
import { manipulateUrls } from "../../services/utils";
import { get } from "../../services/http-service";
import CategoryDetail from "../../modules/category/components/CategoryDetail";
import { getRelatedChannelsOrVODs } from "../../services/apilinks";
import requestIp from "request-ip";

const Syno = (props) => {
  const [videoList, setVideoList] = useState([]);
  const [video, setVideo] = useState(null);
  const [mount, setMount] = useState(false);

  if (!mount) {
    if (!video) {
      setVideo(props.data.Video);
      setVideoList(props.data.Sections);
      setMount(true);
    }
  }

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <div className="container-fluid">
      <CategoryDetail video={video} videoList={videoList} syno={true} />
    </div>
  );
};

export default Syno;

export async function getServerSideProps(context) {
  let { OriginalMovieId, isChannel } = manipulateUrls(context.query);
  var ip = requestIp.getClientIp(context.req);

  let url = getRelatedChannelsOrVODs(OriginalMovieId, isChannel);
  const data = await get(url, ip);

  if (data != null) {
    return { props: { data: data.data } };
  }
  return { props: { data: data } };
}
