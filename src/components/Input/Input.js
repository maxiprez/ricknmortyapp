import React from 'react';
import './Input.css';

export default function Input( {onChangeInput, searchInput} ) {
    return (
        <>


        <div className="container-fluid d-flex justify-content-center mb-4">
            <div className="row" id="map_section">
                <div className="search-group">
                    <input value={searchInput} onChange={onChangeInput} className="form-control form-control-lg search-group__input" type="text" placeholder="Search Characters..."  />
                </div>
            </div>
        </div>
       
            
        </>
    )
}
