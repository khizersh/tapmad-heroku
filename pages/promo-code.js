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
import { isAuthentictedUser } from "../services/utils";
import { SignUpContext } from "../contexts/auth/SignUpContext";
import { UPDATE_USER_DETAILS } from "../contexts/auth/SignUpReducer";
const promoCode = () => {
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");
  const [number, setNumber] = useState([]);
  const [operator, setOperator] = useState(null);
  const { authState, updateSelectedOperator } = useContext(Authcontext);
  const { setLoader } = useContext(MainContext);
  const { dispatch, SignUpState } = useContext(SignUpContext);

  useEffect(() => {
    const isAuthenticated = isAuthentictedUser();
    if (isAuthenticated) {
      router.push("/");
    }
  }, []);
  const handleNumber = (e) => {
    let num = e.target.value;
    if (+num === +num) {
      setNumber(num);
      dispatch({ type: UPDATE_USER_DETAILS, data: { MobileNo: num } });
    }
  };

  const onChangeNetwork = useCallback((data) => {
    setOperator(data.OperatorId);
    // updateSelectedOperator(data);
    // dispatch({
    //   type: UPDATE_USER_DETAILS,
    //   data: { Operator: data.OperatorId },
    // });
  }, []);

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
    if (!operator) {
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
      MobileNo: number,
      OperatorID: operator,
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
          {
            pathname: "/sign-up",
            query: { code: "34", number: number, operator: body.OperatorID },
          },
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
        <div className="form-group mb-0 ">
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

export function getStaticProps() {
  return {
    props: {
      auth: true,
      env: process.env.TAPENV,
    },
  };
}
