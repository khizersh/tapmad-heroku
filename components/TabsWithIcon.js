import React from "react";

const TabsWithIcon = ({ data, onChange  , selected}) => {
  console.log("selected : ",selected);
  return (
    <>
      <div class="container-sm rounded-pill row option_div p-3">
        {data.length && selected ? data.map((tab) => (
          <div className="m-auto cursor-pointer" onClick={() => onChange(tab)}>
            <span style={{ color: tab.title == selected.title ? "#87c242 " : "#000" }}>
              {tab.icon ? <img
                src={tab.title == selected.title ? tab.selectedIcon : tab.icon}
                width="35"
                alt="User"
                className="pr-3 logo-img"
              /> : ""}
              
              <strong>{tab.title}</strong>
            </span>
            {tab.title == selected.title ? <div class="green-bar"></div> : null}
          </div>
        )) : null}

        {/* <div className="m-auto cursor-pointer" onClick={() => onChange(tab)}>
          <span style={{ color: imageState.game ? "#87c242 " : "#000" }}>
            <img
              src={imageState.game ? colorGaming : blackGaming}
              width="40"
              alt="User"
              className="pr-3 logo-img"
            />
            <strong>My Games</strong>
          </span>
          {imageState.game ? <div class="green-bar"></div> : null}
        </div> */}
      </div>
    </>
  );
};

export default TabsWithIcon;
