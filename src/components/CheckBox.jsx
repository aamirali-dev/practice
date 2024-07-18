import React, { useState } from "react";

const CheckBox = ({ label, setSelected }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    // Call the onChange callback if provided
    if (setSelected) {
      setSelected(newCheckedState);
    }
  };
  return (
    <div className="m-3">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{
            marginRight: "8px",
            accentColor: "blue",
            transform: "scale(1.2)",
          }}
        />
        {label}
      </label>
    </div>
    // <div className="checkbox-wrapper-4">
    //   <input className="inp-cbx" id="morning" type="checkbox" />
    //   <label className="cbx" htmlFor="morning">
    //     <span>
    //       <svg width="12px" height="10px">
    //         <use xlink:href="#check-4"></use>
    //       </svg>
    //     </span>
    //     <span>{label}</span>
    //   </label>
    //   <svg className="inline-svg">
    //     <symbol id="check-4" viewbox="0 0 12 10">
    //       <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    //     </symbol>
    //   </svg>
    // </div>
  );
};

export default CheckBox;
