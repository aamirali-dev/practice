import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";


const MultiSelectComponent = () => {
    const options = [
        { label: "Grapes", value: "grapes" },
        { label: "Mango", value: "mango" },
        { label: "Strawberry", value: "strawberry"},
      ];
    
      const [selected, setSelected] = useState([]);

      const handleSelection = async (data) => {
        setSelected([{label: 'data', value: 'data'}])
        console.log(data)
      }

  return (
    <div> <MultiSelect options={options} value={selected} onChange={handleSelection}/> </div>
  )
}

export default MultiSelectComponent