import { useCallback, useRef, useState, useEffect } from "react";
import '../FormStyle.css';
import Button from "../../Button/Button";
import axios from "axios";
import { editProduct } from "../../../services/api";

const EditarProduto = ({ setModal }) => {
    
    const nome_produto = useRef();
    const descricao_produto = useRef();
    const setor_produto = useRef();
    const valor_produto = useRef();
    const quantidade_produto = useRef();

    const [produto, setProduto] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
    }

    let tmp = localStorage.getItem('productName');
    let nome = JSON.parse(tmp)

    const fetchData = useCallback(async () => {
        try {
            //fetch and set users or axios.get
            const result = await axios.get(
                `http://localhost:8080/product/search/byName?name=${nome}`,
              {
                  headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
              }
          )
            setProduto(result.data);
        } catch (err) {
          console.log(err.message);
        }
    });

    useEffect(() => {
        fetchData();
    },[produto])

    const editProduto = () => {
        editProduct(nome, nome_produto.current.value, descricao_produto.current.value, setor_produto.current.value, valor_produto.current.value, quantidade_produto.current.value);
        setModal(false)  
    }
    
    return(
        <div className='form-armazem-container'>
            <h1>Criar Produto</h1>
            <form onSubmit={onSubmit}>

                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Nome</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        placeholder={produto.name}
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
                        placeholder={produto.description}
                        ref={descricao_produto}
                        />
                </div>
                <div className="floating-label-group-formulario">
                    <label className="floating-label-formulario">
                        <p>Setor</p>
                        <input 
                        type="text" 
                        className="form-control-formulario" 
                        placeholder={produto.sector}
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
                        placeholder={produto.value}
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
                        placeholder={produto.quantidade}
                        ref={quantidade_produto}
                        />    
                    </label>
                </div>
            </form>
            <div className="footer-buttons">
                <Button id="cancelBtn" handleClick={setModal} label={'Cancelar'} style={'crimson'} />
                <button className="button-component" onClick={editProduto} >Editar</button>
            </div>
        </div>
    )
}

export default EditarProduto;