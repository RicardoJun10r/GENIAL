import React, { useRef } from "react";
import '../FormStyle.css';
import Button from "../../Button/Button";
import { createProduct } from "../../../services/api";

const CriarProduto = ({ setModal }) => {
    
    const nome_produto = useRef();
    const descricao_produto = useRef();
    const setor_produto = useRef();
    const valor_produto = useRef();
    const quantidade_produto = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const id = localStorage.getItem('storageId')

    const criarProd = () => {
        createProduct( id , nome_produto.current.value, descricao_produto.current.value, setor_produto.current.value, quantidade_produto.current.value, valor_produto.current.value)
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
                        ref={nome_produto}
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
                        ref={descricao_produto}
                        />
                </div>
                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Setor</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        ref={setor_produto}
                        />    
                    </label>
                </div>
                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Valor</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        ref={valor_produto}
                        />    
                    </label>
                </div>
                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Quantidade</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        ref={quantidade_produto}
                        />    
                    </label>
                </div>
            </form>
            <div className="footer-buttons">
                <Button id="cancelBtn" handleClick={setModal} label={'Cancelar'} style={'crimson'} />
                <button className="button-component" onClick={criarProd} >Criar</button>
            </div>
        </div>
    )
}

export default CriarProduto;