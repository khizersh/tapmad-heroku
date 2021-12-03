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
      {mobile ? (
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
            <span className="pl-2">
              <button
                type="button"
                onClick={() => handleCallback()}
                class="rounded-pill py-1 px-4 btn btn-light"
              >
                Save
              </button>
            </span>
          </div>
        </NavbarHOC>
      ) : null}
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
      noSideBar: true,
      env: process.env.TAPENV,
    },
  };
}
