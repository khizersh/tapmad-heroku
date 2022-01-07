import React from "react";
import Head from "next/head";

const TabsWithIcon = ({ data, onChange, selected }) => {
  return (
    <>
      <Head>
        <style>
          {`
          .option_div {
            padding: 0.4rem;
          }
          .green-bar {
            bottom: -7px !important;
          }
          .option_div span {
            font-size: 1.25em;
            text-transform: capitalize;
            color: black;
          }
          `}
        </style>
      </Head>
      <div className="container-sm rounded-pill row option_div">
        {data.length && selected
          ? data.map((tab, k) => (
              <div
                className="m-auto cursor-pointer"
                onClick={() => onChange(tab)}
                key={k}
              >
                <span
                  style={{
                    color: tab.title == selected.title ? "#87c242 " : "#000",
                  }}
                >
                  {tab.icon ? (
                    <img
                      src={
                        tab.title == selected.title
                          ? tab.selectedIcon
                          : tab.icon
                      }
                      width="50"
                      height="50"
                      alt="User"
                      className="pr-3 logo-img"
                    />
                  ) : (
                    ""
                  )}

                  <strong
                    className={`${
                      tab.title == selected.title ? "text-green" : ""
                    } `}
                  >
                    {tab.title}
                  </strong>
                </span>
                {tab.title == selected.title ? (
                  <div className="green-bar"></div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default TabsWithIcon;
