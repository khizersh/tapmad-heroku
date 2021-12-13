import React, { useState, memo, useEffect, useRef } from "react";

function DropdownWithImage({ data, onChange, placeHolder, width }) {
  const [isCaretOpen, setIsCaretOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const onSelectItem = (data) => {
    onChange(data);
    setIsCaretOpen(false);
    setSelectedData(data);
  };
  return (
    <div className={`${width ? "w-100" : ""}`}>
      <div className="form-control cursor-pointer border-curve w-100 position-relative">
        <div onClick={() => setIsCaretOpen(!isCaretOpen)} className="textfirst">
          {selectedData ? (
            <div className="">
              <img
                src={selectedData.OperatorImage}
                width="20"
                alt={selectedData.OperatorName}
              />{" "}
              <span className="pl-1">{selectedData.OperatorName}</span>
              <img
                src={
                  isCaretOpen
                    ? "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-128.png"
                    : "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                }
                width="10"
                height="10"
                className="caret-down"
              />
            </div>
          ) : (
            <>
              {" "}
              {placeHolder ? placeHolder : "Select"}
              <img
                src={
                  isCaretOpen
                    ? "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-128.png"
                    : "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-down-b-128.png"
                }
                width="10"
                height="10"
                className="caret-down"
              />
            </>
          )}
        </div>
        <div
        className={`overflow-hidden position-absolute mt-1 ${
          isCaretOpen ? "translate-100" : "translate-0"
        } `}
        style={{ zIndex: 100, width: "100%" , left : '0px' }}
      >
        <div className={`clr-black`}>
          {data.length
            ? data.map((d, i) => (
                <div
                  key={i}
                  onClick={() => onSelectItem(d)}
                  className="cursor-pointer border-bottom padding-left-bottom"
                >
                  <img src={d.OperatorImage} width="20" alt="Operator" />{" "}
                  <span className="pl-1">{d.OperatorName}</span>
                </div>
              ))
            : null}
        </div>
      </div>
      </div>
     
    </div>
  );
}
export default memo(DropdownWithImage);
