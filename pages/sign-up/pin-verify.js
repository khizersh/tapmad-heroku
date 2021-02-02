import React from "react";
import SignUpLayout from "../../modules/auth/components/SignUpLayout";
import SubscribeButton from "../../modules/auth/components/SubscribeButton";
import '../../styles/globals.css';

const PinVerify = () => {
  const onClick = () => {
    console.log("");
  };
  return (
    <div>
      <SignUpLayout>
        <p className="text-center text-muted py-3">Enter your four digit pin</p>
        <input type="text" className="width-90 ml-3" />
        <div className="text-center py-3">
          <SubscribeButton onClick={onClick}>Enter PIN</SubscribeButton>
        </div>
        <div className="text-center pb-4">Forget PIN?</div>
      </SignUpLayout>
    </div>
  );
};

export default PinVerify;
