import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";

export default function SetYourNewPin() {
  const { initialState } = useContext(MainContext);
  return (
    <div>
      <div className="px-3 pb-4">
        <input
          type="text"
          placeholder="Enter OTP Code"
          className="form-control"
          disabled={true}
          value={initialState.User.MobileNo}
        />
      </div>
      <div className="px-3 pb-4">
        <input
          type="text"
          className="form-control"
          placeholder={"Enter Pin "}
          minLength={4}
          maxLength={4}
        />
      </div>
      <div className="px-3 pb-4">
        <input
          type="text"
          className="form-control"
          placeholder={"Verify Pin"}
          minLength={4}
          maxLength={4}
        />
      </div>
    </div>
  );
}
