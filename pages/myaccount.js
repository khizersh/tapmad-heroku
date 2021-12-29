import { useEffect, useState, useCallback, useContext } from "react";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import { Cookie } from "../services/cookies";
import requestIp from "request-ip";
import { useRouter } from "next/router";
import MyAccountMobile from "../modules/profile-component/ProfileMobile";
import MyAccountWeb from "../modules/profile-component/ProfileWeb";
import { ProfileContext } from "../contexts/profile/ProfileContext";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { PROFILE_DATA } from "../contexts/profile/ProfileReducer";
import NavbarHOC from "../modules/navbar/NavbarHOC";
import withSignout from "../modules/auth/signout/SignoutHOC";
import { MainContext } from "../contexts/MainContext";

const MyAccountTrial = ({ signout }) => {
  const router = useRouter();
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [postFormData, setPostFormData] = useState({
    Version: "V1",
    Language: "en",
    Platform: "web",
    UserId: userId,
  });
  const { setLoader } = useContext(MainContext);

  const [isMobile, setIsMobile] = useState(false);
  const [upgardeBtn, setUpgradeBtn] = useState(false);
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
          if(data.data.MyPackage === "Premium"){
            console.log("premiummmmm");
            setUpgradeBtn(true)
          }
        }
      }
    }

    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);

  const unSubscribe = () => {
    swal({
      title: "Are you sure?",
      text: "You want to unsubscribe",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      setLoader(true);
      let body = {
        Language: "en",
        Platform: "android",
        ProductId: allData.PackageDescription[0].PackageProductId,
        UserId: userId,
        Version: "V1",
      };
      if (willDelete) {
        MyAccountService.unsubcribeUser(body)
          .then((res) => {
            if (res.responseCode == 1) {
              window.sendToSignUp = true;
              swal({
                title: res.message,
                timer: 2500,
                icon: "success",
              });
              signout();
              setdeactivated(true);
              setLoader(false);
            } else if (res.responseCode == 5) {
              swal({
                title: res.message,
                timer: 2500,
                icon: "warning",
              });
              setLoader(false);
            } else {
              swal({
                title: res.message,
                timer: 2500,
                icon: "error",
              });
              setLoader(false);
            }
          })
          .catch((e) => {
            setLoader(false);
          });
      }
      setLoader(false);
    });
  };

  const RenderViews = useCallback(
    function () {
      if (isMobile) {
        return (
          <MyAccountMobile
            profileData={profileData}
            allData={allData}
            unSubscribe={unSubscribe}
            upgardeBtn={upgardeBtn}
            onClickBack={onClickBack}
          />
        );
      } else {
        return (
          <MyAccountWeb
            signout={signout}
            profileData={profileData}
            allData={allData}
            userId={postFormData.UserId}
            unSubscribe={unSubscribe}
            upgardeBtn={upgardeBtn}
          />
        );
      }
    },
    [isMobile, profileData , upgardeBtn]
  );

  const onClickBack = () => {
    router.push("/");
  };

  const clickEditProfile = () => {
    router.push("/editprofile");
  };

  return (
    <div className="container-fluid">
   
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
      userHeader : true,
      auth: true,
      ip: ip,
      env: process.env.TAPENV,
    },
  };
}
