import React, { useState } from "react";
import {useRouter} from "next/router";
import {
  awardIcon,
  gamingIcon,
  infoIcon,
  minusIcon,
  packageIcon,
  playTrophyIcon,
  plusIcon,
  priceIcon,
  stadiumIcon,
  trophyIcon,
  userIcon,
} from "../../services/imagesLink";
import Link from "next/link";
const MyAccountMobile = ({ profileData, allData }) => {
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
  const router = useRouter()

  const clickEditProfile = () => {
    router.push("/change-package");
  };

  return (
    <div className="p-4 d-sm-none">
      <div className="row">
        <div className="col-4">
          <img src={userIcon} width="100" alt="User" />
        </div>
        <div className="col-4 pt-3">
          <div>Name</div>
          <div>Date of Birth</div>
        </div>
        <div className="col-4 pt-3">
          <div>{profileData && profileData.FullName}</div>
          <div>{profileData && profileData.BirthDate}</div>
        </div>
      </div>
      <div className="row  mt-3">
        <div className="col-2">
          <img src={infoIcon} alt="User" className="mx-1 user_img" />
        </div>
        <div className="col-10">
          <p className="h_style">Personal Info:</p>
        </div>
      </div>
      <div className="row offset-1">
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
      </div>

      <div className={`row package mt-3`}>
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
      </div>

      <div className={` ${show.package ? "row" : "d-none"}`}>
        <div className="col-6 ">
          <div className="row border border-style rounded text-center">
            <div className="col-8 p-0">
              <div className="std_txt mt-1">
                {profileData && profileData.Package}
              </div>
              <div className="sub-title text-grey">Per month</div>
            </div>
            <div className="col-4 p-0">
              <img src={priceIcon} width="45" alt="minus" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <button type="button" class="btn btn-light rounded-pill p-1 w-100">
              Billing History
            </button>
          </div>
          <div className="mt-1">
            <button
              type="button"
              className="btn btn-gradient text-light rounded-pill p-1 w-100"
              onClick={clickEditProfile}
            >
              Update Package
            </button>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <Link href="/billingtest">
          <button
            type="button"
            className="w-100 btn btn-primary-outline text-light rounded-pill"
          >
            Unsubscribe
          </button>
        </Link>
      </div>
      <div className="row  mt-3">
        <div className="col-2">
          <img src={gamingIcon} width="35" alt="User" className="mx-1" />
        </div>
        <div className="col-8">
          <p className="h_style">My Games:</p>
        </div>
        <div className="col-2">
          <img
            onClick={() => onPressHandeler("games")}
            src={show.games ? minusIcon : plusIcon}
            width="20"
            alt="minus"
            className="mr-4"
          />
        </div>
      </div>
      <div className={` ${show.games ? "row" : "d-none"}`}>
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
  );
};
export default MyAccountMobile;