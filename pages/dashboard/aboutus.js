import React from "react";

export default function aboutus() {
  return <div></div>;
}
export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}
