import React from "react";

export default function PromoCodeLayout({ children, bgImage }) {
  var bgImageStyle = {
    width: "100%",
    height: "600px",
    margin: "0 auto",
    maxWidth: "440px",
    marginTop: "90px",
    borderRadius: "5px",
    height: "600px",
    width: "100%",
    padding: "20px",
    display: "table",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className="mt-0 mt-sm-2  w-100" style={bgImageStyle}>
      <div className="container tm_promo_cde_form">
        <div>{children}</div>
      </div>
    </div>
  );
}
