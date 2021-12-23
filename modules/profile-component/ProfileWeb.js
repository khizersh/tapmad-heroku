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

const MyAccountWeb = ({ profileData, allData, unSubscribe }) => {
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
    // if (imageState.pacakge == true) {
    //   setImageState({ pacakge: false, game: true });
    // } else {
    //   setImageState({ pacakge: true, game: false });
    // }
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
  }, [allData]);

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
    <div className="container">
      <div className="profile_div">
        <div className="row">
          <div>
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
          <div class="col-2 px-0">
            <div className="profile-user ">
              <img
                src={
                  profileData.Gender == "Male"
                    ? editUserMale
                    : userFemaleProfileIcon
                }
                className={"m-4 border-50"}
                width={"150"}
              />
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
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-3 px-0">
          <div className="mt-2 pt-1">
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
          <div className="mt-2 pt-1">
            <hr style={{ backgroundColor: "#FFFFFF" }} />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div class="package_div">
            <div class="container-fluid col-8 cont_style rounded">
              <div
                style={{
                  display:
                    selected && selected.title === "My Package"
                      ? "block"
                      : "none",
                }}
              >
                <div className="row px-5 pt-3">
                  <div className="col-6">
                    <span className="font-32 package_style">
                      <img
                        className="mx-3"
                        src={
                          allData && allData.PackageDescription[0].packageImage
                        }
                        width="20"
                      />
                      {allData && allData.MyPackage}
                    </span>
                    <br />

                    <span>
                      <text className="font-16">{price && price[0]}</text>
                      &nbsp;
                      <strong className="font-32">{price && price[1]}</strong>
                      &nbsp;
                      <text className="font-16">{price && price[2]}</text>
                    </span>
                    <br />
                    <text className="mb-3 font-13">
                      {allData &&
                        allData.PackageDescription[0].ContentDescription}
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
      </div>
    </div>
  );
};
export default MyAccountWeb;
