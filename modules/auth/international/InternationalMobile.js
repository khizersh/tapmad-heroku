import React, { useEffect, useState } from "react";

const International = ({ setGlobalMobileNo }) => {
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
    msg ? setError(msg) : setGlobalMobileNo(mobileNo);
  };
  useEffect(() => {
    screen.width < 768 && setScreenBg("mobile");
  }, []);
  return (
    <>
      <style jsx>
        {`
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
        `}
      </style>
      <section
        style={{
          backgroundImage: `url('/images/signup/signup-${screenBg}-bg.png')`,
        }}
        className="intlbg container-fluid text-center"
      >
        <div className="">
          <h1 className="line-1 mb-0">
            Wait is over! Watch Pakistan's Biggest <br />{" "}
            <span className="text-base">Cricket Event HBL PSL 7</span>
          </h1>
          <p className="h4 font-weight-normal mb-3">
            Bring the stadium feel at home.{" "}
            <span className="text-base">#LevelHai</span>
          </p>

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
            className="btn btn-primary mt-4 w-100 text-white text-uppercase font-weight-bold py-2"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default International;
