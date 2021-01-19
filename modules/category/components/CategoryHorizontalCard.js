import React from "react";

const CategoryHorizontalCard = ({ video }) => {
  console.log("Video in horr: ", video);
  return (
    <div className="row mt-2">
      <div className="col-3">
        <img
          className="img-thumb"
          src={video.VideoImagePath}
          alt={video.VideoName}
        />
      </div>
      <div className="col-9">
        <div className="card-desc-div">
          <h5 className="card-title">{video.VideoName}</h5>
          <p className="card-desc">{video.VideoDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryHorizontalCard;
