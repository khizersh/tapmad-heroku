import React from "react";
import "../styles/globals.css";
// import '../public/icons/logo_white.png'

const Loader = () => {
  return (
    <div className="wrapper">
      <div id="overlay2" style={{ zIndex: 9999999, display: "block" }}>
        <div id="loader" className="nfLoader">
          <img
            src="/icons/logo_white.png"
            className="loader_image_tapmad"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
