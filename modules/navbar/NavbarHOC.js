import React from "react";

const NavbarHOC = ({children}) => {
  return (
    <div className="bg-green p-1 d-flex justify-content-between">
      {/* <button
        className="btn"
        style={{
          fontSize: "13px",
          color: "black",
        }}
        // onClick={onClickBack}
      >
        <img src="/icons/login-back.svg" />
      </button>

      <button
        type="button"
        className="btn"
        style={{
          textTransform: "uppercase",
          fontSize: "13px",
          border: "none",
          color: "#fff",
          fontWeight: "bolder",
        }}
        // onClick={onClickLogin}
      >
        Login
      </button> */}
      {children}
    </div>
  );
};

export default NavbarHOC;
