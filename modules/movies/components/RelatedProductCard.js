import React from "react";

export default function RelatedProductCard({ video }) {
  return (
    <div className="col-12 p-1 img-hov">
      <div className="d-flex">
        <div className="img-hov">
          <img src={video.VideoImagePath} alt={video.VideoName} width="130px" />
        </div>
        <div>
          <div className="pl-2">
            <h5
              className="card-title mb-1 txt-rel-card"
              style={{ fontSize: "13px" }}
            >
              {video.VideoName}
            </h5>
            <p
              className="card-desc synopsis-card-text m-0"
              style={{ fontSize: "12px", color: "#6c757d" }}
            >
              {video.VideoDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

