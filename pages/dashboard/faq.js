import React from "react";

export default function faq() {
  return <div>sagfsagasgag</div>;
}

export async function getStaticProps() {
  return { props: { noSideBar: true, dashboard: true } };
}
