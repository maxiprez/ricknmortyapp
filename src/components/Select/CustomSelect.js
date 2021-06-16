import React from 'react';
import Select from 'react-select';
import './CustomSelect.css';

const customStyles = {
    control: base => ({
      ...base,
      height: 50,
      minHeight: 35
    })
  };


export default function CustomSelect({ options, onChangeSelect, defaultValue }) {
    return (
        <div className="custom-select" >
            {/* <h4 className="text-select-gender">Change gender: </h4> */}
             <Select  options={options} onChange={onChangeSelect} styles={customStyles} defaultValue={defaultValue} />
        </div>
    )
}
