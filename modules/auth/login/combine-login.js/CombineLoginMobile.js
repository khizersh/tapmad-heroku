import React, { useContext, useEffect } from "react";
import { mobileIcon } from "../../../../services/imagesLink";
import Link from "next/link";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";
import Head from "next/head";

const CombineLoginMobile = ({
  AuthState,
  UpdatePaymenthMethod,
  handleNumber,
  handlePin,
  btnDisabled,
  loginUser,
  CurrentMethod,
  mobileNo,
  pin,
  forgetClick,
}) => {
  const { SignUpState } = useContext(SignUpContext);

  return (
    <div className="custom-bg">
      <Head>
        <style>
          {`
          @media (max-width: 800px) {
            .custom-input {
              padding: 7px 16px !important;
            }
          }
        `}
        </style>
      </Head>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
      >
        <style jsx>
          {`
            .radio-cstm {
              width: 60px;
            }
            .radio-cstm:after {
              width: 10px !important;
              height: 10px !important;
              top: 7px !important;
            }
          `}
        </style>
        {AuthState && AuthState.LoginOperators.length ? (
          <h3 className="select-network">Select Your Network</h3>
        ) : (
          <></>
        )}
        <div className="d-flex justify-content-center mb-3">
          {AuthState && AuthState.LoginOperators.length
            ? AuthState.LoginOperators.map((m, i) => (
                <div>
                  <div style={{ margin: "auto" }} key={i}>
                    <div className="position-relative">
                      <input
                        type="radio"
                        name="radio"
                        checked={
                          CurrentMethod?.OperatorId == m.OperatorId
                            ? true
                            : false
                        }
                        onClick={() => UpdatePaymenthMethod(m)}
                        id={m.OperatorName}
                      />
                      <label className="radio-cstm" htmlFor={m.OperatorName}>
                        <div
                          onClick={() => UpdatePaymenthMethod(m)}
                          className={` mt-3 text-center`}
                        >
                          <img
                            src={m.OperatorImage}
                            alt={m.OperatorName}
                            className="img-fluid "
                            width="30"
                          />
                          <i
                            // className={`text-center text-muted d-block mbl-13px  ${
                            //   CurrentMethod.OperatorId == m.OperatorId
                            //     ? "text-white"
                            //     : ""
                            // }`}
                            style={{ fontStyle: "normal" }}
                          ></i>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        {/* mobile view */}

        <div>
          <p>
            <img src={mobileIcon} className="pr-2" />
            {AuthState && AuthState.LoginOperators.length
              ? " Enter your Mobile Number to login"
              : "Enter your mobile number and 4 digit passcode"}
          </p>
          <div className="input-group">
            <div>
              <label
                className="form-control border-round custom-input"
                style={{ fontSize: "14px" }}
              >
                {"+" + SignUpState?.userCountry?.CountryCode || " "}
              </label>
            </div>
            <input
              type="text"
              maxLength="10"
              minLength="10"
              className="form-control border-round mb-4 ml-3 custom-input"
              id="mobileNo"
              placeholder={
                AuthState && AuthState.LoginOperators.length
                  ? "3xxxxxxxxxxx"
                  : "Enter your mobile number"
              }
              inputMode="numeric"
              value={mobileNo}
              onChange={(e) => handleNumber(e)}
              autoComplete={"off"}
              pattern="\d*"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              maxLength="4"
              minLength="4"
              value={pin}
              className="form-control border-round custom-input"
              placeholder={
                AuthState && AuthState.LoginOperators.length
                  ? "Enter your PIN"
                  : "Enter your 4 digit passcode"
              }
              onChange={handlePin}
            />
          </div>
        </div>

        <div className="text-right mb-3">
          <Link
            href={
              AuthState && AuthState.LoginOperators.length
                ? "/sign-up?tab=2&packageId=4"
                : "/psl7"
            }
            shallow={true}
            passHref={true}
          >
            <a className=" mt-2 text-light">Not Registered? &nbsp;</a>
          </Link>
          <span
            className="mt-2 mr-2 text-light"
            onClick={forgetClick}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            | &nbsp;&nbsp;{" "}
            {AuthState && AuthState.LoginOperators.length
              ? "Forgot PIN?"
              : "Reset Passcode"}
          </span>
        </div>
        <div className="form-group">
          <button
            type="button"
            // disabled={btnDisabled ? true : false}
            className="btn pymnt_pge_sbscrbe_btn bg-green"
            onClick={loginUser}
          >
            LOGIN
          </button>
          <br />
        </div>
      </form>
    </div>
  );
};

export default CombineLoginMobile;
