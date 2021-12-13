import { useEffect, useState, useCallback, useContext } from "react";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import { Cookie } from "../services/cookies";
import requestIp from "request-ip";
import { useRouter } from "next/router";
import MyAccountMobile from "../modules/profile-component/ProfileMobile";
import MyAccountWeb from "../modules/profile-component/ProfileWeb";
import { ProfileContext } from "../contexts/profile/ProfileContext";
import { PROFILE_DATA } from "../contexts/profile/ProfileReducer";
import NavbarHOC from "../modules/navbar/NavbarHOC";
import withSignout from "../modules/auth/signout/SignoutHOC";

const MyAccountTrial = ({ signout }) => {
  const router = useRouter();
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [postFormData, setPostFormData] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: userId,
  });

  const [isMobile, setIsMobile] = useState(false);
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
    Package: "",
  });
  const { ProfileState, dispatch } = useContext(ProfileContext);
  useEffect(async () => {
    if (userId) {
      setUserId(Cookie.getCookies("userId"));
      const data = await MyAccountService.getUserData(postFormData);
      if (ProfileState) {
        dispatch({ type: PROFILE_DATA, data: data });
      }
      if (data != null) {
        if (data.responseCode == 1) {
          console.log(data);
          setAllData(data.data);
          setProfileData({
            ...profileData,
            UserId: userId,
            Email: data.data.ProfileData.UserEmail || "--",
            UserMobileNumebr: data.data.ProfileData.UserProfileMobile || "--",
            FullName: data.data.ProfileData.UserProfileFullName || "--",
            BirthDate: data.data.ProfileData.UserProfileDOB || "--",
            ProfilePicture: data.data.ProfileData.UserProfilePicture || "--",
            Gender: data.data.ProfileData.UserProfileGender || "--",
            Package: data.data.Package,
          });
        }
      }
    }

    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);

  const RenderViews = useCallback(
    function () {
      if (isMobile) {
        return <MyAccountMobile profileData={profileData} allData={allData} />;
      } else {
        return (
          <MyAccountWeb
            signout={signout}
            profileData={profileData}
            allData={allData}
            userId={postFormData.UserId}
          />
        );
      }
    },
    [isMobile, profileData]
  );

  const onClickBack = () => {
    router.push("/");
  };

  const clickEditProfile = () => {
    router.push("/editprofile");
  };

  return (
    <div className="container-fluid">
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
          <button
            onClick={clickEditProfile}
            className="btn bg-white rounded-lg py-1 text-green font-13"
          >
            Edit Profile
          </button>
        </div>
      </NavbarHOC>
      <div className="profile-container">
        <RenderViews />
      </div>
    </div>
  );
};
export default withSignout(MyAccountTrial);

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
