import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  awardIcon,
  creditcardIcon,
  editUserMale,
  gamingIcon,
  infoIcon,
  minusIcon,
  packageIcon,
  playTrophyIcon,
  plusIcon,
  priceIcon,
  stadiumIcon,
  trophyIcon,
  userFemaleProfileIcon,
  userIcon,
} from "../../services/imagesLink";
import Link from "next/link";
import NavbarHOC from "../navbar/NavbarHOC";

const MyAccountMobile = ({ profileData, allData, onClickBack , upgardeBtn }) => {
  const [show, setShow] = useState({
    games: false,
    package: false,
  });
  const onPressHandeler = (key) => {
    if (show[key]) {
      setShow({ ...show, [key]: false });
    } else {
      setShow({ ...show, [key]: true });
    }
  };
  const router = useRouter();

  const clickEditProfile = () => {
    router.push("/change-package");
  };

  return (
    <div>
      <style jsx>
        {`
        .user_img {
          margin: 0 !important;
        }
        dl {
          margin-bottom: 5px;
        }
        dl dd {
          margin-bottom: 0;
        }
        `}
      </style>
      {/* <NavbarHOC>
        <div>
          <button
            className="btn"
            style={{
              fontSize: "13px",
              color: "black",
            }}
            onClick={onClickBack}
          >
            <img src="/icons/login-back.svg" />
          </button>
        </div>
        <div className="margin-y-auto mr-2">
          <img src={creditcardIcon} width="20" alt="card" className="mr-2" />
          <a onClick={clickEditProfile} className="text-white">
            Billing Details
          </a>
        </div>
      </NavbarHOC> */}
      <div className="d-sm-none">
        <div className="row align-items-center">
          <div className="col-4">
            <img
              src={
                allData && allData.ProfileData.UserProfileGender == "Male"
                  ? editUserMale
                  : userFemaleProfileIcon
              }
              className="border-50 img-fluid"
              width="100"
            />
          </div>
          <div className="col-4">
            <div>Name</div>
            <div>Date of Birth</div>
          </div>
          <div className="flex-grow-1 pl-3">
            <div>{profileData && profileData.FullName}</div>
            <div>{profileData && profileData.BirthDate}</div>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3 mb-2">
          <img
            src={infoIcon}
            alt="User"
            className="mx-1 user_img"
            width="33px"
            height="33px"
          />
          <p className="h_style flex-grow-1 pl-3 mb-0">Personal Info:</p>
        </div>
        {profileData ? (
          <>
            <dl>
              <dt>Email:</dt>
              <dd>{profileData.Email}</dd>
            </dl>
            <dl>
              <dt>Mobile:</dt>
              <dd>{profileData.UserMobileNumebr}</dd>
            </dl>
            <dl>
              <dt>Gender :</dt>
              <dd>{profileData.Gender}</dd>
            </dl>
          </>
        ) : (
          <></>
        )}

        {/* <div className="row offset-1">
        <div className="col ml-3">
          <div className="m-1 fnt">Email:</div>
          <div className="m-1 fnt">Mobile:</div>
          <div className="m-1 fnt">Gender:</div>
        </div>
        <div className="col">
          <div>{profileData && profileData.Email}</div>
          <div>{profileData && profileData.UserMobileNumebr}</div>
          <div>{profileData && profileData.Gender}</div>
        </div>
      </div> */}

        <div className="d-flex align-items-center ju mt-3">
          <img
            src={packageIcon}
            alt="Package"
            className="mx-1 user_img"
            width="33px"
            height="33px"
          />
          <p className="h_style flex-grow-1 px-3 mb-0">My Package:</p>
          <img
            onClick={() => onPressHandeler("package")}
            src={show.package ? minusIcon : plusIcon}
            width="20"
            alt="minus"
          />
        </div>

        {/* <div className={`row package mt-3`}>
        <div className="col-2">
          <img src={packageIcon} width="35" alt="User" className="mx-1" />
        </div>
        <div className="col-8">
          <p className="h_style">My Package:</p>
        </div>
        <div className="col-2">
          <img
            onClick={() => onPressHandeler("package")}
            src={show.package ? minusIcon : plusIcon}
            width="20"
            alt="minus"
            className="mr-4"
          />
        </div>
      </div> */}

        <div className={` ${show.package ? "row mx-0 mt-3" : "d-none"}`}>
          <div className="col-6 ">
            <div className="row border border-style rounded text-center">
              <div className="col-8 p-0 text-right package-box">
                <div className="std_txt mt-1">
                  {allData && allData.PackageDescription[0].PackageName}
                </div>
                <div className="sub-title text-grey">Per month</div>
              </div>
              <div className="col-4 p-0">
                <img src={priceIcon} width="45" alt="minus" />
              </div>
            </div>
          </div>
          <div className="col-6 pr-0">
            <div>
              <button
                type="button"
                className="btn btn-light rounded-pill p-1 w-100"
              >
                Billing History
              </button>
            </div>
            <div className="mt-1">
              <button
                type="button"
                className="btn btn-gradient text-light rounded-pill p-1 w-100"
                onClick={clickEditProfile}
                // disabled={upgardeBtn}
              >
                Update Package
              </button>
            </div>
          </div>
        </div>
        <div className={` ${show.games ? "row mx-0 mt-2" : "d-none"}`}>
          <div className="col-6 rounded p-1">
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
          <div className="col-6 p-1">
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

          <div className="col-6 p-1">
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

          <div className="col-6 p-1">
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
  );
};
export default MyAccountMobile;
