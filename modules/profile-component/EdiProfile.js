import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../contexts/profile/ProfileContext";
import { editUserProfileIcon, userIcon } from "../../services/imagesLink";
import { MyAccountService } from "../my-account/myaccount.service";
import requestIp from "request-ip";
import { Cookie } from "../../services/cookies";
import { UpdateProfile } from "../../services/gtm";
import swal from "sweetalert";
import { useRouter } from "next/router";

const EdiProfileForm = ({ isSave, isMobile }) => {
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [profile, setProfile] = useState(null);
  const [gender, setGender] = useState(null);
  const [editProfile, setEditProfile] = useState({
    Name: "",
    DOB: "",
    Mobile: "",
    Gender: "",
  });
  const router = useRouter();
  const { redirect } = router.query;
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
      setEditProfile({
        ...editProfile,
        Name: data.data.ProfileData.UserProfileFullName,
        DOB: data.data.ProfileData.UserProfileDOB,
        Mobile: data.data.ProfileData.UserProfileMobile,
        Gender: data.data.ProfileData.UserProfileGender,
      });
      setGender(data.data.ProfileData.UserProfileGender);
    }
  }, []);

  const submitHandeler = async () => {
    var formData = {
      Version: "V1",
      Language: "en",
      Platform: "web",
      UserId: userId,
      ProfilePicture: null,
      FullName: editProfile.Name,
      UserMobileNumebr: editProfile.Mobile,
      BirthDate: editProfile.DOB,
      Email: null,
    };
    const data = await MyAccountService.updateUserProfileData(formData);

    if (data != null) {
      Cookie.setCookies("userProfileName", editProfile.Name);
      UpdateProfile(editProfile);
      swal({
        title: data.data.Response.message,
        timer: 2000,
        icon: "success",
      }).then((res) => {
        router.push("/myaccount");
      });
    } else {
      swal({
        title: "Something went wrong!",
        timer: 2000,
        icon: "error",
      });
    }
    console.log("API Hit", data);
  };
  if (isSave) {
    submitHandeler();
  }
  useEffect(() => {
    console.log(isSave);
    console.log(profile);
    console.log(editProfile, " inside Effect");
  }, [isSave]);

  const onPressGender = (param) => {
    setGender(param);
    setEditProfile({ ...editProfile, Gender: param });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-4">
              {isMobile ? null : <h3 className="mt-1 ">Edit Profile</h3>}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className={`${
            isMobile
              ? "mob_editProfile p-2 "
              : "desk_editProfile col-lg-9 m-lg-auto rounded"
          }`}
        >
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={editUserProfileIcon}
                className={`${isMobile ? "" : "m-4"}`}
                width={`${isMobile ? "100" : "150"}`}
              />
            </div>
          </div>
          <div className={`${isMobile ? "" : "row px-5"}`}>
            <div className={`${isMobile ? "my-3" : "col-6"}`}>
              <label className="editprofile_lbl">Name:</label>
              <input
                defaultValue={
                  profile && profile.ProfileData.UserProfileFullName
                }
                placeholder="Enter Name"
                className={`${
                  isMobile ? "col-12 p-2 rounded-pill" : "col-12 py-1 rounded"
                }`}
                onChange={(e) => {
                  setEditProfile({ ...editProfile, Name: e.target.value });
                }}
              />
            </div>
            <div className={`${isMobile ? "my-3" : "col-6"}`}>
              <label className="editprofile_lbl">Date of Birth:</label>
              <input
                placeholder="Date of Birth"
                className={`${
                  isMobile ? "col-12 p-2 rounded-pill" : "col-12 p-1 rounded"
                }`}
                defaultValue={profile && profile.ProfileData.UserProfileDOB}
                onChange={(e) => {
                  setEditProfile({ ...editProfile, DOB: e.target.value });
                }}
              />
            </div>

            <div className={`${isMobile ? "my-3" : "col-6"}`}>
              <label className="editprofile_lbl">Mobile:</label>
              <input
                placeholder="Mobile"
                className={`${
                  isMobile ? "col-12 p-2 rounded-pill" : "col-12 p-1 rounded"
                }`}
                defaultValue={profile && profile.ProfileData.UserProfileMobile}
                onChange={(e) => {
                  setEditProfile({ ...editProfile, Mobile: e.target.value });
                }}
              />
            </div>
            <div className={`${isMobile ? "my-3" : "col-6"}`}>
              <label className="editprofile_lbl">Email:</label>
              <input
                placeholder="Email"
                className={`${
                  isMobile ? "col-12 p-2 rounded-pill" : "col-12 p-1 rounded"
                }`}
                // defaultValue={profile && profile.ProfileData.UserProfileMobile}
                onChange={(e) => {
                  setEditProfile({ ...editProfile, Mobile: e.target.value });
                }}
              />
            </div>
            <div className="col-12">
              <div className={`${isMobile ? "" : "px-4"}`}>
                <label className="editprofile_lbl">Gender:</label>
                <div className={"row"}>
                  <div className="col-3" onClick={() => onPressGender("Male")}>
                    <div className="row">
                      <input
                        type="radio"
                        name="radio"
                        checked={gender == "Male" ? true : false}
                      />
                      <label className="radio-cstm">Male</label>
                    </div>
                  </div>
                  <div
                    className="col-3"
                    onClick={() => onPressGender("Female")}
                  >
                    <div className="row">
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
            </div>
          </div>

          <div className="p-4 text-center">
            {isMobile ? (
              ""
            ) : (
              <button
                type="button"
                class="btn btn-light rounded-pill px-5 m-auto"
              >
                Save Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EdiProfileForm;

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
