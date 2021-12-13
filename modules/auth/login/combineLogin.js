import Link from "next/link";
import React, { useCallback, useMemo, memo, useEffect } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../../contexts/auth/AuthContext";
import { SignUpContext } from "../../../contexts/auth/SignUpContext";
import { UPDATE_USER_DETAILS } from "../../../contexts/auth/SignUpReducer";
import { MainContext } from "../../../contexts/MainContext";
import { loggingTags } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { actionsRequestContent } from "../../../services/http-service";
import { mobileIcon, tapmadLogo } from "../../../services/imagesLink";
import { AuthService } from "../auth.service";
import withLogin from "../LoginHOC";
import DropdownWithImage from "../sign-up/DropdownWithImage";
import CombineLoginDesktop from "./combine-login.js/CombineLoginDesktop";
import CombineLoginMobile from "./combine-login.js/CombineLoginMobile";

function combineLogin({ loginResponse, forgetPin, verifyPin, ip, login }) {
  const { setLoader } = React.useContext(MainContext);
  const { AuthState } = React.useContext(AuthContext);
  const { SignUpState, dispatch } = React.useContext(SignUpContext);
  const [mobileNo, setMobileNo] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(false);
  const [btnDisabled, setbtnDisabled] = React.useState(true);
  const [CurrentMethod, setCurrentMethod] = React.useState(null);
  const [viewsToRender, setViewsToRender] = React.useState(false);

  function handleNumber(e) {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      if (mobileNum.length > 4) {
        setbtnDisabled(false);
      } else {
        setbtnDisabled(true);
      }
      setMobileNo(mobileNum.trim());
      dispatch({
        type: UPDATE_USER_DETAILS,
        data: { MobileNo: mobileNum.trim() },
      });
    }
  }

  function handlePin(e) {
    const userPin = e.target.value;
    if (+userPin === +userPin) {
      setPin(userPin);
      dispatch({
        type: UPDATE_USER_DETAILS,
        data: { UserPin: userPin },
      });
    }
  }

  async function loginUser() {
    setLoader(true);
    if (!CurrentMethod) {
      setLoader(false);
      return swal({ title: "Select Operator!", timer: 2000, icon: "error" });
    }
    if (mobileNo.length > 6 && mobileNo.length < 20 && pin.length == 4) {
      setLoader(true);

      dispatch({
        type: UPDATE_USER_DETAILS,
        data: {
          MobileNo: mobileNo,
          Operator: CurrentMethod.OperatorId,
          UserPin: pin,
        },
      });
      login(ip);
    } else {
      swal({
        title: "Enter all fields!",
        timer: 3000,
        icon: "error",
      });
      setLoader(false);
    }
    setLoader(false);
  }

  const forgetClick = () => {
    if (mobileNo.length > 4) {
      forgetPin(SignUpState);
    }
  };

  const UpdatePaymenthMethod = (operator) => {
    setCurrentMethod(operator);
    dispatch({
      type: UPDATE_USER_DETAILS,
      data: { Operator: operator.OperatorId },
    });
  };

  useEffect(() => {
    setCurrentMethod(AuthState.LoginOperators[0]);
    if (AuthState?.LoginOperators[0]?.OperatorId) {
      dispatch({
        type: UPDATE_USER_DETAILS,
        data: { Operator: AuthState.LoginOperators[0].OperatorId },
      });
    }
  }, [AuthState]);

  useEffect(() => {
    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
      {/* AuthState , UpdatePaymenthMethod , handleNumber , handlePin , btnDisabled
      , loginUser */}
      {/* <img src={tapmadLogo} width="200" alt="Tapmad logo" /> */}
      {isMobile ? (
        <CombineLoginMobile
          AuthState={AuthState}
          UpdatePaymenthMethod={UpdatePaymenthMethod}
          handleNumber={handleNumber}
          handlePin={handlePin}
          btnDisabled={btnDisabled}
          CurrentMethod={CurrentMethod}
          mobileNo={mobileNo}
          pin={pin}
          loginUser={loginUser}
          forgetClick={forgetClick}
        />
      ) : (
        <CombineLoginDesktop
          AuthState={AuthState}
          UpdatePaymenthMethod={UpdatePaymenthMethod}
          handleNumber={handleNumber}
          handlePin={handlePin}
          btnDisabled={btnDisabled}
          CurrentMethod={CurrentMethod}
          mobileNo={mobileNo}

          loginUser={loginUser}
          pin={pin}
          forgetClick={forgetClick}
        />
      )}
    </div>
  );
}
const EnhancedCombineLogin = withLogin(memo(combineLogin));
export default EnhancedCombineLogin;
