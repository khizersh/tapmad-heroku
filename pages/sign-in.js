import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import AuthViews from "../modules/auth/authViews";
import { useRouter } from "next/router";
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
    },
  };
}
