import UserInfo from "../components/UserInfo";
import requestIp from "request-ip";

export default function userIP(props) {
  return <UserInfo {...props} />;
}
export async function getServerSideProps(context) {
  const isServer = !!context.req;
  var ip = requestIp.getClientIp(context.req);
  return {
    props: {
      isServer,
      // clientIP: context.req ? context.req.clientIP : null,
    },
  };
}
