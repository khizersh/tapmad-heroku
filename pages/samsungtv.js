import React from "react";
import { samsungTvLogo, tapmadLogoBgWhite } from "../services/imagesLink";

const samsungtv = () => {
  const subscribeUser = () => { };
  const resetPin = () => { };
  const unSubscribeUser = () => { };
  samsungTvLogo;
  return (
    <div className="main">
      <div className="category-container">
        <div className="category__product-row">
          <img className="samsungLogo" src={samsungTvLogo} alt={'samsung'} />
          <img className="samsungLogo float" src={tapmadLogoBgWhite} alt={'samsung'} />
        </div>
      </div>
      <div className="samsung-about-container text-center"></div>
      <div className="category-container">
        <div className="category__product-row text-center">
          <a
            onClick={resetPin}
            className="category__product-container btnStyle"
          >
            <div className="category__product-title">Reset Pin</div>
          </a>
          <a
            onClick={unSubscribeUser}
            className="category__product-container btnStyle"
          >
            <div className="category__product-title">Unsubscription</div>
          </a>
          <a
            onClick={subscribeUser}
            className="category__product-container btnStyle"
          >
            <div className="category__product-title">Subscription</div>
          </a>
        </div>
      </div>
      <div className="samsung-about-container">
        <div className="samsung-about__header">How To Subscribe </div>
        <div className="samsung-about__short-description">
          {" "}
          Go to www.tapmad.com and select subscribe from the dropdown menu enter
          required details:{" "}
        </div>
        <div className="samsung-about__short-description">
          <ul>
            <li>Select the subscription package</li>
            <li>Select your telco/connection</li>
            <li>Enter your phone number</li>
            <li>Press request Pin code</li>
            <li>
              You will receive a verification code/ OTP (One time Password)
              message, enter the OTP
            </li>
            <li>
              Set 4-digit PIN, it will help you in logging into tapmad in future
            </li>
            <li>You will be successfully subscribed</li>
            <li>Login into Samsung - tapmad's app</li>
          </ul>
        </div>
      </div>
      <div className="samsung-about-container">
        <div className="samsung-about__header">How To Unsubscribe </div>
        <div className="samsung-about__short-description">
          {" "}
          If you want to unsubscribe, follow the following steps{" "}
        </div>
        <div className="samsung-about__short-description">
          <ul>
            <li>Go to menu bar, select "User Profile"</li>
            <li>Press the "Unsubscribe" button</li>
            <li>Your subscription will end right away</li>
          </ul>
        </div>
      </div>
      <div className="samsung-about-container">
        <div className="samsung-about__header">How To Reset Pin </div>
        <div className="samsung-about__short-description">
          {" "}
          If you have forgot your pin, go to www.tapmad.com for signup{" "}
        </div>
        <div className="samsung-about__short-description">
          <ul>
            <li>Click on Forget Passcode</li>
            <li>You'll receive a One time Password</li>
            <li>Enter the OTP</li>
            <li>Set your new Pin for logging in</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default samsungtv;

export async function getStaticProps() {
  return { props: { noSideBar: true } };
}
