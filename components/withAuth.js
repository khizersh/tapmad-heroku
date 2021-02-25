import React from "react";

export const withAuth = function (Child) {
  return class Higher extends React.Component {
    static getInitialProps(ctx) {
      return Child.getInitialProps(ctx);
    }
  };
};
