import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { post } from "../../services/http-service";
import { updateUserProfile } from "../../services/apilinks";
import swal from "sweetalert";
import {
  usernameIcon,
  phoneIcon,
  calenderIcon,
  mailIcon,
} from "../../services/imagesLink";
import { MyAccountService } from "./myaccount.service";
import { ProfileViewed, UpdateProfile } from "../../services/gtm";
import { Cookie } from "../../services/cookies";
import { useRouter } from "next/router";

const PersonalInfo = ({ data }) => {
  const router = useRouter();
  const { redirect } = router.query;
  const [userImage, setUserImage] = useState(null);
  const [btnEnable, setBtnEnable] = useState(false);
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

  const onChange = (e) => {
    let num = e.target.value;
    if (e.target.name == "UserMobileNumebr") {
      if (+num === +num) {
        setBtnEnable(true);
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
      }
    } else {
      setBtnEnable(true);
      setProfileData({ ...profileData, [e.target.name]: e.target.value });
    }
  };
  const onSubmit = async () => {
    var formData = new FormData();
    for (var property in profileData) {
      if (profileData.hasOwnProperty(property)) {
        formData.append(property, profileData[property]);
      }
    }
    const data = await MyAccountService.updateUserProfileData(formData);

    if (data != null) {
      if (data.data.UserProfile.UserProfilePicture != userImage) {
        setUserImage(data.data.UserProfile.UserProfilePicture);
      }
      Cookie.setCookies("userProfileName", profileData.FullName);
      setBtnEnable(false);
      UpdateProfile(profileData);
      swal({
        title: data.data.Response.message,
        timer: 2000,
        icon: "success",
      }).then((res) => {
        if (redirect) {
          const back = Cookie.getCookies("backUrl")
          router.push(back)
        }
      });
    } else {
      swal({
        title: "Something went wrong!",
        timer: 2000,
        icon: "error",
      });
    }
  };
  const onChangeFile = (files) => {
    setBtnEnable(true);
    setUserImage(URL.createObjectURL(files[0]));
    setProfileData({ ...profileData, ProfilePicture: files[0] });
  };
  useEffect(() => {
    if (data && data.UserId) {
      setUserImage(data.ProfilePicture);

      setProfileData({
        ...profileData,
        UserId: data.UserId,
        FullName: data.FullName,
        UserMobileNumebr: data.UserMobileNumebr,
        BirthDate: data.BirthDate,
        Email: data.Email,
      });
    }
  }, [data]);
  useEffect(() => {
    ProfileViewed();
  }, []);
  return (
    <div className="tm_usr_img text-center left-profile ">
      {/* user profile */}

      <img
        src={userImage ? userImage : "/static/ava.png"}
        alt="me"
        width="64"
        className="user-img"
      />

      <h5 className="mt-2">{profileData.UserMobileNumebr}</h5>
      <div className="input-group">
        <input
          type="text"
          placeholder="Change Picture"
          className="pl-2 res-width"
          disabled
          style={{ backgroundColor: "#EEEEEE", border: "none" }}
        />
        <span className="input-group-btn">
          <div className="btn btn-default image-preview-input form-control rounded-0">
            <span className="fa fa-folder-open"></span>
            <span className="image-preview-input-title pl-1">Browse</span>
            <input
              type="file"
              accept="image/png, image/jpeg, image/gif"
              onChange={(e) => onChangeFile(e.target.files)}
            />
          </div>
        </span>
      </div>
      {/* Personal info */}
      <div className="tm_fm_flds">
        <h5 className="text-left">Personal Information</h5>
        <div className="form-group">
          <label className="float-left">Full name</label>
          <img
            src={usernameIcon}
            width="24"
            className="float-right"
            alt="username"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            maxLength="20"
            name="FullName"
            onChange={onChange}
            value={profileData.FullName}
          />
        </div>
        <div className="form-group">
          <label className="float-left">Mobile Number</label>
          <img src={phoneIcon} width="24" className="float-right" alt="phone" />
          <input
            type="text"
            className="form-control"
            name="UserMobileNumebr"
            onChange={onChange}
            value={profileData.UserMobileNumebr}
            placeholder="Mobile Number"
          />
        </div>
        <div className="form-group">
          <label className="float-left">Date of Birth</label>
          <img
            src={calenderIcon}
            width="24"
            className="float-right"
            alt="calender"
          />
          <input
            type="date"
            className="form-control"
            name="BirthDate"
            onChange={onChange}
            value={profileData.BirthDate}
            placeholder="Date of Birth"
          />
        </div>
        <div className="form-group">
          <label className="float-left">Email Address</label>
          <img
            src={calenderIcon}
            width="24"
            className="float-right"
            alt="calender"
          />
          <input
            type="email"
            required
            name="Email"
            onChange={onChange}
            value={profileData.Email || ""}
            className="form-control"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <button
            className={`profile-btn w-100  border-0 rounded-0 text-white ${
              btnEnable ? "" : "btn-click"
            }`}
            onClick={onSubmit}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
