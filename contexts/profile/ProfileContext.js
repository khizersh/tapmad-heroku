import React, { useEffect, useReducer } from "react";
import { ProfileReducer } from "./ProfileReducer";

export const ProfileContext = React.createContext(null);

export default function ProfileProvider({ children }) {
  const [ProfileState, dispatch] = useReducer(ProfileReducer, {
    ProfileData: null,
  });

  const data = {
    ProfileState,
    dispatch,
  };

  return (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  );
}
