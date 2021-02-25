import React, { useEffect, useState } from "react";
import PersonalInfo from "../modules/my-account/PersonalInfo";
import UserStatus from "../modules/my-account/UserStatus";
import { getUserByUserId } from "../services/apilinks";
import { Cookie } from "../services/cookies";
import { post } from "../services/http-service";

const MyAccount = () => {
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [formData, setFormData] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: userId,
  });
  const [allData, setAllData] = useState(null);
  const [profileData, setProfileData] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: null,
    ProfilePicture: null,
    FullName: "",
    UserMobileNumebr: "",
    BirthDate: "",
    Email: "",
  });

  useEffect(() => {
    if (userId) {
      setUserId(Cookie.getCookies("userId"));
      post(getUserByUserId, formData).then((res) => {
        if (res.data && res.data.Response.responseCode == 1) {
          setAllData(res.data);
          setProfileData({
            ...profileData,
            UserId: userId,
            Email: res.data.User.UserEmail,
            UserMobileNumebr: res.data.UserProfile.MobileNumber,
            FullName: res.data.UserProfile.UserProfileFullName,
            BirthDate: res.data.UserProfile.UserProfileDOB,
            ProfilePicture: res.data.UserProfile.UserProfilePicture,
          });
        }
      });
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 ">
          <PersonalInfo data={profileData} />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
          {allData && <UserStatus pdata={allData} userId={formData.UserId} />}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}
