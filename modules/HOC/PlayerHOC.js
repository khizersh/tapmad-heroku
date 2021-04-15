import React, { Component } from "react";

const PlayerHOC = (Component, data) => {
  return function HOC() {
    return (
      <>
        <h1>Hello</h1>
        <Component data={data} />;
      </>
    );
  };
};

export default PlayerHOC;
