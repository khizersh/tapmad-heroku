import React from "react";
import { mobileIcon } from "../../../../services/imagesLink";
import Link from "next/link";

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
  return (
    <div className="custom-bg">
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
      <div>
        <p className="text-center">
          <img src={mobileIcon} className="pr-2" /> Enter your Mobile Number to
          login
        </p>
        <div className="d-flex justify-content-center">
          <div className="mx-2">
            <label
              className="border-round custom-input text-dark"
              style={{ fontSize: "14px" }}
            >
              {AuthState?.CountryCode}
            </label>
          </div>
          <div className="mx-2">
            <input
              type="text"
              maxLength="20"
              minLength="5"
              className="form-control border-round mb-4  custom-input"
              id="mobileNo"
              placeholder="xxxxxxxxxxx"
              inputMode="numeric"
              value={mobileNo}
              onChange={(e) => handleNumber(e)}
              autoComplete={"off"}
            />
          </div>
          <div className="mx-2">
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
      </div>
      <div className="d-flex justify-content-end">
        <div className="mb-3 mx-5 pr-3">
          <Link href="/sign-up" shallow={true} passHref={true}>
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
      </div>
      <div className="form-group text-center">
        <button
          type="button"
          disabled={btnDisabled ? true : false}
          className="btn pymnt_pge_sbscrbe_btn width-35 bg-green"
          onClick={loginUser}
        >
          Login Now
        </button>
        <br />
      </div>
    </div>
  );
};

export default CombineLoginDesktop;
