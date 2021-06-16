import React from 'react';
import './NextPrevButtons.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function NextPrevButtons({ prev, next, page, infoPages, infoTotalCount }) {
    return (
        <>
            <div className="buttons-container">
                     <FaAngleLeft className="btn-prev" onClick={prev}/> 
                                        <p className="info-page">{page} / {infoPages}</p>
                     <FaAngleRight className="btn-next" onClick={next}/>
                     
            </div> 
            <p className="total-count-text text-center">Total: {infoTotalCount}</p>
        </>
    )
}
