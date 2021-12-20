import React, { useState } from "react";

const InstallMobileApp = () => {
  const [display, toggle] = useState(true);
  const remove = () => toggle(false);
  return display ? (
    <>
      <style jsx>{`
        .ratingBox {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 15px;
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
            width={76}
            height={76}
          />
          <div>
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
          <Link href="/">
            <a>Install</a>
          </Link>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default InstallMobileApp;
