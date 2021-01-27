import React from "react";

export default function RightSideBar() {
  return (
    <div>
      <div className="tm_btng_liv mb-3 d-none d-md-block d-lg-block">
        <div className="row">
          <div className="col">
            <div className="tm_btng_sidebar_hdr pl-2">
              <h5 className="ng-binding">Game Voucher</h5>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginRight: "0px" }}>
          <div className="tm_btng_caro_mble_blnce mt-2 col mobile-card-slider slider slick-initialized slick-slider">
            <button
              className="slick-prev slick-arrow"
              aria-label="Previous"
              type="button"
              aria-disabled="false"
              style={{ display: "inline-block" }}
            >
              Previous
            </button>
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: "630px",
                  transform: "translate3d(-210px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide"
                  data-slick-index="0"
                  aria-hidden="true"
                  style={{ width: "206px" }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="col pt-2 pr-0 ng-scope"
                      ng-repeat="product in codaShop"
                      on-finish-render="onFinishRender"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <a
                        href="https://www.tapmad.com/tshop?sku=1001&amp;name=PUBG"
                        target="_self"
                        id="1001"
                        tabIndex="-1"
                      >
                        <div className="card bg-transparent p-0 border-0">
                          <img
                            className="card-img-top  "
                            src="https://images.tapmad.com/images/PubgCategory.png"
                            alt=""
                          />
                          <div className="card-body p-2 text-light text-center">
                            <h5
                              className="card-title mb-1 ng-binding"
                              style={{ fontSize: "14px" }}
                            >
                              PUBG
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  style={{ width: "206px" }}
                >
                  <div>
                    <div
                      className="col pt-2 pr-0 ng-scope"
                      ng-repeat="product in codaShop"
                      on-finish-render="onFinishRender"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <a
                        href="https://www.tapmad.com/tshop?sku=1007&amp;name=LIVU "
                        target="_self"
                        id="1007"
                        tabIndex="0"
                      >
                        <div className="card bg-transparent p-0 border-0">
                          <img
                            className="card-img-top  "
                            src="https://images.tapmad.com/images/livuThumb.png"
                            alt=""
                          />
                          <div className="card-body p-2 text-light text-center">
                            <h5
                              className="card-title mb-1 ng-binding"
                              style={{ fontSize: "14px" }}
                            >
                              LIVU
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  style={{ width: "206px" }}
                >
                  <div>
                    <div
                      className="col pt-2 pr-0 ng-scope"
                      ng-repeat="product in codaShop"
                      on-finish-render="onFinishRender"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <a
                        href="https://www.tapmad.com/tshop?sku=1008&amp;name=TUMILE"
                        target="_self"
                        id="1008"
                        tabIndex="0"
                      >
                        <div className="card bg-transparent p-0 border-0">
                          <img
                            className="card-img-top  "
                            src="https://images.tapmad.com/images/TumileThumb.png"
                            alt=""
                          />
                          <div className="card-body p-2 text-light text-center">
                            <h5
                              className="card-title mb-1 ng-binding"
                              style={{ fontSize: "14px" }}
                            >
                              TUMILE
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="slick-next slick-arrow slick-disabled"
              aria-label="Next"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
