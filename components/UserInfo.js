import React from "react";
import ReactJWPlayer from "react-jw-player";
import { DFPSlotsProvider, AdSlot, DFPManager } from "react-dfp";
import { post } from "../services/http-service";

export default function UserInfo(props) {
  const [info, setInfo] = React.useState();
  const billboard = "Staging_billboard";

  function getIpInfo() {
    fetch(`http://ip-api.com/json/${props.clientIP}`)
      .then((e) => e.json())
      .then((resp) => {
        setInfo(resp);
      });
  }
  function getTapmadIpInfo(params) {
    post("https://api.tapmad.com/api/HomePageIpAdress", {
      IPAddress: props.clientIP,
    }).then((e) => console.log(e.data));
  }
  React.useEffect(() => {
    getIpInfo();
    getTapmadIpInfo();
  }, []);
  return (
    <div>
      {info
        ? `Incoming user is from ${info.country} with the ip ${props.clientIP}
`
        : "Fetching user details"}
    </div>
  );
}
