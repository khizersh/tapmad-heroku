import Head from "next/head";

export default function About() {
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
        <p>
          <strong>
            {" "}
            PI Pakistan is an Over the Top (OTT) Entertainment delivery
            technology company.&nbsp;
          </strong>
        </p>
        <p>
          <strong>
            {" "}
            Pi Pakistan is a wholly owned Subsidiary of Tapmad Holdings Pte Ltd
            (a Singapore Incorporated Entity with UEN 201834390K) is a fully
            licensed Public Internet Television Service (ITS) provider. <br />{" "}
            Tapmad.com is Pi Pakistan’s own B2C brand.{" "}
          </strong>
        </p>
        <br />
        <p>
          {" "}
          We are currently running a video streaming platform with state of the
          art features including adoptive bit rate (ABR), DVR functions, mobile
          payments solution, proprietary Adserver, HD streaming &amp; Catch Up
          TV. Our web based and/or mobile application based platforms can run on
          both private and public clouds. At present, we are using the platform
          to broadcast educational content and live feeds for 3 major Telecom
          operators, one ISP and our own B2C platform by the name of Tapmad.com.
          Tapmad has the rights to over 100 Live channels along with 100s of On
          Demand videos. The principals of Pi Pakistan have always been to be a
          market leader in broadcasting and transmission services. The partners
          of Pi Pakistan amongst others have started or been senior partners at
          companies such as FM 100, SPTV (satellite TV Network), East Newspaper,
          Radio Asia and ARY Digital. Subsequently Planet N group of companies
          has invested into Pi Pakistan as a strategic partner. The principal of
          Planet N has previously founded the first Micro Finance bank of
          Pakistan, along with the successful launch, growth and sale of Easy
          Paisa to Telenor mobile.{" "}
        </p>

        <p>
          <strong>Take your television with you!</strong>
        </p>

        <p>
          {" "}
          Most of us simply accept that when we go on vacation; movies and
          dramas we watch in our living room is inaccessible. Most of us
          understand that when we're not at home, we can't enjoy the fast
          streaming with full of action, comedies and adventure. Apparently,
          most of us are lacking in imagination.
        </p>

        <p>
          {" "}
          It’s not a new concept, but we have packaged it real nice, simplified
          it and given it a name: Tapmad!{" "}
        </p>

        <p>
          {" "}
          Tapmad is just like an online cinema - faster, more reliable and
          affordable. Pay as you go - no setup costs. Watch high quality live
          streaming – 150+ live HQ channels – the right place to choose from
          1000s of dramas, movies, music and much more – anywhere, anytime, on
          any network!{" "}
        </p>

        <p>
          {" "}
          Not only for your desktops, but also watch the best version of latest
          serials and movies on your Android device as well.{" "}
        </p>

        <p>
          <strong> Happy Streaming! </strong>
        </p>

        <hr />
      </div>
    </div>
  );
}
