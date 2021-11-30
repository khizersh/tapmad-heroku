import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../contexts/profile/ProfileContext";
import { editUserProfileIcon, userIcon } from "../../services/imagesLink";
import { MyAccountService } from "../../modules/my-account/myaccount.service";
import requestIp from "request-ip";
import { Cookie } from "../../services/cookies";

const EditProfileMobile = () => {
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [profile, setProfile] = useState(null);
  const [gender, setGender] = useState(null);
  const [editProfile, setEditProfile] = useState({
    Name: "",
    DOB: "",
    Mobile: "",
    Gender: "",
  });
  const { ProfileState } = useContext(ProfileContext);
  useEffect(async () => {
    if (userId) {
      setUserId(Cookie.getCookies("userId"));
      const data = await MyAccountService.getUserData({
        Version: "V1",
        Language: "en",
        Platform: "web",
        UserId: userId,
      });
      setProfile(data.data);
      console.log(data);
      setGender(data.data.ProfileData.UserProfileGender);
    }
  }, []);
  const onPressGender = (param) => {
    setGender(param);
    setEditProfile({ ...editProfile, Gender: param });
  };
  return (
    <div className="col-12 mt-3 ">
      <div className="mob_editProfile p-2">
        <div className="row">
          <div className="col-12 text-center">
            <img src={editUserProfileIcon} width="100" />
          </div>
        </div>
        <div className="my-3">
          <label className="editprofile_lbl">Name:</label>
          <input
            defaultValue={profile && profile.ProfileData.UserProfileFullName}
            placeholder="Enter Name"
            className="col-12 p-2 rounded-pill"
            onChange={(e) => {
              setEditProfile({ ...editProfile, Name: e.target.value });
            }}
          />
        </div>
        <div className="my-3">
          <label className="editprofile_lbl">Date of Birth:</label>
          <input
            placeholder="Date of Birth"
            className="col-12 p-2 rounded-pill"
            defaultValue={profile && profile.ProfileData.UserProfileDOB}
            onChange={(e) => {
              setEditProfile({ ...editProfile, DOB: e.target.value });
            }}
          />
        </div>
        {/* <div className="my-3">
          <label className="editprofile_lbl">Email ID:</label>
          <input
            placeholder="Email ID"
            className="col-12 p-2 rounded-pill"
            defaultValue={profile && profile.ProfileData.UserProfileDOB}
          />
        </div> */}
        <div className="my-3">
          <label className="editprofile_lbl">Mobile:</label>
          <input
            placeholder="Mobile"
            className="col-12 p-2 rounded-pill"
            defaultValue={profile && profile.ProfileData.UserProfileMobile}
            onChange={(e) => {
              setEditProfile({ ...editProfile, Mobile: e.target.value });
            }}
          />
        </div>
        <div className="row">
          <div className="col-3" onClick={() => onPressGender("Male")}>
            <input
              type="radio"
              name="radio"
              checked={gender == "Male" ? true : false}
            />
            <label className="radio-cstm">Male</label>
          </div>
          <div className="col-3" onClick={() => onPressGender("Female")}>
            <input
              type="radio"
              name="radio"
              checked={gender == "Female" ? true : false}
            />
            <label className="radio-cstm">Female</label>
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
