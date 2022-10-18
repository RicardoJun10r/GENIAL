import React from "react";
import './ModalSimples.css';

const ModalSimples = ({ setModal, opcao, formulario }) => {

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
                    <h1 style={{color: 'white', fontSize: '1.5em'}}>Preencha os valores abaixo:</h1>
                </div>

                <div className="body">
                    {formulario}
                </div>
                
                <div className="footer">
                    <button
                        onClick={() => {
                        setModal(false);
                        }}
                        id="cancelBtn"
                    >
                        Cancelar
                    </button>
                    <button>Criar</button>
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