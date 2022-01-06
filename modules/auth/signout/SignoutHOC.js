import { useContext } from "react";
import swal from "sweetalert";
import { MainContext } from "../../../contexts/MainContext";
import { Cookie } from "../../../services/cookies";
import { SignOut } from "../../../services/gtm";
import { useRouter } from "next/router";
import { AuthService } from "../auth.service";

export default function withSignout(Component, data) {
  return (props) => {
    const { setLoader, setisAuthenticateFalse } = useContext(MainContext);

    const router = useRouter();

    const onSignOut = async () => {
      setLoader(true);
      let data = {
        UserId: Cookie.getCookies("userId"),
        headers: {
          Authorization: Cookie.getCookies("content-token"),
        },
      };
      const resp = await AuthService.logoutUser(data);

      if (resp && resp.Response.responseCode == 1) {
        swal({
          title: "You have logged out!",
          text: "Redirecting you in 2s...",
          timer: 1900,
          icon: "success",
          buttons: false,
        }).then((res) => {
          SignOut();
          Cookie.setCookies("isAuth", 0);
          setisAuthenticateFalse();

          //   if (window.sendToSignUp) {
          //     window.sendToSignUp = false;
          //     router.push("/sign-up");
          //   } else {
          //     router.push("/");
          //   }
          router.push("/");
          setLoader(false);
        });
      } else {
        swal({
          title: "Something went wrong. Please try again!",
          timer: 1900,
          icon: "error",
          buttons: false,
        });
        setLoader(false);
      }

      setLoader(false);
    };
    return <Component signout={onSignOut} {...props} />;
  };
}
