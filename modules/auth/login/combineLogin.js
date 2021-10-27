import Link from "next/link";
import React, { useCallback, useMemo, memo, useEffect } from "react";
import swal from "sweetalert";
import { MainContext } from "../../../contexts/MainContext";
import { loggingTags } from "../../../services/apilinks";
import { Cookie } from "../../../services/cookies";
import { actionsRequestContent } from "../../../services/http-service";
import { mobileIcon, tapmadLogo } from "../../../services/imagesLink";
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
  const [CurrentMethod, setCurrentMethod] = React.useState(null);

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

    if (mobileNo.length > 6 && mobileNo.length < 20 && pin.length == 4) {
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
      forgetPin(initialState);
    }
  };

  const onChangeNetwork = useCallback(
    (data) => {
      updateUserOperator(data.OperatorId);
    },
    [updateUserOperator]
  );

  const opp = ["jazzCash", "telenor", "zong", "ufone"];

  const operators = useMemo(() => initialState?.AuthDetails?.LoginOperators);

  const UpdatePaymenthMethod = (operator) =>{
    console.log(operator);
    setCurrentMethod(operator)
    
  }

  useEffect(() => {
    console.log("operators: ", operators);
    if(operators){
      setCurrentMethod(operators[0])
    }
  }, [operators]);

  return (
    <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
      {/* <img src={tapmadLogo} width="200" alt="Tapmad logo" /> */}
      <div className="operators">

      {operators && operators.length
        ? operators.map((m, i) => (
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
                    onClick={() => UpdatePaymenthMethod(m)}
                    id={m.OperatorName}
                  />
                  <label className="radio-cstm" htmlFor={m.OperatorName}>
                    <div
                      onClick={() => UpdatePaymenthMethod(m)}
                      className={`${m.OperatorName} mt-4`}
                    >
                      <img
                        src={m.OperatorImage}
                        alt={m.OperatorName}
                        className="img-fluid "
                        width="30"
                      />
                      <i
                        // className={`text-center text-muted d-block mbl-13px  ${
                        //   CurrentMethod.OperatorId == m.OperatorId
                        //     ? "text-white"
                        //     : ""
                        // }`}
                        style={{ fontStyle: "normal" }}
                      ></i>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))
        : null}
      </div>

      <p>
        <img src={mobileIcon} className="pr-2" /> Enter your Mobile Number to
        login
      </p>
      <div className="input-group">
        {/* drop down option */}
        {/* {initialState.AuthDetails && (
          <>
            {operators && operators.length ? (
              <DropdownWithImage data={operators} onChange={onChangeNetwork} />
            ) : null}
            <input type="hidden" id="CountryMobileCode" value="+92" />
            <span>
              <label
                className="form-control custom-input"
                style={{ fontSize: "14px" }}
              >
                {initialState.AuthDetails.MobileCode}
              </label>
            </span>
          </>
        )} */}

        <div>
          <label
            className="form-control border-round custom-input"
            style={{ fontSize: "14px" }}
          >
            +92
          </label>
        </div>
        <input
          type="text"
          maxLength="20"
          minLength="5"
          className="form-control border-round mb-4 ml-3 custom-input"
          id="mobileNo"
          placeholder="xxxxxxxxxxx"
          inputMode="numeric"
          value={mobileNo}
          onChange={(e) => handleNumber(e)}
          autoComplete={"off"}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          maxLength="4"
          minLength="4"
          value={pin}
          className="form-control border-round custom-input"
          placeholder="Enter your PIN"
          onChange={handlePin}
        />
      </div>
      <div className="text-right mb-2">
        <Link href="/sign-up" shallow={true} passHref={true}>
          <a className=" mt-2 text-light">Not Registered? &nbsp;</a>
        </Link>
        <span
          className="mt-2 mr-2 text-light"
          onClick={forgetClick}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          | &nbsp;&nbsp;Forgot PIN?
        </span>
      </div>
      <div className="form-group">
        <button
          type="button"
          disabled={btnDisabled ? true : false}
          className="btn pymnt_pge_sbscrbe_btn bg-green"
          onClick={async () => await loginUser()}
        >
          LOGIN
        </button>
        <br />
      </div>
    </div>
  );
}
const EnhancedCombineLogin = withLogin(memo(combineLogin));
export default EnhancedCombineLogin;
