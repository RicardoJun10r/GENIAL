import { useRef } from "react";
import '../FormStyle.css';
import Button from "../../Button/Button";
import { deleteStorage } from "../../../services/api";

const DeletarProduto = ({ setModal, modal }) => {

    const deletar = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const deletarArmazem = () => 
    {
        deleteStorage(deletar.current.value);
        setModal(false)
    }
    
    return(
        <div className='form-armazem-container'>
            <h1>Deletar Produto</h1>
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
                <button className="button-component" onClick={deletarArmazem}>Deletar</button>
            </div>
        </div>
    )
}

export default DeletarProduto;