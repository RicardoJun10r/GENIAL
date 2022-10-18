import React, { useRef } from "react";
import '../FormStyle.css';

const CriarArmazem = () => {
    
    const nome_armazem = useRef();
    const setor_armazem = useRef();
    const descricao_armazem = useRef();
    const data_armazem = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
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
                        <p>Setor</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        ref={setor_armazem}
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

                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Data de criação</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        ref={data_armazem}
                        />
                    </label>
                </div>

            </form>
        </div>
    )
}

export default CriarArmazem;