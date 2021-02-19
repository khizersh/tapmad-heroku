import Link from "next/link";
import React from "react";
import { MainContext } from "../../contexts/MainContext";

const ItemCard = ({ item, slug }) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 mt-2">
      <a href={slug}>
        <div className="ripple">
          <div className="ripple_img">
            <img
              src={item.VideoImageThumbnail}
              className="img-fluid img-responsive"
            />
          </div>
          <div className="ripple_txt">
            <h5>
              <span className="fa fa-play d-block mb-1"></span>
              {item.VideoName}
            </h5>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ItemCard;
