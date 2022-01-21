import React, { useEffect, useState } from "react";
import { isUserSubscribe } from "../../../services/apilinks";
import { post } from "../../../services/http-service";
import swal from "sweetalert";

const InternationalMobile = ({ setGlobalMobileNo }) => {
  const [screenBg, setScreenBg] = useState("desktop");
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState(null);
  const submitHandler = () => {
    let msg = null;
    switch (mobileNo.length) {
      case mobileNo.length < 4 || mobileNo.length > 20:
        msg =
          "Please enter the valid phone number minimum 4 or maximum 20 digits";
        break;
      case 0:
        msg = "Please enter the mobile number";
        break;
    }
    if (msg) {
      setError(msg);
    } else {
      post(isUserSubscribe, { MobileNo: mobileNo })
        .then((res) => {
          if (res.data.Response.responseCode) {
            swal({
              timer: 3000,
              title: "You are already subscribed!",
              text: "Enter your PIN for login",
              icon: "info",
              buttons: false,
            });
            router.push(`/sign-in?number=${details.MobileNo}`);
          } else {
            setGlobalMobileNo(mobileNo);
          }
        });
    }
    // msg ? setError(msg) : setGlobalMobileNo(mobileNo);
  };
  useEffect(() => {
    screen.width < 768 && setScreenBg("mobile");
  }, []);
  return (
    <>
      <style jsx>
        {`
          .form {
            width: 550px;
            max-width: 100%;
            margin: auto;
          }
          .intlbg {
            background-position: top center;
            background-size: cover;
            background-repeat: no-repeat;
            min-width: 100vw;
            min-height: 100vh;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }

          .intlbg form input {
            line-height: 48px;
            height: 48px;
          }
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          @media (max-width: 991px) {
            h1 {
              font-size: 1.5em;
            }
          }
        `}
      </style>
      <section
        style={{
          backgroundImage: `url('/images/signup/signup-${screenBg}-bg.png')`,
        }}
        className="intlbg container-fluid text-center"
      >
        <div className="mw-100">
          <h1 className="line-1 mb-0">
            THE WAIT IS OVER! WATCH PAKISTAN's BIGGEST
            <span className="text-base d-block">CRICKET EVENT HBL PSL 7</span>
          </h1>
          <p className="h4-md font-weight-normal mb-3">
            Bring the stadium feel at home.{" "}
            <span className="text-base">#LevelHai</span>
          </p>

          <div className="form">
            <input
              type="number"
              name="mobile"
              placeholder="Enter your mobile number"
              value={mobileNo}
              onChange={(e) =>
                e.target.value.length < 21
                  ? setMobileNo(e.target.value)
                  : mobileNo
              }
              width={550}
              className="mw-100 form-control rounded"
              minLength={4}
              maxLength={20}
              pattern="\d*"
              autoComplete="off"
            />
            {error ? (
              <p
                className="bg-warning rounded p-2 mt-3"
                style={{ color: "black" }}
              >
                {error}
              </p>
            ) : (
              <></>
            )}
            <button
              type="submit"
              name="Submit"
              className="btn btn-primary mt-4 text-white text-uppercase font-weight-bold px-5 py-2"
              onClick={submitHandler}
              style={{ fontSize: "1.15em" }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalMobile;
