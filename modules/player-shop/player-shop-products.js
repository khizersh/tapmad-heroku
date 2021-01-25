import React from "react";
import Slider from "react-slick";
import { basicSliderConfig } from "../../services/utils";
import "./player-shop.css";
export default function PlayerShopProducts({ MerchantProducts }) {
  var settings = basicSliderConfig(6);
  return (
    <div>
      <Slider {...settings}>
        {MerchantProducts &&
          MerchantProducts.map((product, i) => {
            return (
              <div key={i}>
                <div className="product-images">
                  <img src={product.MerchantProductImage} />
                </div>
                <div>{product.MerchantProductName}</div>
                <div className="text-primary">
                  <small>Rs. {product.MerchantProductPrice}</small>
                </div>
                <div className="text-dark">
                  <span>
                    <del>Rs. {product.MerchantDiscountPrice}</del>
                  </span>{" "}
                  &nbsp;
                  <span>{product.MerchantPercentage}% Off</span>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}
