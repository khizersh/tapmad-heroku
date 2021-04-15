import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { useRouter } from "next/router";
import AuthViews from "../modules/auth/login/authViews";
export default function LoginPage() {
  const { initialState } = useContext(MainContext);
  const router = useRouter();
  React.useEffect(() => {
    console.log(initialState);
    if (initialState.isAuthenticated) {
      router.push("/");
    }
  }, [initialState.isAuthenticated]);
  return (
    <div>
      <AuthViews />
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      noSideBar: true,
      auth: true
    },
  };
}
