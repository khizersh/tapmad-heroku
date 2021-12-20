import React, { useState } from "react";
import Link from "next/link";

const InstallMobileApp = () => {
  const [display, toggle] = useState(true);
  const remove = () => toggle(false);
  return display ? (
    <>
      <style jsx>{`
        .ratingBox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: #000;
          padding: 15px;
          z-index: 10
        }
        .ratingBox,
        .rbdtxt {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 15px;
        }
        .ratingBox {
        }
        .rbdtxt {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
      <div className="ratingBox">
        <div
          className="fa fa-times"
          role="button"
          aria-label="Close"
          title="Close"
          onClick={remove}
          onKeyDown={(e) => (e.key === "Enter" ? remove() : false)}
        />
        <div className="rbdetails">
          <img
            src="/icons/apple-icon-76x76-dunplab-manifest-25122.png"
            decoding="async"
            loading="lazy"
            width={32}
            height={32}
          />
          <div className="rbdtxt">
            <h2>Tapmad</h2>
            <p>4 Millions+ Install</p>
            <div className="ratings">
              <i className="fa fa-star active"></i>
              <i className="fa fa-star active"></i>
              <i className="fa fa-star active"></i>
              <i className="fa fa-star active"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
        <Link href="/">
          <a>Install</a>
        </Link>
      </div>
    </>
  ) : (
    <></>
  );
};

export default InstallMobileApp;
