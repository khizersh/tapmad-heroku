import React from "react";

const EditProfileMobile = () => {
  return (
    <div className="col-12 py-1 mob_editProfile">
      <div className="my-4">
        <input placeholder="Enter Name" className="col-12 p-2 rounded" />
      </div>
      <div className="my-4">
        <input placeholder="Date of Birth" className="col-12 p-2 rounded" />
      </div>
      <div className="my-4">
        <input placeholder="Email ID" className="col-12 p-2 rounded" />
      </div>
      <div className="my-4">
        <input placeholder="Mobile" className="col-12 p-2 rounded" />
      </div>
      <div className="row">
        <div className="col-3">
          <text style={{ color: "blue" }}>Male</text>
        </div>
        <div className="col-3">
          <text style={{ color: "blue" }}>femae</text>
        </div>
      </div>
    </div>
  );
};
export default EditProfileMobile;
