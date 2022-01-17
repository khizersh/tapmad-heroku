import React, { useEffect, useState } from "react";

const International = () => {
  const [screenBg, setScreenBg] = useState(null);
  useEffect(() => {
    screen.width < 768 ? setScreenBg("mobile") : setScreenBg("desktop");
  }, []);
  <style jsx>
    {`
      .intlbg {
        background-position: top center;
        width: 100vw;
        height: 100vh;
      }
    `}
  </style>;
  return (
    <section
        // style={
        //   screenBg
        //     ? { backgroundImage: `url('/images/signup/sign-${screenBg}.png)` }
        //     : ""
        // }
      className="intlbg"
    ></section>
  );
};



export default International;
