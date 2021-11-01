import React, { useState, useEffect, useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import SubscribeButton from "./SubscribeButton";

export default function SignMessage({ price }) {
  return (
    <div className="form-group text-center pt-2 mb-0">
      <SubscribeButton />
      <p style={{ color: "#fff", padding: "10px" , position : "inherit"}}>
        {price &&
          price.ContentDescription}
      </p>
    </div>
  );
}
