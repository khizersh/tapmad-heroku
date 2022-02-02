import React, { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import {
  UPDATE_PAYMENT_METHOD,
  UPDATE_USER_DETAILS,
} from "../../../contexts/auth/SignUpReducer";
import {
  castingIcon,
  deviceIcon,
  qualityIcon,
} from "../../../services/imagesLink";
import PaymentInfo from "./PaymentInfo";

export default function PaymentMethod() {
  const { SignUpState, dispatch } = useContext(SignUpContext);
  const [CurrentPackage, setCurrentPackage] = useState({});
  const [CurrentMethod, setCurrentMethod] = useState({});

  function UpdatePaymenthMethod(paymentMethod) {
    dispatch({ type: UPDATE_PAYMENT_METHOD, data: paymentMethod });
    dispatch({
      type: UPDATE_USER_DETAILS,
      data: { Operator: paymentMethod.PaymentOperatorId },
    });
  }
  useEffect(() => {
    if (SignUpState.SelectedPrice.PaymentMethods) {
      setCurrentPackage(SignUpState.SelectedPrice);
      UpdatePaymenthMethod(SignUpState.SelectedPrice.PaymentMethods[0]);
    }
  }, [SignUpState.SelectedPrice]);
  useEffect(() => {
    if (SignUpState.SelectedMethod.PaymentMethodName) {
      setCurrentMethod(SignUpState.SelectedMethod);
    }
  }, [SignUpState.SelectedMethod]);

  const imageArray = [
    { Image: qualityIcon, Name: "1080 P" },
    { Image: deviceIcon, Name: "Devices All" },
    { Image: castingIcon, Name: "Casting" },
  ];
  return (
    <div className="col-md-12 col-sm-12 pt-2">
      <style jsx>
        {`
          .radio-cstm:after {
            margin: -6px auto 0;
            width: 10px;
            height: 10px;
          }
          img {
            max-height: 40px;
            object-fit: contain;
          }
        `}
      </style>
      <style>
        {`
          .gridCol input + input {
            margin-top: 1rem;
            margin-left: -45px;
            width: calc(100% + 45px) !important;
          }
          .m-mt {
            margin-top: 1rem;
          }
        `}
      </style>
      <div className="d-flex justify-content-around">
        {CurrentPackage?.DeviceStream?.length
          ? CurrentPackage.DeviceStream.map((m, ind) => (
              <div key={ind} className="text-center">
                <p>
                  <img src={m.Image} className="max-width-30" />
                </p>
                {m.Name == "0" || m.Name == "1" ? (
                  <p className="text-grey">
                    {m.Name == "1" ? "Casting" : "No Casting"}
                  </p>
                ) : (
                  <p className="text-grey">{m.Name}</p>
                )}
              </div>
            ))
          : null}
      </div>
      <div className="text-grey">{CurrentPackage?.ContentDescription}</div>

      {SignUpState.SelectedMethod.PaymentId == 5 ? (
        <div
          className="mt-3 highlighted-desc"
          style={{ color: "#FC5656", fontSize: "0.8em", fontWeight: 300 }}
        >
          {SignUpState?.SelectedMethod?.PaymentMethodDescription}
        </div>
      ) : (
        <div
          className="mt-3 highlighted-desc"
          style={{ color: "#FC5656", fontSize: "0.8em", fontWeight: 300 }}
          dangerouslySetInnerHTML={{
            __html: CurrentPackage?.HighlightDescription,
          }}
        />
      )}

      {/* <div
        className="mt-3"
        style={{ color: "#FC5656" }}
        dangerouslySetInnerHTML={{
          __html: CurrentPackage?.HighlightDescription,
        }}
      /> */}
      <div className="row mt-3">
        <div className="col-12">
          <h3 className="text-base">Payment Options</h3>
        </div>
      </div>
      <div className="row py-3 flex-nowrap ">
        {CurrentPackage && CurrentPackage.PaymentMethods
          ? CurrentPackage.PaymentMethods.map((m, i) => (
              <div className="col text-center p-0">
                <div
                  className="btn bg-transparent"
                  style={{ margin: "auto" }}
                  key={i}
                >
                  <div className="position-relative">
                    <input
                      type="radio"
                      name="radio"
                      checked={
                        CurrentMethod.PaymentOperatorId == m.PaymentOperatorId
                          ? true
                          : false
                      }
                      onClick={() => UpdatePaymenthMethod(m)}
                      id={m.PaymentMethodName}
                    />
                    <label className="radio-cstm" htmlFor={m.PaymentMethodName}>
                      <div
                        onClick={() => UpdatePaymenthMethod(m)}
                        className={`${m.PaymentMethodName} mt-4`}
                      >
                        <img
                          src={m.PaymentImage}
                          alt={m.PaymentMethodName}
                          className="img-fluid "
                          width="70"
                        />
                        <i
                          className={`text-center text-muted d-block mbl-13px  ${
                            CurrentMethod.PaymentOperatorId ==
                            m.PaymentOperatorId
                              ? "text-muted"
                              : ""
                          }`}
                          style={{ fontStyle: "normal" }}
                        >
                          {/* {m.PaymentMethodName} */}
                        </i>
                      </div>
                    </label>
                    {/* <span>
                    {CurrentMethod.PaymentOperatorId ==
                      m.PaymentOperatorId ? (
                      <i className="fa fa-check-circle clr-green"></i>
                    ) : (
                      ""
                    )}
                  </span> */}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <div>
        <PaymentInfo />
      </div>
    </div>
  );
}
