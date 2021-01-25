import React from "react";

const TaxView = ({ type }) => {
  if (type == "simCard") {
    return (
      <>
        <li className="list-group-item w-50 p-1 text-center list-group-item-action border-0 text-muted pr_active">
          <span className="font-weight-bold"> 25</span>
          Rs + Tax Per Week
        </li>

        <li className="list-group-item w-50 p-1 text-center list-group-item-action border-0 text-muted">
          <span className="font-weight-bold"> 100</span>
          Rs + Tax Per Month
        </li>
      </>
    );
  } else if (type == "easyPaisa") {
    return (
      <li
        style={{ width: "100% !important" }}
        className="list-group-item w-100 p-1 text-center list-group-item-action border-0 text-muted pr_active"
      >
        <span className="font-weight-bold"> 5</span>
        Rs + Tax Per Month
      </li>
    );
  } else if (type == "jazzCash") {
    return (
      <li className="list-group-item w-100 p-1 text-center list-group-item-action border-0 text-muted pr_active">
        <span className="font-weight-bold"> 100</span>
        Rs + Tax Per Month
      </li>
    );
  }
};

export default TaxView;
