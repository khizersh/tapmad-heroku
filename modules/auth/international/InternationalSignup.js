import React, { useEffect, useState } from "react";

const InternationalSignUp = ({ globalMobileNo }) => {
  const [screenBg, setScreenBg] = useState("desktop");
  const [error, setError] = useState(null);
  const submitHandler = () => {
    let msg = null;
    msg ? setError(msg) : "";
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
            defaultValue={globalMobileNo}
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

export default InternationalSignUp;
