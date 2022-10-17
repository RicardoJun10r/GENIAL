import React, { useState } from "react";
import './ModalSimples.css';

const ModalSimples = ({ setModal, opcao }) => {

    if(opcao === 'armazem') // MODAL ( SIMPLES ) PARA ARMAZÉNS
    {
        return(
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                        setModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Are You Sure You Want to Continue?</h1>
                </div>

                <div className="body">
                    <p>The next page looks amazing. Hope you want to go there!</p>
                </div>
                
                <div className="footer">
                    <button
                        onClick={() => {
                        setModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancel
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        )
    }

    else if(opcao === 'produto') // MODAL ( SIMPLES ) PARA PRODUTOS
    {
        return(
            <div className="modal">
                <div className="containerModal">
                    <h1>{opcao}</h1>
                    <button onClick={() => {setModal(false)}} className="close" type="submit">Fechar</button>
                </div>
            </div>
        )
    }

}

export default ModalSimples;