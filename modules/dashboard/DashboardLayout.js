import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import Router, { useRouter } from "next/router";
import { Cookie } from "../../services/cookies";
import { MainContext } from "../../contexts/MainContext";
import { DashboardService } from "./Dashboard.Service";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { setLoader } = React.useContext(MainContext);

  Router.onRouteChangeStart = (url) => {
    setLoader(true);
    if (url != "/dashboard/login") {
      let value = DashboardService.checkCredentials();
      if (!value) {
        router.push("/dashboard/login");
      }
    }

    setLoader(false);
  };

  Router.onRouteChangeComplete = () => {
    setLoader(false);
  };

  Router.onRouteChangeError = () => {
    setLoader(false);
  };

  return (
    <>
      <DashboardSidebar />
      <div className="container">{children}</div>
    </>
  );
};

export default DashboardLayout;
