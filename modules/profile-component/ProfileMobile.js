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

const MyAccountMobile = ({
  profileData,
  allData,
  onClickBack,
  upgardeBtn,
  unSubscribe,
}) => {
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
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 0;
            line-height: 1.2;
            gap: 0.5rem;
          }
          dl + dl {
            margin-top: 5px;
          }
          dl dt {
            font-weight: 400;
          }
          dl dt,
          dl dd {
            width: calc(50% - 0.5rem);
          }
          dl dd {
            margin-bottom: 0;
          }
          .dot {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            display: inline-block;
            font-size : 10px;
          }
        `}
      </style>

      <div className="d-sm-none">
        <div className="row align-items-center">
          <div className="col-4">
            {allData?.PackageProfleImage ? (
              <img
                src={allData?.PackageProfleImage}
                className="border-50 img-fluid"
                width="100"
              />
            ) : (
              <></>
            )}
          </div>
          {profileData ? (
            <div className="flex-grow-1">
              <dl>
                <dt>Name</dt>
                <dd>{profileData.FullName}</dd>
              </dl>
              <dl>
                <dt>Date of Birth</dt>
                <dd>{profileData.BirthDate}</dd>
              </dl>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="d-flex align-items-center mt-5 mb-2">
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
          <div className="ml-5">
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
          </div>
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

        <div className="d-flex align-items-center ju mt-5">
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
                <div className="sub-title text-grey">
                  {allData?.PackageDescription[0]?.PackagePrice[2]}
                </div>
              </div>
              <div className="col-4 p-0 mt-2">
                {/* <img src={priceIcon} width="45" alt="minus" /> */}
                <div className="dot bg-green">
                  <span>{allData?.PackageDescription[0]?.PackagePrice[0]}</span>
                  <br />
                  <span>{allData?.PackageDescription[0]?.PackagePrice[1]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 pr-0">
            <div>
              <button
                type="button"
                className="btn btn-light text-green rounded-pill p-1 w-100"
                onClick={() => router.push("/billing-history")}
              >
                Billing History
              </button>
            </div>
            <div className="mt-1">
              <button
                type="button"
                className="btn bg-green text-white rounded-pill p-1 w-100"
                onClick={clickEditProfile}
                disabled={upgardeBtn}
              >
                Upgrade Package
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <a>
              <span
                className="btn view-more-btn w-100 font-14"
                onClick={unSubscribe}
              >
                Unsubscribe
              </span>
            </a>
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
