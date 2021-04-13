import React, {
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import swal from "sweetalert";
import { Authcontext } from "../contexts/AuthContext";
import { MainContext } from "../contexts/MainContext";
import { AuthService } from "../modules/auth/auth.service";
import SimCardForm from "../modules/auth/sign-up/payment-info-components/SimCardForm";
import { useRouter } from "next/router";
import PromoCodeLayout from "../modules/promo-code/PromoCodeLayout";

const promoCode = () => {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");
  const [number, setNumber] = useState([]);
  const { authState, updateSelectedOperator } = useContext(Authcontext);
  const {
    updateUserOperator,
    initialState,
    setLoader,
    updateUserNumber,
  } = useContext(MainContext);

  const handleNumber = (e) => {
    let num = e.target.value;
    if (+num === +num) {
      setNumber(num);
      updateUserNumber(num);
    }
  };

  const onChangeNetwork = useCallback(
    (data) => {
      updateUserOperator(data.OperatorId);
      updateSelectedOperator(data);
    },
    [updateSelectedOperator]
  );

  const onChangePromo = (e) => {
    setPromoCode(e.target.value);
  };

  const onClick = async () => {
    if (!promoCode.length) {
      return swal({
        title: "Enter promo code!",
        timer: 2000,
        icon: "error",
      });
    }
    if (!initialState.User.OperatorId) {
      return swal({
        title: "Select operator!",
        timer: 2000,
        icon: "error",
      });
    }
    setLoader(true);
    let body = {
      Version: "V1",
      Language: "en",
      Platform: "web",
      MobileNo: initialState.User.MobileNo,
      OperatorID: initialState.User.OperatorId,
      PromoCode: promoCode,
    };
    const data = await AuthService.userPromoCode(body);
    if (data && data.responseCode == 1) {
      swal({
        title: data.message,
        timer: "2500",
        icon: "success",
      }).then((res) => {
        router.push(
          { pathname: "/sign-up", query: { code: "34", number: number } },
          "/sign-up"
        );
      });
    } else if (data.responseCode == 11) {
      swal({
        title: data.message,
        timer: "2500",
        icon: "warning",
      }).then((result) => {
        router.push("/sign-in");
      });
    } else {
      swal({
        title: data.message,
        timer: "2500",
        icon: "error",
      });
    }
    setLoader(false);
  };

  const operators = useMemo(() => authState.loginOperators);

  return (
    <div>
      <PromoCodeLayout
        bgImage={"http://d1s7wg2ne64q87.cloudfront.net/web/images/psl-min.jpg"}
      >
        <div className="form-group mb-0 tm_promo_cde_form w-100">
          <div>
            <div className="">
              <input
                className="input-group text-center promo-code-input"
                placeholder="Enter Your Promo Code"
                onChange={onChangePromo}
              />
            </div>
            <div className="input-group ng-scope my-4 ">
              <SimCardForm
                data={operators}
                onChangeNetwork={onChangeNetwork}
                onChangeNumber={handleNumber}
                mobileCode={authState.MobileCode}
              />
            </div>
            <div className="text-center pb-2">
              <button
                className="btn btn-primary promo-btn pl-5 pr-5 py-2 text-white"
                onClick={onClick}
              >
                Watch Now
              </button>
            </div>
            <div className="text-center pb-4">
              <span style={{ fontSize: 11 }}>T & C Applied</span>
            </div>
          </div>
        </div>
      </PromoCodeLayout>
    </div>
  );
};

export default promoCode;
