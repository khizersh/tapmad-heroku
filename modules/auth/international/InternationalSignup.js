import React, { useEffect, useState } from "react";
import Link from "next/link";

import Checkout from "../../../public/static/js/checkout";

const InternationalSignUp = ({ globalMobileNo }) => {
  const [screenBg, setScreenBg] = useState("desktop");
  const [error, setError] = useState(null);
  useEffect(() => {
    // Set background image desktop / mobile
    screen.width < 768 && setScreenBg("mobile");
    // Setting up card payment
    new Checkout("pk_4efbb3d2-00b9-4860-95bf-329b4801644d");
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
            type="text"
            name="fullname"
            placeholder="Full name"
            width={550}
            className="mw-100 form-control rounded"
            minLength={4}
            maxLength={20}
          />

          <input
            type="text"
            name="email"
            placeholder="Email"
            width={550}
            className="mw-100 mt-2 form-control rounded"
            minLength={4}
            maxLength={20}
          />

          <div className="row no-gutters">
            <div className="col-3">
              <select
                className="custom-select mt-2"
                aria-label="Select Country"
              >
                <option selected>Select Country</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-9 pl-2">
              <input
                type="number"
                name="mobile"
                placeholder="Enter your mobile number"
                defaultValue={globalMobileNo}
                width={550}
                className="mw-100 mt-2 form-control rounded"
                minLength={4}
                maxLength={20}
                disabled={true}
              />
            </div>
          </div>

          <div className="one-liner w-100 mt-2">
            <div className="card-frame"></div>
          </div>

          <div
            className="d-flex flex-wrap-wrap justify-content-center mt-4"
            style={{ gap: "15px" }}
          >
            <button
              type="submit"
              className="btn btn-primary text-white px-5 py-2"
              style={{ fontSize: "1.15em" }}
            >
              Pay now
            </button>
            <Link href="/sign-in">
              <a
                className="btn btn-primary text-white px-5 py-2"
                style={{ fontSize: "1.15em" }}
              >
                Login
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalSignUp;
