import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../contexts/profile/ProfileContext";
import { editUserMale, userFemaleProfileIcon } from "../../services/imagesLink";
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
  const [email, setEmail] = useState("");
  const [editProfile, setEditProfile] = useState({
    Name: "",
    DOB: "",
    Mobile: "",
    Gender: "",
    Email: "",
  });
  const router = useRouter();

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
        Email: data.data.ProfileData.UserEmail,
      });
      setGender(data.data.ProfileData.UserProfileGender);
    }
  }, []);

  const submitHandeler = async () => {
    var formData = {
      Version: "V1",
      Language: "en",
      Platform: "android",
      UserId: userId,
      ProfilePicture: null,
      FullName: editProfile.Name,
      UserMobileNumebr: editProfile.Mobile,
      BirthDate: editProfile.DOB,
      Email: editProfile.Email,
      Gender: gender,
    };

    if (
      !formData.FullName ||
      !formData.UserMobileNumebr ||
      !formData.BirthDate ||
      !formData.Gender
    ) {
      return swal({
        title: "Enter all fields!",
        timer: 2000,
        icon: "error",
      });
    }
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
  };
  if (isSave && isMobile) {
    submitHandeler();
  }
  useEffect(() => {}, [isSave]);

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
              {isMobile ? null : (
                <h3 className="editpr_heading">Edit Profile</h3>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className={`${
            isMobile
              ? "col-12 mob_editProfile"
              : "desk_editProfile col-lg-9 m-lg-auto rounded"
          }`}
        >
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={gender == "Male" ? editUserMale : userFemaleProfileIcon}
                className={`${isMobile ? "mt-3" : "m-4"} border-50`}
                width={`${isMobile ? "100" : "150"}`}
                height={`${isMobile ? "100" : "150"}`}
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
                type="date"
                className={`${
                  isMobile
                    ? "col-12 p-2 rounded-pill form-control"
                    : "col-12 py-1 rounded form-control"
                }`}
                defaultValue={profile && profile.ProfileData.UserProfileDOB}
                onChange={(e) => {
                  setEditProfile({ ...editProfile, DOB: e.target.value });
                }}
              />
            </div>

            <div className={`${isMobile ? "my-3" : "my-3 col-6"}`}>
              <label className="editprofile_lbl">Mobile:</label>
              <input
                readOnly
                placeholder="Mobile"
                className={`${
                  isMobile ? "col-12 p-2 rounded-pill" : "col-12 py-1 rounded"
                }`}
                defaultValue={profile && profile.ProfileData.UserProfileMobile}
                onChange={(e) => {
                  setEditProfile({ ...editProfile, Mobile: e.target.value });
                }}
              />
            </div>
            <div className={`${isMobile ? "my-3" : "my-3 col-6"}`}>
              <label className="editprofile_lbl">Email:</label>
              <input
                placeholder="abc@gmail.com"
                className={`${
                  isMobile ? "col-12 p-2 rounded-pill" : "col-12 py-1 rounded"
                }`}
                defaultValue={profile && profile.ProfileData.UserEmail}
                onChange={(e) => {
                  setEditProfile({ ...editProfile, Email: e.target.value });
                }}
              />
            </div>
            <div className="col-12 mt-3">
              <style jsx>
                {`
                  .radio-cstm {
                    position: relative;
                    font-weight: 400;
                    font-size: 14px !important;
                  }
                  .radio-cstm:before {
                    margin-bottom: 5px;
                  }
                  .radio-cstm:after {
                    width: 10px;
                    height: 10px;
                  }
                  .radio-col {
                    max-width: 80px;
                  }
                  @media only screen and (max-width: 799px) {
                    .radio-cstm:before {
                      margin-bottom: 6px;
                    }
                    .radio-cstm:after {
                      top: 7px;
                    }
                  }
                `}
              </style>
              <div>
                <label className="editprofile_lbl">Gender:</label>
                <div className={`row ml-1 mt-1`}>
                  <div
                    className="col radio-col"
                    onClick={() => onPressGender("Male")}
                  >
                    <div className="row">
                      <input
                        type="radio"
                        name="radio"
                        checked={gender == "Male" ? true : false}
                      />
                      <label className="radio-cstm font-16">Male</label>
                    </div>
                  </div>
                  <div
                    className="col radio-col"
                    onClick={() => onPressGender("Female")}
                  >
                    <div className="row">
                      <input
                        type="radio"
                        name="radio"
                        checked={gender == "Female" ? true : false}
                      />
                      <label className="radio-cstm font-16">Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-3 mb-4 text-center`}>
            <button
              onClick={submitHandeler}
              type="button"
              class="btn btn-lg btn_submit rounded-pill px-5 m-auto font-16"
            >
              Save Profile
            </button>
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
