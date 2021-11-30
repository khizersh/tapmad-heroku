import React, { useCallback, useEffect, useState } from "react";
import EditProfileMobile from "../modules/profile-component/EdiProfileMobile";
import EditProfileWeb from "../modules/profile-component/EdiProfileWeb";
import {useRouter} from "next/router"
import NavbarHOC from "../modules/navbar/NavbarHOC";

const EditProfile = () => {

  const router = useRouter();
  const [mobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);

  const onClickBack = () => {
    router.push("/");
  };
  const RenderViews = useCallback(
    function () {
      if (mobile) {
        return <EditProfileMobile />;
      } else {
        return <EditProfileWeb />;
      }
    },
    [mobile]
  );

  return (
    <div>
      <NavbarHOC>
        <div>
          <button
            className="btn"
            style={{
              fontSize: "13px",
              color: "black",
            }}
            onClick={onClickBack}
          >
            <img src="/icons/login-back.svg" />
          </button>
        </div>
        <div className="margin-y-auto">
          {/* <img src={upgradeIcon} width="25" /> */}
          <span className="pl-2">Upgrade Package</span>
        </div>
      </NavbarHOC>
      <RenderViews />
    </div>
  );
};

export default EditProfile;

export function getStaticProps() {
  return {
    props: {
      protected: true,
      noSideBar : true,
      env: process.env.TAPENV
    },
  };
}

