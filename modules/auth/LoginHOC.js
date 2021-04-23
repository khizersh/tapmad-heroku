import { AuthService } from "./auth.service";
import { useRouter } from "next/router";
import swal from "sweetalert";
import { Cookie } from "../../services/cookies";
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { LoginTag } from "../../services/gtm";

export default function withLogin(Component, data) {

    return (props) => {
        const { checkUserAuthentication, setLoader, initialState } = useContext(MainContext);
        const router = useRouter();

        async function loginUser() {
            let obj = {
                Language: "en",
                Platform: "web",
                Version: "V1",
                MobileNo: initialState.User.MobileNo,
                OperatorId: initialState.User.OperatorId,
                UserPassword: initialState.User.Password,
            };
            let response = await AuthService.signInOrSignUpMobileOperator(
                obj,
                "",
                false
            );
            if (response && response.data && response.data.UserId) {
                swal({
                    timer: 2000,
                    title: "Signed In Successfully",
                    text: "Redirecting you...",
                    icon: "success",
                });
                Cookie.setCookies("isAuth", 1);
                LoginTag(obj, response.response);
                checkUserAuthentication();
                let backURL = Cookie.getCookies("backUrl") || "/";
                router.push(backURL);
                setLoader(false);
                return null;
            } else {
                setLoader(false);
                swal({
                    title: response.message,
                    icon: "error",
                    timer: 3000,
                });
                return response;
            }
        }
        return <Component login={loginUser} {...props} />
    }
}