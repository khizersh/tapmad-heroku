import React, { useCallback, useEffect, useState } from "react";
import EditProfileMobile from "../modules/profile-component/EdiProfileMobile";
import EditProfileWeb from "../modules/profile-component/EdiProfileWeb";

const EditProfile = () => {
  const [mobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 799) {
      setIsMobile(true);
    }
  }, []);
  const RenderViews = useCallback(
    function () {
      if (mobile) {
        return <EditProfileMobile />;
      } else {
        return <EditProfileWeb />;
      }
    },
    [mobile]
  );

  return <RenderViews />;
};

export default EditProfile;
