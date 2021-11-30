import React, { useEffect, useReducer } from "react";
import { MyAccountService } from "../../modules/my-account/myaccount.service";
import { Cookie } from "../../services/cookies";
import { ProfileReducer, PROFILE_DATA } from "./ProfileReducer";

export const ProfileContext = React.createContext([null]);

export default function ProfileProvider({ children }) {
  const [ProfileState, dispatch] = useReducer(ProfileReducer, {
    ProfileData: null,
  });

  // useEffect(async () => {
  //   const userID = Cookie.getCookies("userId");
  //   if (userID) {
  //     const data = await MyAccountService.getUserData({
  //       Version: "V1",
  //       Language: "en",
  //       Platform: "web",
  //       UserId: userID,
  //     });
  //     dispatch({ type: PROFILE_DATA, data: data.data });

  //   }
  // }, [userID, ProfileState]);

  const data = {
    ProfileState,
    dispatch,
  };

  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
}
