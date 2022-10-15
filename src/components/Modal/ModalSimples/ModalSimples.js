import React, { useState } from "react";

const ModalSimples = ({ setModal, opcao }) => {

    if(opcao === 'armazem')
    {
        return(
            <div>
                <h1>{opcao}</h1>
            </div>
        )
    }

    return(
        <div className="modal">
            <div className="containerModal">
                <button onClick={() => {setModal(false)}} className="close" type="submit">Fechar</button>
            </div>
        </div>
    )

}

export default ModalSimples;