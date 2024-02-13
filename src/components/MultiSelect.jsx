import React, { useState } from "react";
import { Multiselect as MSelect } from "multiselect-react-dropdown";

const MultiSelect = ({ options, setSelectedOptions, placeholder }) => {
  const chip_style = {
    chips: {
      display: "none",
    },
    searchBox: {
      borderRadius: "0",
    },
    optionContainer: {
      borderRadius: "0",
    },
    option: {
      accentColor: "blue",
    },
  };
  const handleSelect = (selectedList, _) => {
    setSelectedOptions(selectedList);
  };
  const handleRemove = (selectedList, _) => {
    setSelectedOptions(selectedList);
  };
  return (
    <div style={{ minWidth: "200px", maxWidth: "160px" }}>
      <MSelect
        options={options}
        placeholder={placeholder}
        selectedValues={[]}
        onSelect={handleSelect}
        onRemove={handleRemove}
        showCheckbox={true}
        displayValue="name"
        avoidHighlightFirstOption={true}
        showArrow={true}
        disablePreSelectedValues={true}
        style={chip_style}
      />
    </div>
  );
};

export default MultiSelect;
