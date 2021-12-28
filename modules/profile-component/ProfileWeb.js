import React, { useContext, useEffect, useState } from "react";
import {
  awardIcon,
  blackGaming,
  blackPackage,
  coinIcon,
  colorGaming,
  colorPackage,
  connectIcon,
  deviceIcon,
  editUserMale,
  playTrophyIcon,
  qualityIcon,
  stadiumIcon,
  trophyIcon,
  userFemaleProfileIcon,
  userProfileIcon,
} from "../../services/imagesLink";
import { MainContext } from "../../contexts/MainContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { MyAccountService } from "../my-account/myaccount.service";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { UPDATE_PACKAGE } from "../../contexts/auth/AuthReducers";
import { GameContext } from "../../contexts/GameContext";
import TabsWithIcon from "../../components/TabsWithIcon";

const MyAccountWeb = ({ profileData, allData, unSubscribe, upgardeBtn }) => {
  console.log("upgardeBtn: ",upgardeBtn);
  const { setLoader } = useContext(MainContext);
  const { updateBuyModal } = useContext(GameContext);
  const [price, setPrice] = useState(null);
  const [selected, setSelected] = useState(null);
  const router = useRouter();
  const [imageState, setImageState] = useState({
    pacakge: true,
    game: false,
  });
  const { dispatch, AuthState } = useContext(AuthContext);
  const onSwitchImage = (data) => {
    setSelected(data);
  };
  const onClickUpgradePackage = async () => {
    await dispatch({ type: UPDATE_PACKAGE, data: true });
    router.push("/change-package");
  };

  useEffect(() => {
    if (allData) {
      setPrice(allData.PackageDescription[0].PackagePrice);
    }
    setSelected({
      title: "My Package",
      selectedIcon: colorPackage,
      icon: blackPackage,
    });
  }, [allData , upgardeBtn]);

  const data = [
    {
      title: "My Package",
      selectedIcon: colorPackage,
      icon: blackPackage,
    },
    {
      title: "My Games",
      selectedIcon: colorGaming,
      icon: blackGaming,
    },
  ];
  //Dynaimc Downgrade/Upgrade
  const setPackageStatus = () => {
    if (allData) {
      if (allData.PackageDescription[0].IsUpdgradeOrDownGrade == 1) {
        return "Upgrade Package";
      }
      if (allData.PackageDescription[0].IsUpdgradeOrDownGrade == 2) {
        return "Upgrade/Downgrade Package";
      }
      if (allData.PackageDescription[0].IsUpdgradeOrDownGrade == 3) {
        return "Downgrade Package";
      }
    }
  };

  const onClickBuy = () => {
    updateBuyModal(true);
  };
  return (
    <>
      <style jsx>
        {`
          dl {
            display: grid;
            grid-template-columns: 150px 1fr;
            font-size: 0.9em;
            margin: 0;
          }
          dl + dl {
            margin-top: 5px;
          }
          dl dt {
            font-weight: 300;
          }
          dl dd {
            margin: 0;
          }
          .profile-img {
            width: 100%;
            height: auto;
          }
          .package-detail {
            line-height: 1;
          }
          .package-price {
            color: white;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            vertical-align: middle;
          }
          .package-currency {
            font-weight: 400;
            margin-top: 5px;
          }
          .package-duration {
            width: 50px;
            font-weight: 300;
          }
          .package-feature {
            margin-top: 3.5rem;
          }
          .package-feature text {
            display: block;
            font-size: 0.9em;
            line-height: 1;
            margin-top: 5px;
          }
          .package-border hr {
            margin: 0;
          }
        `}
      </style>
      <div className="container">
        <div className="profile_div">
          <div className="d-flex align-items-center line-1">
            <div>
              <h4 className="mb-0">My Profile</h4>
            </div>
            <div className="ml-3">
              <Link href="/editprofile">
                <button
                  type="button"
                  className="btn btn_submit text-light rounded-pill w-100 px-3 font-11"
                >
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
          <div className="row mt-4 align-items-center">
            <div className="col-md-2 align-self-start">
              <div className="profile-user ">
                <img
                  src={
                    allData && allData.ProfileData.UserProfileGender == "Male"
                      ? editUserMale
                      : userFemaleProfileIcon
                  }
                  className="profile-img  border-50"
                />
              </div>
            </div>
            <div className="col-md-5">
              {profileData ? (
                <>
                  <dl>
                    <dt>Name:</dt>
                    <dd>{profileData.FullName}</dd>
                  </dl>
                  <dl>
                    <dt>Date of Birth:</dt>
                    <dd>{profileData.BirthDate}</dd>
                  </dl>
                  <dl>
                    <dt>Gender:</dt>
                    <dd>{profileData.Gender}</dd>
                  </dl>
                  <dl>
                    <dt>Email:</dt>
                    <dd>{profileData.Email}</dd>
                  </dl>
                  <dl>
                    <dt>Mobile:</dt>
                    <dd>{profileData.UserMobileNumebr}</dd>
                  </dl>
                </>
              ) : (
                <></>
              )}
            </div>
            {/* buy coins with coins show here */}
            {/* <div className="col-5 coins-div">
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
                    Coins <strong>{allData && allData.UserCoins}</strong>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-2">
                <button
                  type="button"
                  className="btn font-11 btn-gradient text-light rounded-pill px-3"
                  onClick={onClickBuy}
                >
                  Buy more coins
                </button>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>

      <div className="row mt-4 align-items-center">
        <div className="col-3 px-0">
          <div className="package-border">
            <hr style={{ backgroundColor: "#FFFFFF" }} />
          </div>
        </div>
        <div className="col-6">
          <TabsWithIcon
            data={data}
            onChange={onSwitchImage}
            selected={selected}
          />
        </div>
        <div className="col-3 pl-0">
          <div className="package-border">
            <hr style={{ backgroundColor: "#FFFFFF" }} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <div className="package_div">
              <div className="container-fluid col-8 cont_style rounded px-4">
                <div
                  style={{
                    display:
                      selected && selected.title === "My Package"
                        ? "block"
                        : "none",
                  }}
                >
                  <div className="row pt-3">
                    <div className="col-6">
                      <div className="font-32 package_style d-flex flexp-wrap-wrap align-items-center">
                        <img
                          className="mr-3 align-self-start mt-2"
                          src={
                            allData &&
                            allData.PackageDescription[0].packageImage
                          }
                          width={20}
                          height={18}
                        />
                        <div className="package-detail">
                          {allData && allData.MyPackage}
                          <div className="package-price">
                            <text className="font-16 package-currency">
                              {price && price[0]}
                            </text>
                            &nbsp;
                            <strong className="font-32">
                              {price && price[1]}
                            </strong>
                            &nbsp;
                            <text className="font-16 package-duration">
                              {price && price[2]}
                            </text>
                          </div>
                        </div>
                      </div>
                      <text className="mb-3 font-13 mt-2 d-block">
                        {allData &&
                          allData.PackageDescription[0].ContentDescription}
                      </text>
                    </div>
                    <div className="container col-2 package-feature">
                      <div className="text-center">
                        <img
                          src={qualityIcon}
                          width="30"
                          height="30"
                          alt="Quality"
                        />
                        <text className="">
                          {allData &&
                            allData.PackageDescription[0].PackageStream}
                        </text>
                      </div>
                    </div>
                    <div className="container col-2 package-feature">
                      <div className="text-center">
                        <img
                          src={deviceIcon}
                          width="30"
                          height="30"
                          alt="Device"
                        />
                        <text>Devices</text>
                        {allData &&
                          allData.PackageDescription[0].PackageDevices}
                      </div>
                    </div>
                    <div className="container col-2 package-feature">
                      <div className="text-center">
                        <img
                          src={connectIcon}
                          width="30"
                          height="30"
                          alt="Connect"
                        />
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
                        <div className="col-4">
                          <Link href="/billing-history">
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
                            disabled={upgardeBtn}
                            className="btn w-100 px-2  text-light rounded-pill optButtons"
                            onClick={onClickUpgradePackage}
                          >
                            Upgrade Package
                            {/* {setPackageStatus()} */}
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
                <div
                  style={{
                    display:
                      selected && selected.title === "My Games"
                        ? "block"
                        : "none",
                  }}
                >
                  <h4 style={{ color: "#37C673" }} className="pt-3">
                    My Games
                  </h4>
                  <div className="row pb-4 no-gutters">
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
        </div>
      </div>
    </>
  );
};
export default MyAccountWeb;
