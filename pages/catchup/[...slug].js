import React from "react";
import { manipulateUrls } from "../../services/utils";

const CatchupDetail = (props) => {
  console.log("props: ", props);
  return <div></div>;
};

export default CatchupDetail;

export async function getServerSideProps(context) {
  // var ip = requestIp.getClientIp(context.req);
  // if (process.env.TAPENV == "local") {
  //   ip = "39.44.217.70";
  // }

  let { isChannel, OriginalMovieId, isFree, CleanVideoId } = manipulateUrls(
    context.query
  );

  return { props: { data: CleanVideoId } };
}
