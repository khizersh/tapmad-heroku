import Link from "next/link";
import React, { useCallback, useMemo, memo } from "react";
import swal from "sweetalert";
import { MainContext } from "../../../contexts/MainContext";
import { loggingTags } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { actionsRequestContent } from "../../../services/http-service";
import { tapmadLogo } from "../../../services/imagesLink";
import { AuthService } from "../auth.service";
import withLogin from "../LoginHOC";
import DropdownWithImage from "../sign-up/DropdownWithImage";

function combineLogin({ loginResponse, forgetPin, verifyPin, ip }) {
  const {
    initialState,
    updateUserNumber,
    updateUserPassword,
    updateUserOperator,
    setLoader,
  } = React.useContext(MainContext);
  const [mobileNo, setMobileNo] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [btnDisabled, setbtnDisabled] = React.useState(true);

  function handleNumber(e) {
    const mobileNum = e.target.value;
    if (+mobileNum === +mobileNum) {
      if (mobileNum.length > 4) {
        setbtnDisabled(false);
      } else {
        setbtnDisabled(true);
      }
      setMobileNo(mobileNum.trim());
      updateUserNumber(mobileNum.trim());
    }
  }

  function handlePin(e) {
    const userPin = e.target.value;
    if (+userPin === +userPin) {
      setPin(userPin);
    }
  }
  async function loginUser() {
    let body = {
      event: loggingTags.login,
      action: "login_attempt",
    };
    actionsRequestContent(body);

    if (mobileNo.length == 10 && pin.length > 0) {
      setLoader(true);
      let body = {
        Language: "en",
        MobileNo: mobileNo,
      };
      const data = await AuthService.GetCardUser(body);
      if (data != null) {
        if (data.data.User) {
          updateUserNumber(mobileNo);
          updateUserPassword(data.data.User.UserPassword);
          Cookie.setCookies("content-token", data.data.User.UserPassword);
          Cookie.setCookies("userId", data.data.User.UserId);
          let viewToRendor = loginResponse(data.data);
          if (viewToRendor == true) {
            verifyPin(ip, pin, forgetPin);
            setLoader(false);
          }
        }
      } else {
        swal({
          title: "Something went wrong!",
          timer: 3000,
          icon: "error",
        });
        setLoader(false);
      }
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
      forgetPin();
    }
  };

  const onChangeNetwork = useCallback(
    (data) => {
      updateUserOperator(data.OperatorId);
    },
    [updateUserOperator]
  );

  const operators = useMemo(() => initialState?.AuthDetails?.LoginOperators);
  return (
    <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
      <img src={tapmadLogo} width="200" alt="Tapmad logo" />
      <h4>Enter your Mobile Number</h4>
      <p>Please Enter your Mobile Number to login</p>
      <div className="input-group">
        {initialState.AuthDetails && (
          <>
            {operators && operators.length ? (
              <DropdownWithImage data={operators} onChange={onChangeNetwork} />
            ) : null}
            <input type="hidden" id="CountryMobileCode" value="+92" />
            <span>
              <label className="form-control" style={{ fontSize: "14px" }}>
                {initialState.AuthDetails.MobileCode}
              </label>
            </span>
          </>
        )}

        <input
          type="text"
          maxLength="20"
           minLength="5"
          className="form-control mb-2"
          placeholder="xxxxxxxxxxx"
          inputMode="numeric"
          value={mobileNo}
          onChange={(e) => handleNumber(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          maxLength="4"
          minLength="4"
          value={pin}
          className="text-center form-control"
          placeholder="Enter your PIN"
          onChange={handlePin}
        />
      </div>
      <div className="form-group">
        <button
          type="button"
          disabled={btnDisabled ? true : false}
          className="btn btn-block  req_pin_cde_btn-blue"
          onClick={async () => await loginUser()}
        >
          LOGIN
        </button>
        <br />
        <>
          <Link href="/" shallow={true} passHref={true}>
            <a className=" mt-2 text-light">Back &nbsp;</a>
          </Link>
          <span
            className="mt-2 mr-2 text-light"
            onClick={forgetClick}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            | &nbsp;&nbsp;Forgot Passcode?
          </span>
        </>
      </div>
    </div>
  );
}
const EnhancedCombineLogin = withLogin(memo(combineLogin));
export default EnhancedCombineLogin;
