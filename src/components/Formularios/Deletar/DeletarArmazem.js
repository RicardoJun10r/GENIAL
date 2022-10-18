import React, { useRef } from "react";
import '../FormStyle.css';

const DeletarArmazem = () => {

    const deletar = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
        <div className='form-armazem-container'>
            <h1>Deletar Armazém</h1>
            <form onSubmit={onSubmit}>
                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Nome</p>
                        <input 
                        type="text" 
                        className="" 
                        ref={deletar}
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default DeletarArmazem;