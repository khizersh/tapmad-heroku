import Head from "next/head";
import React, { useEffect, useState } from "react";
import { getAboutus } from "../services/apilinks";
import { get } from "../services/http-service";

export default function About() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const resp = await get(getAboutus);
    if (resp.data && resp.data.data.length) {
      setData(resp.data.data);
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Tapmad About Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div
        className="container"
        style={{
          margin: "15px auto 15px auto",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <hr />
        {data.length
          ? data.map((m, i) => (
              <p
                dangerouslySetInnerHTML={{
                  __html: m.data,
                }}
              ></p>
            ))
          : null}
      </div>
    </div>
  );
}
