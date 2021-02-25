import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./myaccount.module.css";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { post } from "../../services/http-service";
import { updateUserProfile } from "../../services/apilinks";
import swal from "sweetalert";

const PersonalInfo = ({ data }) => {
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
    setBtnEnable(true);
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    var formData = new FormData();
    for (var property in profileData) {
      if (profileData.hasOwnProperty(property)) {
        formData.append(property, profileData[property]);
      }
    }

    post(updateUserProfile, formData).then((res) => {
      if (
        res.data &&
        res.data.Response &&
        res.data.Response.responseCode == 1
      ) {
        if (res.data.UserProfile.UserProfilePicture != userImage) {
          setUserImage(res.data.UserProfile.UserProfilePicture);
        }
        swal({
          title: res.data.Response.message,
          timer: 2000,
          icon: "success",
        });
      }
    });
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
            src="http://d1s7wg2ne64q87.cloudfront.net/web/images/icons/UserName.png"
            width="24"
            className="float-right"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Full name"
            name="FullName"
            onChange={onChange}
            value={profileData.FullName}
          />
        </div>
        <div className="form-group">
          <label className="float-left">Mobile Number</label>
          <img
            src="http://d1s7wg2ne64q87.cloudfront.net/web/images/icons/phone.png"
            width="24"
            className="float-right"
          />
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
            src="http://d1s7wg2ne64q87.cloudfront.net/web/images/icons/calendar.png"
            width="24"
            className="float-right"
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
            src="http://d1s7wg2ne64q87.cloudfront.net/web/images/icons/mail.png"
            width="24"
            className="float-right"
          />
          <input
            type="email"
            required
            name="Email"
            onChange={onChange}
            value={profileData.Email}
            className="form-control"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <button
            className={`profile-btn w-100 form-control border-0 rounded-0 text-white ${
              btnEnable ? "" : "btn-click"
            }`}
            onClick={onSubmit}
            // disabled={btnEnable}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
