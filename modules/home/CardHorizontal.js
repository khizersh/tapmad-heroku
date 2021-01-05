import React from "react";
import Image from "next/image";

const CardHorizontal = ({ video }) => {
  return (
    <div className="col-12 col-sm-4 col-md-3 col-lg-2 p-1 ">
      <div className="synopsis_card rounded-0 bg-transparent card">
        <div className="horizontal-card">
          <div className="img-square-wrapper">
            {/* <Image
              src={video.VideoImagePath}
              alt={video.VideoName}
              width={"210"}
              height={"100%"}
              className="img"
            /> */}
            <img  src={video.VideoImagePath} alt={video.VideoName} />
          </div>
          <div className="card-body pt-2 pb-1 pl-1 text-light">
            <i className="fa fa-play play_icon"></i>
            <h5>{video.VideoName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
