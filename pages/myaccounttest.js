import { useEffect, useState } from "react";
import { MyAccountService } from "../modules/my-account/myaccount.service";
import { Cookie } from "../services/cookies";
import {
  awardIcon,
  gamingIcon,
  infoIcon,
  packageIcon,
  playTrophyIcon,
  stadiumIcon,
  trophyIcon,
  userIcon,
} from "../services/imagesLink";

const MyAccountTrial = () => {
  const [userId, setUserId] = useState(Cookie.getCookies("userId"));
  const [postFormData, setPostFormData] = useState({
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
      const data = await MyAccountService.getUserData(postFormData);
      console.log(data.data, "DO");
      if (data != null) {
        if (data.responseCode == 1) {
          setAllData(data.data);
          setProfileData({
            ...profileData,
            UserId: userId,
            Email: data.data.User.UserEmail || "--",
            UserMobileNumebr: data.data.UserProfile.UserProfileMobile || "--",
            FullName: data.data.UserProfile.UserProfileFullName || "--",
            BirthDate: data.data.UserProfile.UserProfileDOB || "--",
            ProfilePicture: data.data.UserProfile.UserProfilePicture || "--",
            Gender: data.data.UserProfile.UserProfileGender || "--",
          });
        }
      }
    }
  }, []);

  return (
    <div className="p-4 d-sm-none" style={{ backgroundColor: "#171b36" }}>
      <div className="row">
        <div className="col-3">
          <img src={userIcon} width="100" alt="User" />
        </div>
        &nbsp;&nbsp; &nbsp;
        <div className="col pt-3">
          <div>Name</div>
          <div>Date of Birth</div>
        </div>
        <div className="col pt-3">
          <div>{profileData && profileData.FullName}</div>
          <div>{profileData && profileData.BirthDate}</div>
        </div>
      </div>
      <div className="row  mt-3">
        <div className="col-2">
          <img src={infoIcon} width="35" alt="User" className="mx-1" />
        </div>
        <div className="col">
          <p className="h_style">Personal Info:</p>
        </div>
      </div>
      <div className="row offset-1">
        <div className="col">
          <div>Email</div>
          <div>Mobile</div>
          <div>Gender</div>
        </div>
        <div className="col">
          <div>{profileData && profileData.Email}</div>
          <div>{profileData && profileData.UserMobileNumebr}</div>
          <div>{profileData && profileData.Gender}</div>
        </div>
      </div>

      <div className="row  mt-3">
        <div className="col-2">
          <img src={gamingIcon} width="35" alt="User" className="mx-1" />
        </div>
        <div className="col">
          <p className="h_style">My Games:</p>
        </div>
      </div>
      <div className="row ">
        <div className="col-6 mb-2 rounded p-1">
          <div className=" rounded" style={{ backgroundColor: "#bf5db7" }}>
            <div className="row">
              <div className="col-6 mt-2 text-center">
                <img src={stadiumIcon} width="40" alt="User" />
              </div>
              <div className="col-6 mt-2 text-center">
                <p>
                  In Play
                  <br />0
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 p-1">
          <div className=" rounded" style={{ backgroundColor: "#ffa700" }}>
            <div className="row">
              <div className="col-6 mt-2 text-center">
                <img src={trophyIcon} width="40" alt="User" />
              </div>
              <div className="col-6 mt-2 text-center">
                <p>
                  Won
                  <br />0
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 p-1">
          <div className=" rounded" style={{ backgroundColor: "#fe4646" }}>
            <div className="row">
              <div className="col-6 mt-2 text-center">
                <img src={playTrophyIcon} width="40" alt="User" />
              </div>
              <div className="col-6 mt-2 text-center">
                <p>
                  Lost
                  <br />0
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 p-1">
          <div className=" rounded" style={{ backgroundColor: "#37c673" }}>
            <div className="row">
              <div className="col-6 mt-2 text-center">
                <img src={awardIcon} width="40" alt="User" />
              </div>
              <div className="col-6 mt-2 text-center">
                <p>
                  Rank
                  <br />0
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row  mt-3">
        <div className="col-2">
          <img src={packageIcon} width="35" alt="User" className="mx-1" />
        </div>
        <div className="col">
          <p className="h_style">My Package:</p>
        </div>
      </div>

      <div className="row">
        <div className="col-5 border border-style rounded ">
          <div className="Stan_container">
            <p className="std_txt"> STANDARD</p>
            <p className="pm_txt">per month</p>
          </div>
        </div>
        <div className="col-7 ">
          <div>
            <button type="button" class="btn btn-light rounded-pill p-1 w-100">
              Billing History
            </button>
          </div>
          <div className="mt-1">
            <button
              type="button"
              className="btn btn-gradient text-light rounded-pill p-1 w-100"
            >
              Update Package
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          type="button"
          className="w-100 btn btn-dark text-light rounded-pill"
        >
          Unsubscribe
        </button>
      </div>
    </div>
  );
};
export default MyAccountTrial;
