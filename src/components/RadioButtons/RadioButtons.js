import React from 'react';
import './RadioButtons.css';



export default function RadioButtons( {handleChange, selectedStatus} ) {




    return (
        <>
        <form className="form-radio-buttons">
            <label className="form-radio-buttons__input">
                <input type="radio"
                value="" checked={selectedStatus.checked === ''} onChange={handleChange} />
                All
                <span className="checkmark"></span>
            </label>
            <label className="form-radio-buttons__input">
                <input type="radio"
                value="alive" checked={selectedStatus.checked === 'alive'} onChange={handleChange} />
                Alive
                <span className="checkmark"></span>
            </label>
            <label className="form-radio-buttons__input">
                <input type="radio"
                value="dead" checked={selectedStatus.checked === 'dead'} onChange={handleChange} />
                Dead
                <span className="checkmark"></span>
            </label>
            <label className="form-radio-buttons__input">
                <input type="radio"
                value="unknown" checked={selectedStatus.checked === 'unknown'} onChange={handleChange} />
                Unknown
                <span className="checkmark"></span>
            </label>
        </form>
        </>
    )
}
