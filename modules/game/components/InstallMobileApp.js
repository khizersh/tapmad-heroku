import React from "react";
import Link from "next/link";

const InstallMobileApp = ({ onClose }) => {
  const rates = [1, 2, 3, 4, 5];
  const totalRates = 4;

  return (
    <div className="ratingBox">
      <style jsx>{`
        .ratingBox {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-image: linear-gradient(#121117, #201e2a);
          padding: 15px;
          z-index: 1000;
        }
        .ratingBox,
        .rbdetails {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 15px;
        }
        .rbdetails {
          flex: 1;
        }
        .ratingBox {
        }
        .rbdtxt {
          flex: 1;
        }
        .rbdtxt h2,
        .rbdtxt p {
          margin-bottom: 0;
        }
        .rbdtxt h2 {
          font-size: 18px;
        }
        .rbdtxt p {
          font-size: 13px;
        }
        .ratings {
          line-height: 1;
        }
        .ratings i {
          display: inline-block;
          vertical-align: verticle;
        }
        .ratings .active {
          color: goldenrod;
        }
        @media (max-width: 480px) {
          .rbdtxt h2 {
            font-size: 16px;
          }
          .rbdtxt p {
            font-size: 11px;
            margin-bottom: 0;
          }
          .rbdetails img {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
      <div
        className="fa fa-times h5 mb-0"
        role="button"
        aria-label="Close"
        title="Close"
        onClick={onClose}
        onKeyDown={(e) => (e.key === "Enter" ? remove() : false)}
      />
      <div className="rbdetails">
        <img
          src="/icons/apple-icon-76x76-dunplab-manifest-25122.png"
          decoding="async"
          loading="lazy"
          width={60}
          height={60}
          className="img-responsive"
        />
        <div className="rbdtxt">
          <h2>Tapmad</h2>
          <p>4 Million+ Installs</p>
          <div className="ratings">
            {rates.map((i) => (
              <i
                key={i}
                tabIndex={0}
                role="button"
                aria-label={`Rate ${i}`}
                className={`fa fa-star ${totalRates >= i ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
      <Link href="http://onelink.to/4um89n" passHref={true}>
        <a
          className="btn btn-primary text-white"
          target="_blank"
          rel="nofollow"
        >
          Install
        </a>
      </Link>
    </div>
  );
};

export default InstallMobileApp;
