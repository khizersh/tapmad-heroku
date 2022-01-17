import React, { useEffect, useState } from "react";

const International = () => {
  const [screenBg, setScreenBg] = useState("desktop");
  useEffect(() => {
    screen.width < 768 && setScreenBg("mobile");
  }, []);
  return (
    <>
      <style jsx>
        {`
          .intlbg {
            background-position: top center;
            background-size: 1600px auto;
            background-repeat: no-repeat;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
      <section
        style={{
          backgroundImage: `url('/images/signup/signup-${screenBg}-bg.png')`,
        }}
        className="intlbg"
      ></section>
    </>
  );
};

export default International;
