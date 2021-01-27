import React from "react";

export default function GameMain() {
  return (
    <div>
      <div className="row d-none d-lg-block d-xl-block d-md-block">
        <div className="col-12">
          <div className="tm_btng_bnr d-block">
            <img
              src="https://d1s7wg2ne64q87.cloudfront.net/web/images/GamePageBanner.jpg"
              className="img-fluid w-100"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className="tm_btng_liv mb-3 ng-scope"
          style={{ width: "100%", display: "inline-block" }}
        >
          <div className="tm_btng_sidebar_hdr pl-2 overflow-hidden">
            <div className="tm_btng_hdr_icn d-inline-block p-2 p-lg-3 rounded float-left">
              <img
                style={{ width: "30px" }}
                src="//d1s7wg2ne64q87.cloudfront.net/web/images/png-cricket-ball.png"
                className="img-fluid m-auto"
                width="30"
                alt=""
              />
            </div>
            <div className="tm_btng_hdr_liv_mtchs float-left mt-2 ml-2">
              <h5 className="badge badge-danger mb-1 ng-binding ng-scope">
                2019-09-18 10:30
              </h5>
              <h5
                className="badge badge-danger mb-1 ng-binding ng-scope"
                id="time-remaining-82631722"
              >
                Started
              </h5>
              <p className="text-light font-italic m-0 text-muted ng-binding">
                India vs South Africa
              </p>
            </div>
          </div>
          <div className="tm_btng_quize p-2 pl-5 mt-2">
            <h6 className="text-light m-0 ng-binding"> </h6>
          </div>
          <div className="form-group text-center pr-5 pl-5 mt-2">
            <div className="row mt-2 mb-3"></div>
            <div className="row mt-3">
              <div className="col-6 col-sm-6 col-md-6 col-lg-5">
                <div className="btn-group btn-block">
                  <button
                    className="btn btn-dark btn-sm pl-2 pr-2 btn-quantity-82631722 disabled"
                    disabled="disabled"
                    tabIndex="0"
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <span
                    className="btn btn-outline-dark btn-block btn-sm text-white"
                    id="bid-quantity-82631722"
                  >
                    4
                  </span>
                  <button
                    className="btn btn-dark btn-sm pl-2 pr-2 btn-quantity-82631722 disabled"
                    disabled="disabled"
                    tabIndex="0"
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
                <span className="mt-2 d-block mb-2 text-white">Your Bids</span>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-5">
                <span
                  className="btn btn-default btn-sm btn-outline-dark btn-block text-white"
                  id="winning-quantity-82631722"
                >
                  8
                </span>
                <span className="mt-2 d-block mb-2 text-white">You Win</span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2">
                <button
                  className="btn tm_btng_go_Btn btn-block btn-sm bid-btn-82631722 disabled"
                  tabIndex="0"
                >
                  Go
                </button>
              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <h6 className="text-light m-0">
                  <a href="/all-games" tabIndex="0">
                    More Questions
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
