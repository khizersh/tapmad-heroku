import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useRouter } from "next/router";
import NavbarHOC from "../modules/navbar/NavbarHOC";
import EdiProfile from "../modules/profile-component/EdiProfile";
import EdiProfileForm from "../modules/profile-component/EdiProfile";

const EditProfile = () => {
  const router = useRouter();
  const [mobile, setIsMobile] = useState(false);
  const [data, setData] = useState({ data: null });
  const [save, setSave] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);

  const onClickBack = () => {
    router.push("/");
  };

  const handleCallback = () => {
    setSave(!save);
  };

  return (
    <div className="container-fluid">
      <div className="profile-container">
        <EdiProfileForm isSave={save} isMobile={mobile} />
      </div>
    </div>
  );
};

export default EditProfile;

export function getStaticProps() {
  return {
    props: {
      protected: true,
      noSideBar: false,
      env: process.env.TAPENV,
    },
  };
}
