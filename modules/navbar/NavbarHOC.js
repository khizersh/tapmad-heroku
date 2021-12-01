import React from "react";

const NavbarHOC = ({children}) => {
  return (
    <div className="bg-green p-1 d-flex justify-content-between navbar-position">
      {children}
    </div>
  );
};

export default NavbarHOC;
