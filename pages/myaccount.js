import React, { useEffect, useState } from "react";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import PersonalInfo from "../modules/my-account/PersonalInfo";
import UserStatus from "../modules/my-account/UserStatus";
import { getUserByUserId } from "../services/apilinks";
import { Cookie } from "../services/cookies";

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

  useEffect(async () => {
    if (userId) {
      setUserId(Cookie.getCookies("userId"));
      const data = await MyAccountService.getUserData(formData);
      console.log("data::: ", data);
      if (data != null) {
        if (data.responseCode == 1) {
          setAllData(data.data);
          setProfileData({
            ...profileData,
            UserId: userId,
            Email: data.data.User.UserEmail,
            UserMobileNumebr: data.data.UserProfile.UserProfileMobile,
            FullName: data.data.UserProfile.UserProfileFullName,
            BirthDate: data.data.UserProfile.UserProfileDOB,
            ProfilePicture: data.data.UserProfile.UserProfilePicture,
          });
        }
      }
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 ">
          {profileData && <PersonalInfo data={profileData} />}
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
