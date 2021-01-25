import React from "react";

const paymentMethod = ({ onClickPaymentMethod, type }) => {
  return (
    <div className="col-12 col-sm-12 pt-3">
      <div className="row pt-3 pb-3 pl-3">
        <div className="col-4">
          <div
            onClick={() => onClickPaymentMethod("simCard")}
            className="btn payment-method list-group-item text-center border-0 bg-transparent pr-0 pl-0 pr-sm-3 pl-sm-3 pymnt_pge_pkgs_active"
          >
            <span className="mbl-check-icon">
              {type == "simCard" ? (
                <i className="fa fa-check-circle clr-green"></i>
              ) : (
                ""
              )}
            </span>
            <img
              src="https://images.tapmad.com/images/Payments/mobile-icon128.png"
              className="img-fluid mb-2 "
              style={{ minWidth: "50px", height: "60px" }}
            />
            <i
              className={`text-center text-muted d-block  ${
                type == "simCard" ? "text-white" : ""
              }`}
            >
              Sim Card
            </i>
          </div>
        </div>
        <div className="col-4">
          <div
            onClick={() => onClickPaymentMethod("easyPaisa")}
            className="btn payment-method list-group-item text-center border-0 bg-transparent pr-0 pl-0 pr-sm-3 pl-sm-3"
          >
            <span className="mbl-check-icon">
              {type == "easyPaisa" ? (
                <i className="fa fa-check-circle clr-green"></i>
              ) : (
                ""
              )}
            </span>
            <img
              src="https://images.tapmad.com/images/Payments/wallet-icon128.png"
              className="img-fluid mb-2"
              style={{ minWidth: "50px", height: "60px" }}
            />
            <i
              className={`text-center text-muted d-block  ${
                type == "easyPaisa" ? "text-white" : ""
              }`}
            >
              Easypaisa
            </i>
          </div>
        </div>
        <div className="col-4">
          <div
            onClick={() => onClickPaymentMethod("jazzCash")}
            className="btn payment-method list-group-item text-center border-0 bg-transparent pr-0 pl-0 pr-sm-3 pl-sm-3"
          >
            <span className="mbl-check-icon">
              {type == "jazzCash" ? (
                <i className="fa fa-check-circle clr-green"></i>
              ) : (
                ""
              )}
            </span>
            <img
              src="https://images.tapmad.com/images/Payments/wallet-icon128.png"
              className="img-fluid mb-2"
              style={{ minWidth: "50px", height: "60px" }}
            />
            <i
              className={`text-center text-muted d-block  ${
                type == "jazzCash" ? "text-white" : ""
              }`}
            >
              JazzCash
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default paymentMethod;
