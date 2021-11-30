import React, { useContext, useState } from "react";
import {
  awardIcon,
  blackGaming,
  blackPackage,
  coinIcon,
  colorGaming,
  colorPackage,
  connectIcon,
  deviceIcon,
  playTrophyIcon,
  qualityIcon,
  stadiumIcon,
  trophyIcon,
  userProfileIcon,
} from "../../services/imagesLink";
import { MainContext } from "../../contexts/MainContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { MyAccountService } from "../my-account/myaccount.service";
import { GlobalService } from "../global-service";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { UPDATE_PACKAGE } from "../../contexts/auth/AuthReducers";

const MyAccountWeb = ({ profileData, allData, userId }) => {
  const { setLoader } = useContext(MainContext);
  const router = useRouter();
  const [imageState, setImageState] = useState({
    pacakge: true,
    game: false,
  });
  const { dispatch, AuthState } = useContext(AuthContext);
  const onSwitchImage = () => {
    console.log(imageState.pacakge);
    if (imageState.pacakge == true) {
      setImageState({ pacakge: false, game: true });
    } else {
      setImageState({ pacakge: true, game: false });
    }
  };
  const onClickUpgradePackage = async () => {
    await dispatch({ type: UPDATE_PACKAGE, data: true });
    router.push("/change-package");
  };
  const unSubscribe = () => {
    setLoader(true);
    let body = {
      Language: "en",
      Platform: "android",
      ProductId: allData.MyPackage,
      UserId: userId,
      Version: "V1",
      headers: GlobalService.authHeaders() || null,
    };
    MyAccountService.unsubcribeUser(body)
      .then((res) => {
        if (res.responseCode == 1) {
          swal({
            title: res.message,
            timer: 2500,
            icon: "success",
          });
          setdeactivated(true);
          setLoader(false);
        } else if (res.responseCode == 5) {
          swal({
            title: res.message,
            timer: 2500,
            icon: "success",
          });
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
  };

  return (
    <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
      <div className="profile_div">
        <div className="row">
          <div class="padding-left-65px">
            <h4>My Profile</h4>
          </div>
          <div class="ml-3">
            <Link href="/editprofile">
              <button
                type="button"
                className="btn btn-gradient text-light rounded-pill w-100 px-3 font-11"
              >
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-2">
            <div className="profile-user text-center">
              <img src={userProfileIcon} className="profile-img"/>
            </div>
          </div>
          <div class="col-5">
            <div class="row">
              <div class="col-3 text-grey">
                <text className="text">Name:</text>
                <text className="text">Date of Birth:</text>
                <text className="text">Gender:</text>
                <text className="text">Email:</text>
                <text className="text">Mobile:</text>
              </div>
              <div class="col-6 text-grey">
                <text className="text">
                  {profileData && profileData.FullName}
                </text>
                <text className="text">
                  {profileData && profileData.BirthDate}
                </text>
                <text className="text">
                  {profileData && profileData.Gender}
                </text>
                <text className="text">{profileData && profileData.Email}</text>
                <text className="text">
                  {profileData && profileData.UserMobileNumebr}
                </text>
              </div>
            </div>
          </div>
          <div class="col-5 coins-div">
            <div className="row float-right">
              <div className="col-6 text-right pr-1">
                <img src={coinIcon} width="55" alt="user_back" />
              </div>
              <div className="col-6 text-left">
                <div className="row">
                  <div className="col-12 font-14 text-grey">My</div>
                </div>
                <div className="row">
                  <div className="col-12 font-14 text-grey">
                    Coins <strong>5.5k</strong>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-2">
                <button
                  type="button"
                  className="btn font-11 btn-gradient text-light rounded-pill px-3"
                >
                  Buy more coins
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#FFFFFF" }} />

      <div class="container-sm rounded-pill row option_div p-3">
        <div className="m-auto cursor-pointer" onClick={onSwitchImage}>
          <span style={{ color: imageState.pacakge ? "#87c242" : "#000" }}>
            <img
              src={imageState.pacakge ? colorPackage : blackPackage}
              width="35"
              alt="User"
              className="pr-3 logo-img"
            />
            <strong>My Package</strong>
          </span>
          {imageState.pacakge ? <div class="green-bar"></div> : null}
        </div>
        <div className="m-auto cursor-pointer" onClick={onSwitchImage}>
          <span style={{ color: imageState.game ? "#87c242" : "#000" }}>
            <img
              src={imageState.game ? colorGaming : blackGaming}
              width="40"
              alt="User"
              className="pr-3 logo-img"
            />
            <strong>My Games</strong>
          </span>
          {imageState.game ? <div class="green-bar"></div> : null}
        </div>
      </div>
      <div class="package_div">
        <div class="container-fluid col-8 cont_style rounded">
          <div style={{ display: imageState.pacakge ? "block" : "none" }}>
            <div className="row px-5 pt-3">
              <div className="col-6">
                <text
                  style={{
                    fontSize: "20px",
                    color: "#37C673",
                    fontWeight: "650",
                  }}
                >
                  {allData && allData.MyPackage}
                </text>
                <text>
                  <br />
                  {allData && allData.PackageDescription[0].PackagePrice}
                </text>
                <br />
                <text style={{ fontSize: "13px" }}>
                  {allData && allData.PackageDescription[0].ContentDescription}
                </text>
              </div>
              <div className="container col-2">
                <div style={{ height: "2.1rem" }}></div>
                <div className="text-center">
                  <img src={qualityIcon} width="30" alt="Quality" />
                  <br />
                  <text>
                    {allData && allData.PackageDescription[0].PackageStream}
                  </text>
                </div>
              </div>
              <div className="container col-2">
                <div style={{ height: "2.1rem" }}></div>
                <div className="text-center">
                  <img src={deviceIcon} width="30" alt="Device" />
                  <br />
                  <text style={{ fontSize: "18px" }}>Devices</text>
                  <br />
                  {allData && allData.PackageDescription[0].PackageDevices}
                </div>
              </div>
              <div className="container col-2">
                <div style={{ height: "2.1rem" }}></div>
                <div className="text-center">
                  <img src={connectIcon} width="30" alt="Connect" />
                  <br />
                  <text>
                    {allData && allData.PackageDescription[0].IsCasting
                      ? "Casting"
                      : "No Casting"}
                  </text>
                </div>
              </div>
            </div>
            <div className="row mt-3 pb-3">
              <div className="offset-1 col-10">
                <div className="row">
                  <div className="col-4 ">
                    <Link href="/billingtest">
                      <button
                        type="button"
                        className="btn w-100 px-2  text-light rounded-pill optButtons"
                      >
                        Billing History
                      </button>
                    </Link>
                  </div>
                  <div className="col-4 ">
                    <button
                      type="button"
                      className="btn w-100 px-2  text-light rounded-pill optButtons"
                      onClick={onClickUpgradePackage}
                    >
                      Upgrade Package
                    </button>
                  </div>
                  <div className="col-4 ">
                    <button
                      type="button"
                      className="btn w-100 px-2  text-light rounded-pill optButtons"
                      onClick={() => unSubscribe()}
                    >
                      Unsubscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: imageState.game ? "block" : "none" }}>
            <h4 style={{ color: "#37C673" }} className="py-2">
              My Games
            </h4>
            <div className="row px-5 pb-4">
              <div className="col-3 p-1">
                <div className="block_play">
                  <div className="row">
                    <div className="col-6 mt-2 text-center">
                      <img src={stadiumIcon} width="40" alt="User" />
                    </div>
                    <div className="col-6 mt-2 text-center">
                      <span className="mygame_text">
                        In Play
                        <br />
                        <span className="mygame_num">
                          {allData && allData.GameDetail.PlayingBets}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 p-1">
                <div className="block_won">
                  <div className="row">
                    <div className="col-6 mt-2 text-center">
                      <img src={trophyIcon} width="40" alt="User" />
                    </div>
                    <div className="col-6 mt-2 text-center">
                      <span className="mygame_text">
                        Won
                        <br />
                        <span className="mygame_num">
                          {allData && allData.GameDetail.WinningBids}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 p-1">
                <div className="block_lost">
                  <div className="row">
                    <div className="col-6 mt-2 text-center">
                      <img src={playTrophyIcon} width="40" alt="User" />
                    </div>
                    <div className="col-6 mt-2 text-center">
                      <span className="mygame_text">
                        Lost
                        <br />
                        <span className="mygame_num">
                          {allData && allData.GameDetail.LossBids}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-3 p-1">
                <div className="block_rank">
                  <div className="row">
                    <div className="col-6 mt-2 text-center">
                      <img src={awardIcon} width="40" alt="User" />
                    </div>
                    <div className="col-6 mt-2 text-center">
                      <span className="mygame_text">
                        Rank
                        <br />
                        <span className="mygame_num">
                          {" "}
                          {allData && allData.GameDetail.UserRank}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyAccountWeb;