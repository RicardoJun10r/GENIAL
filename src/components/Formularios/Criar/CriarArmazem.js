import React, { useRef } from "react";
import '../FormStyle.css';
import Button from "../../Button/Button";
import { createStorage } from "../../../services/api";

const CriarArmazem = ({ setModal }) => {
    
    const nome_armazem = useRef();
    const descricao_armazem = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const criarArmazem = () => {
        createStorage(nome_armazem.current.value, descricao_armazem.current.value);      
        setModal(false)  
    }
    
    return(
        <div className='form-armazem-container'>
            <h1>Criar Armazém</h1>
            <form onSubmit={onSubmit}>

                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Nome</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        ref={nome_armazem}
                        />    
                    </label>
                </div>

                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Descrição</p>
                    </label>
                    <input 
                        type="text" 
                        className="form-control-formulario" 
                        ref={descricao_armazem}
                        />
                </div>
            </form>
            <div className="footer-buttons">
                <Button id="cancelBtn" handleClick={setModal} label={'Cancelar'} style={'crimson'} />
                <button className="button-component" onClick={criarArmazem} >Criar</button>
            </div>
        </div>
    )
}

export default CriarArmazem;