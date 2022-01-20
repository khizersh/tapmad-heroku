import React from "react";
import { mobileIcon } from "../../../../services/imagesLink";
import Link from "next/link";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";

const CombineLoginDesktop = ({
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
  // const handleKeypress = (e) => {
  //   //it triggers by pressing the enter key
  //   if (e.key === "Enter") {
  //     loginUser();
  //   }
  // };
  return (
    <div className="custom-bg">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginUser();
        }}
      >
        {AuthState && AuthState.LoginOperators.length ? (
          <h3 className="select-network">Select your network</h3>
        ) : (
          ""
        )}
        <div className="d-flex justify-content-center mb-3">
          {AuthState && AuthState.LoginOperators.length
            ? AuthState.LoginOperators.map((m, i) => (
                <div>
                  <style jsx>
                    {`
                      .radio-cstm {
                        width: 90px;
                      }
                    `}
                  </style>
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
                          className={`mt-3 mx-2 text-center`}
                        >
                          <img
                            src={m.OperatorImage}
                            alt={m.OperatorName}
                            className="img-fluid border-radius-6"
                            width="55"
                            height="55"
                            style={{ objectFit: "contain" }}
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

        <div>
          <p className="text-center text-grey font-14">
            <img src={mobileIcon} className="pr-2" width={25} />{" "}
            {AuthState && AuthState.LoginOperators.length
              ? "Enter your Mobile Number to login"
              : "Enter your mobile number and 4 digit passcode"}
          </p>
          <div className="d-flex justify-content-center">
            <div className="mx-2">
              <label className="border-round custom-input text-dark font-14 line-1 px-2">
                {AuthState?.CountryCode}
              </label>
            </div>
            <div className="mx-2 flex-grow-1 flex-shrink-1">
              <input
                type="text"
                // maxLength="10"
                // minLength="10"
                className="form-control border-round mb-4  custom-input"
                id="mobileNo"
                placeholder={
                  AuthState && AuthState.LoginOperators.length
                    ? "3xxxxxxxxxxx"
                    : "Enter your mobile number"
                }
                value={mobileNo}
                onChange={(e) => handleNumber(e)}
                autoComplete={"off"}
                maxLength={10}
                pattern="\d*"
              />
            </div>
            <div className="mx-2 flex-grow-1 flex-shrink-1">
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
                // onKeyPress={handleKeypress}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="mb-3 mx-5 pr-3">
            <Link
              href="/sign-up?tab=1&packageId=2"
              shallow={true}
              passHref={true}
            >
              <a className=" mt-2 text-grey font-14">Not Registered? &nbsp;</a>
            </Link>
            <span
              className="mt-2 mr-2 text-grey font-14"
              onClick={forgetClick}
              style={{ cursor: "pointer" }}
            >
              | &nbsp;&nbsp;
              {AuthState && AuthState.LoginOperators.length
                ? "Forgot PIN?"
                : "Reset Passcode"}
            </span>
          </div>
        </div>
        <div className="form-group text-center flex-grow-1">
          <button
            type="submit"
            // disabled={btnDisabled ? true : false}
            className="btn pymnt_pge_sbscrbe_btn width-35 bg-green font-16"
          >
            Login
          </button>

          <br />
        </div>
      </form>
    </div>
  );
};

export default CombineLoginDesktop;
