import React, { useEffect, useState } from "react";

const International = () => {
  const [screenBg, setScreenBg] = useState("desktop");
  const { mobileNo, setMobileNo } = useState("");
  useEffect(() => {
    screen.width < 768 && setScreenBg("mobile");
  }, []);
  return (
    <>
      <style jsx>
        {`
          .intlbg {
            background-position: top center;
            background-size: cover;
            background-repeat: no-repeat;
            min-width: 100vw;
            min-height: 100vh;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }

          .intlbg form input {
            line-height: 48px;
            height: 48px;
          }
        `}
      </style>
      <section
        style={{
          backgroundImage: `url('/images/signup/signup-${screenBg}-bg.png')`,
        }}
        className="intlbg container-fluid"
      >
        <form className="text-center">
          <h1 className="line-1 mb-0">
            Wait is over! Watch Pakistan's Biggest <br />{" "}
            <span className="text-base">Cricket Event HBL PSL 7</span>
          </h1>
          <p className="h4 font-weight-normal mb-3">
            Bring the stadium feel at home.{" "}
            <span className="text-base">#LevelHai</span>
          </p>
          <input
            type="text"
            name="mobile"
            placeholder="Enter your mobile number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            width={550}
            className="mw-100 form-control rounded"
          />
        </form>
      </section>
    </>
  );
};

export default International;
