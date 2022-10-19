import React, { useRef } from "react";
import '../FormStyle.css';
import Button from "../../Button/Button";

const DeletarArmazem = ({ setModal, modal }) => {

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
            <div className="footer-buttons" style={{marginTop: '100px', marginLeft: '5px'}}>
                <Button id="cancelBtn" handleClick={setModal} label={'Cancelar'} style={'crimson'} />
                <Button handleClick={null} label={'Deletar'} style={null} />
            </div>
        </div>
    )
}

export default DeletarArmazem;