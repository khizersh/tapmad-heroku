import React from "react";

export default function Contact(params) {
  return (
    <div className="container">
      <p style={{ clear: "both", color: "#fff" }}>
        {" "}
        <br />{" "}
      </p>
      <div className="row">
        <div className="col-lg-12" style={{ textAlign: "center" }}>
          <address>
            <h3 style={{ color: "#fff" }}>PAKISTAN OFFICE LOCATION:</h3>
            <br />
            <p className="lead" style={{ color: "#fff" }}>
              Zamzama, Phase 5, DHA
              <br />
              Karachi, Pakistan
              <br />
              UAN: 0800-11133
              <br />
              {/* Phone: 021-35155511
              <br /> */}
              Email:{" "}
              <a href="mailto:info@pitelevision.com">
                customerservice@tapmad.com
              </a>
            </p>
            <br />
            <h3 style={{ color: "#fff" }}>SINGAPORE OFFICE LOCATION:</h3>
            <br />
            <p className="lead" style={{ color: "#fff" }}>
              531A Upper cross street #04-98,
              <br />
              Hong Lim Complex singapore (051531)
            </p>
          </address>
        </div>
        <hr />
      </div>
    </div>
  );
}
