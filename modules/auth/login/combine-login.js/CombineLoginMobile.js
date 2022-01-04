import React, { useContext, useEffect } from "react";
import { mobileIcon } from "../../../../services/imagesLink";
import Link from "next/link";
import { SignUpContext } from "../../../../contexts/auth/SignUpContext";

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
  const { SignUpState, dispatch } = useContext(SignUpContext);
  useEffect(() => {
    console.log(SignUpState, "SignUpState");
  }, []);
  return (
    <div className="custom-bg">
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
      <h3 className="select-network">Select Your Network</h3>
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
                        CurrentMethod?.OperatorId == m.OperatorId ? true : false
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
          <img src={mobileIcon} className="pr-2" /> Enter your Mobile Number to
          login
        </p>
        <div className="input-group">
          <div>
            <label
              className="form-control border-round custom-input"
              style={{ fontSize: "14px" }}
            >
              {AuthState?.CountryCode}
            </label>
          </div>
          <input
            type="text"
            maxLength="10"
            minLength="10"
            className="form-control border-round mb-4 ml-3 custom-input"
            id="mobileNo"
            placeholder="3xxxxxxxxxxx"
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
            placeholder="Enter your PIN"
            onChange={handlePin}
          />
        </div>
      </div>

      <div className="text-right mb-3">
        <Link href="/sign-up?tab=1&packageId=2" shallow={true} passHref={true}>
          <a className=" mt-2 text-light">Not Registered? &nbsp;</a>
        </Link>
        <span
          className="mt-2 mr-2 text-light"
          onClick={forgetClick}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          | &nbsp;&nbsp;Forgot PIN?
        </span>
      </div>
      <div className="form-group">
        <button
          type="button"
          disabled={btnDisabled ? true : false}
          className="btn pymnt_pge_sbscrbe_btn bg-green"
          onClick={loginUser}
        >
          LOGIN
        </button>
        <br />
      </div>
    </div>
  );
};

export default CombineLoginMobile;
