import { useState, useEffect, useCallback } from 'react';
import { Button, Table } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from '../../components/Navbar/Navbar';
import ModalSimples from '../../components/Modal/ModalSimples/ModalSimples';
import Forms from '../../components/Formularios/Forms';
import axios from 'axios';
import './produtos.css'

const Produtos = () => {

    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);

    let tmp = localStorage.getItem('storageNome');
    let nome = JSON.parse(tmp)
    
    const OPCAO = 'produto';

    const fetchData = useCallback(async () => {
        try {
            //fetch and set users or axios.get
            const result = await axios.get(
              `http://localhost:8080/product/${nome}`,
              {
                  headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
              }
          )
            setProducts(result.data);
        } catch (err) {
          console.log(err.message);
        }
    });

    useEffect(() => {
        fetchData();
    },[products])

    return(
        <div>
            <div className="header">
                <NavBar setModal={setModal} modal={modal} setIndex={setIndex} opcao={OPCAO}/>
            </div>
            <div className="conteiner-produtos">
                {modal === true ? <div className='wrapper-modal'><ModalSimples setModal={setModal} opcao={OPCAO} formulario={<Forms opcao={OPCAO} setModal={setModal} modal={modal} index={index}/>} /></div> : null}
                <Table className="tableT" striped bordered hover style={{ backgroundColor:'white', color:'black' }}>
                    <thead>
                            <tr className="text-center">
                                <th>Descrição</th>
                                <th>Nome</th>
                                <th>Setor</th>
                                <th>Valor</th>
                                <th>Data</th>
                                <th>Quantidade</th>
                                <th>Selecionar</th>
                            </tr>
                        </thead>
                    <tbody>
                        {products.map( product => (
                            <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.name}</td>
                                <td>{product.sector}</td>
                                <td>{product.value}</td>
                                <td>{(new Date (product.date)).toLocaleDateString()}</td>
                                <td>{product.quantidade}</td>
                                <td className="text-center" >
                                    <Button onClick={() => {localStorage.setItem('productName', JSON.stringify(product.name))}}><i className="bi bi-check2-square"></i></Button>
                                </td>
                            </tr>
                            )
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Produtos;