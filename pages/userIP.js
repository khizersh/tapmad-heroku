import UserInfo from "../components/UserInfo";

export default function userIP(props) {
  return <UserInfo {...props} />;
}
export async function getServerSideProps(context) {
  const isServer = !!context.req;
  return {
    props: {
      isServer,
      clientIP: context.req ? context.req.clientIP : null
    }
  };
}
