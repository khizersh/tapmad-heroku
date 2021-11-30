import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../contexts/profile/ProfileContext";
import { userIcon } from "../../services/imagesLink";
import requestIp from "request-ip";
import { Cookie } from "../../services/cookies";

const EditProfileMobile = () => {
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const { ProfileState, dispatch } = useContext(ProfileContext);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    console.log(ProfileState, "ProfileState");
    // if (ProfileState != null) setProfile(ProfileState.ProfileData.ProfileData);
  }, [ProfileState]);

  return (
    <div className="col-12 mt-3 ">
      <div className="mob_editProfile">
        <div className="row">
          <img src={userIcon} width="100" />
        </div>
        <div className="my-3">
          <label className="editprofile_lbl">Name:</label>
          <input
            defaultValue={profile.FullName}
            placeholder="Enter Name"
            className="col-12 p-2 rounded-pill"
          />
        </div>
        <div className="my-3">
          <label className="editprofile_lbl">Date of Birth:</label>
          <input
            placeholder="Date of Birth"
            className="col-12 p-2 rounded-pill"
          />
        </div>
        <div className="my-3">
          <label className="editprofile_lbl">Email ID:</label>
          <input placeholder="Email ID" className="col-12 p-2 rounded-pill" />
        </div>
        <div className="my-3">
          <label className="editprofile_lbl">Mobile:</label>
          <input placeholder="Mobile" className="col-12 p-2 rounded-pill" />
        </div>
        <div className="row">
          <div className="col-3">
            <text style={{ color: "blue" }}>Male</text>
          </div>
          <div className="col-3">
            <text style={{ color: "blue" }}>femae</text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfileMobile;

export function getServerSideProps(context) {
  var ip = requestIp.getClientIp(context.req);
  if (process.env.TAPENV == "local") {
    ip = "39.44.217.70";
  }
  return {
    props: {
      noSideBar: true,
      protected: true,
      auth: true,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
