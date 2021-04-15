import React from "react";

const NewsBage = ({ children, color }) => {
  let styles = {
    backgroundColor: color,
    padding: "3px 10px 6px 10px",
    marginLeft: "5px",
    fontFamily: "Montserrat , sans-serif",
    fontSize: "14px",
  };
  return (
    <>
      <span style={styles}>{children}</span>
    </>
  );
};

export default NewsBage;
