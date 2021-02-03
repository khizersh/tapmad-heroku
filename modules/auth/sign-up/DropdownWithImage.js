import React, { useState, memo, useEffect, useContext } from "react";
import { Authcontext } from "../../../contexts/AuthContext";

function DropdownWithImage({ data, onChange, selected }) {


  const [isCaretOpen, setIsCaretOpen] = useState(false);
  const {  updateSelectedOperator } = useContext(Authcontext);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    setSelectedData(selected);
  }, [selected]);

  const onSelectItem = (data) => {
    onChange(data);
    updateSelectedOperator(data);
    setIsCaretOpen(false);
};
  return (
    <div>
      <div className=" form-control width-11rem">
        <div onClick={() => setIsCaretOpen(!isCaretOpen)} className="textfirst">
          {selectedData ? (
            <div className="">
              <img src={selectedData.OperatorImage} width="20" />{" "}
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
              Select
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
      </div>
      <div
        className={`overflow-hidden position-absolute dropdown-width ${
          isCaretOpen ? "translate-100" : "translate-0"
        } `}
      >
        <div className={`clr-black`}>
          {data.length
            ? data.map((d, i) => (
                <div
                  key={i}
                  onClick={() => onSelectItem(d)}
                  className="cursor-pointer border-bottom padding-left-bottom"
                >
                  <img src={d.OperatorImage} width="20" />{" "}
                  <span className="pl-1">{d.OperatorName}</span>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
export default DropdownWithImage;
