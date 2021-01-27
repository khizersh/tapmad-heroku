import React from "react";
import SubscribeButton from "./SubscribeButton";

const SignMessage = ({ type }) => {
  if (type == "simCard") {
    return (
      <div className="form-group text-center pt-2 mb-0">
        <SubscribeButton />
        <p style={{ color: "#fff", padding: "10px" }}>
          Subscribe button press karne pe ek din Free trial hasil karain. Apki
          subscription charges ek din ke baad lago honge.
        </p>
      </div>
    );
  } else if (type == "easyPaisa") {
    return (
      <div className="form-group text-center pt-2 mb-0">
        <SubscribeButton />
        <p style={{ color: "#fff", padding: "10px" }}>
          Pay now button press karnay par Rs.5+ tax aap k easypaisa account say
          kat jaengyYe subscription 1 month ke leye hai jis ke baad
          Rs.100+tax/month charge ho ga
        </p>
      </div>
    );
  } else if (type == "jazzCash") {
    return (
      <div className="form-group text-center pt-2 mb-0">
        <SubscribeButton />
        <p style={{ color: "#fff", padding: "10px" }}>
          Pay now button press karnay par Rs.100+ tax aap k jazzcash account say
          kat jaengy Ye subscription 1 month ke leye hai
        </p>
      </div>
    );
  }
};

export default SignMessage;
