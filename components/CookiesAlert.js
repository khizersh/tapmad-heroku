import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../services/localstorage";

const CookiesAlert = () => {
  const [displayCookies, setDisplayCookies] = useState(true);
  const hideCookies = () => {
    setDisplayCookies(false);
    setLocalStorage("hideCookiesAlert", 1);
  };
  return displayCookies ? (
    <>
      <style jsx>
        {`
          .cookies-popup {
            position: fixed;
            right: 0;
            bottom: 15px;
            background-color: rgba(8, 7, 10, 0.98);
            color: white;
            border-radius: 5px;
            width: 400px;
            max-width: calc(100% - 30px);
            padding: 20px;
            z-index: 999;
            margin-right: 15px;
          }
          .cookies-popup h2 {
            font-size: 1.5em;
            line-height: 1;
            margin: 0;
            font-weight : normal;
          }
          .cookies-popup p {
            margin: 10px 0 15px;
            font-size: 15px;
          }
          .cookies-popup-btn {
            gap: 1rem;
            align-items: center;
          }
          .cancle-btn {
            background: none;
            box-shadow: none;
            outline: none;
            border: none;
            color: #e51717;
            text-decoration: underline;
            font-size: 0.9em;
          }
        `}
      </style>
      <div className="cookies-popup">
        <h2>Use of cookies:</h2>
        <p>
        We use cookies to make your experience better.
        </p>
        <div className="d-flex cookies-popup-btn">
          <button
            className="btn btn-primary text-white"
            type="button"
            onClick={hideCookies}
          >
            I understand
          </button>
          <button
            className="text-underline cancle-btn"
            onClick={hideCookies}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default CookiesAlert;
