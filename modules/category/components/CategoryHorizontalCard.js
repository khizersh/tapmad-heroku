import React from "react";

const CategoryHorizontalCard = ({ video }) => {
  return (
    <>
      <div className="col-12 p-1 d-lg-none d-md-none">
        <div className="d-flex ">
          <div>
            <img
              src={video.VideoImagePath}
              alt={video.VideoName}
              width="130px"
            />
          </div>
          <div>
            <div className="card-desc-div">
              <h5 className="card-title">{video.VideoName}</h5>
              <p className="card-desc synopsis-card-text m-0">
                {video.VideoDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHorizontalCard;
