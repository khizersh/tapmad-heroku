import React, { useState } from "react";
import {
  awardIcon,
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
} from "../services/imagesLink";
import Link from "next/link";
const MyAccountWeb = ({ profileData, allData }) => {
  const [imageState, setImageState] = useState({
    pacakge: true,
    game: false,
  });

  const onSwitchImage = () => {
    console.log(imageState.pacakge);
    if (imageState.pacakge == true) {
      setImageState({ pacakge: false, game: true });
    } else {
      setImageState({ pacakge: true, game: false });
    }
  };
  return (
    <div className="d-none d-sm-block d-md-block d-lg-block d-xl-block parent_webdiv">
      <div className="profile_div">
        <div className="row p-1">
          <div class="m-1">
            <text style={{ fontSize: "26px" }}>My Profile</text>
          </div>
          <div class="mt-1 mx-3">
            <button
              type="button"
              className="btn btn-gradient text-light rounded-pill w-100"
            >
              Update Package
            </button>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-2">Image</div>
          <div class="col-5">
            <div class="row">
              <div class="col-5">
                <text className="text">Name:</text>
                <text className="text">Date of Birth:</text>
                <text className="text">Gender:</text>
                <text className="text">Email:</text>
                <text className="text">Mobile:</text>
              </div>
              <div class="col-6">
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
          <div class="col-3">
            <div class="col-12 float-right">
              <div class="row">
                <div>
                  <img src={coinIcon} width="50" alt="user_back" />
                </div>
                <div className="ml-2 mb-2">
                  My
                  <br />
                  <span>
                    Coins <strong>5.5k</strong>
                  </span>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-gradient text-light rounded-pill p-2 w-100"
                >
                  Buy More Coins
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#FFFFFF" }} />

      <div class="container-sm rounded-pill row option_div p-3">
        <div className="m-auto" onClick={onSwitchImage}>
          <span style={{ color: imageState.pacakge ? "#87c242" : "#000" }}>
            <img
              src={imageState.pacakge ? colorPackage : blackPackage}
              width="35"
              alt="User"
              className="mx-3 logo-img"
            />
            <strong>My Package</strong>
          </span>
          {imageState.pacakge ? <div class="green-bar"></div> : null}
        </div>
        <div className="m-auto" onClick={onSwitchImage}>
          <span style={{ color: imageState.game ? "#87c242" : "#000" }}>
            <img
              src={imageState.game ? colorGaming : blackPackage}
              width="35"
              alt="User"
              className="mx-3 logo-img"
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
                        className="btn w-100 px-2  text-light rounded-pill"
                        style={{
                          backgroundColor: "#1D211F",
                          fontSize: "14px",
                        }}
                      >
                        Billing History
                      </button>
                    </Link>
                  </div>
                  <div className="col-4 ">
                    <button
                      type="button"
                      className="btn w-100 px-2  text-light rounded-pill"
                      style={{ backgroundColor: "#1D211F", fontSize: "14px" }}
                    >
                      Upgrade Package
                    </button>
                  </div>
                  <div className="col-4 ">
                    <button
                      type="button"
                      className="btn w-100 px-2  text-light rounded-pill"
                      style={{ backgroundColor: "#1D211F", fontSize: "14px" }}
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
