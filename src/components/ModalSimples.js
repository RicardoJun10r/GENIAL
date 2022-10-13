import React, { useState } from "react";
import './ModalSimples.scss';

const ModalSimples = ({ id='modal', onClose = () => {}, children }) => {

    const handleOnClose = (e) => {
        if(e.target.id === id) onClose();
    }

    return(
        <div id={id} className="modal" onClick={handleOnClose}>
            <div className="containerModal">
                <input className="close" type="submit" value='Close' />
                <div className="contentModal">{children}</div>
            </div>
        </div>
    )

}

export default ModalSimples;