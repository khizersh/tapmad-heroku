import React, { useCallback, useMemo, memo } from "react";
import swal from "sweetalert";
import { Authcontext } from "../../../contexts/AuthContext";
import { MainContext } from "../../../contexts/MainContext";
import { post } from "../../../services/http-service";
import "../auth.module.css";
import DropdownWithImage from "../sign-up/DropdownWithImage";

function Login({ loginResponse }) {
  const {
    initialState,
    updateUserNumber,
    updateUserOperator,
    setLoader,
  } = React.useContext(MainContext);
  const [mobileNo, setMobileNo] = React.useState("");
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
    }
  }
  async function loginUser() {
    if (mobileNo.length == 10) {
      setLoader(true);
      var response = await post("https://api.tapmad.com/api/getCardUser", {
        Language: "en",
        MobileNo: mobileNo,
      });

      updateUserNumber(mobileNo);
      loginResponse(response.data);
      setLoader(false);
    } else {
      swal({
        title: "Invalid number!",
        timer: 3000,
        icon: "error",
      });
      setLoader(false);
    }
  }
  const onChangeNetwork = useCallback(
    (data) => {
      updateUserOperator(data.OperatorId);
    },
    [updateUserOperator]
  );
  const operators = useMemo(() => initialState?.AuthDetails?.LoginOperators);
  return (
    <div className="login_slct_oprtr login_slct_oprtr1 login_slct_oprtr_active">
      <img src="https://www.tapmad.com/images/tm-logo.png" width="200" />
      <h4>Enter your Mobile Number</h4>
      <p>Please Enter your Mobile Number to login</p>
      <div className="input-group">
        {initialState.AuthDetails && (
          <>
            <DropdownWithImage data={operators} onChange={onChangeNetwork} />
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
          maxLength="10"
          minLength="10"
          className="form-control"
          placeholder="3xxxxxxxxxx"
          inputMode="numeric"
          value={mobileNo}
          onChange={(e) => handleNumber(e)}
        />
      </div>
      <div className="form-group">
        <button
          type="button"
          disabled={btnDisabled ? true : false}
          className="btn btn-block btn-success req_pin_cde_btn"
          onClick={async () => await loginUser()}
        >
          LOGIN
        </button>
        <br />
        <a className=" mt-2 text-muted">Back</a>
        <span className="mt-2 mr-2 text-muted">
          | &nbsp;&nbsp;Not Registered?
        </span>
        <a className="text-light" href="sign-up">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default memo(Login);
