import React from "react";

const Pin = () => {
  return (
    <div className="text-center">
      <div className="py-3">
        <label class="text-muted">Please verify your OTP Code</label>
      </div>
      <div className="px-3 pb-4">
        <input type="text" placeholder="Enter Pin" className="form-control" />
      </div>
      <div className="pb-4">
        <button type="button" className="btn btn-primary ">
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default Pin;
