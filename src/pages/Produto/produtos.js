import "./produtos.css"
import React from "react";
import { Link, useParams } from "react-router";
import { getStorageById } from "../../services/api";
import { Modal } from "../../components/Modal/modal";
import Forms from "../../components/Formularios/forms";

const Produtos = () => {

    const params = useParams();
    const [storage, setStorage] = React.useState({});
    const [produto, setProduto] = React.useState({});
    const [modal, setModal] = React.useState(false);
    const [verProduto, setVerProduto] = React.useState(false);

    React.useEffect(() => {
        const fetchProducts = async () => {
            const res = await getStorageById(params.id);
            console.log('res(produtos): ', res)
            setStorage(res);
        }

        fetchProducts();

    }, [])

    const closeVerProduto = () => {
        setProduto({});
        setVerProduto(false)
    }

    const openVerProduto = (p) => {
        setProduto(p);
        setVerProduto(true)
    }

    return (
        <div className="produtos-container">
            <div className="produtos-header">
                <h1>
                    Produtos
                </h1>
                <div>
                    <button onClick={() => setModal(true)}>Adicionar produto</button>
                    <Link style={{ backgroundColor: 'white', padding: '8px 4px 8px 4px', borderRadius: '5px', textDecoration: 'none', color: 'black' }} to={'/'}>Voltar</Link>
                </div>
            </div>
            <div className="produtos-content">
                <div>
                    <h1>{storage.name}</h1>
                    <p>{storage.description}</p>
                </div>
                <div>
                    <Modal open={modal} close={() => setModal(false)}>
                        <Forms.AdicionarProduto />
                    </Modal>
                    <Modal open={verProduto} close={() => closeVerProduto()}>
                        <Forms.VisualizarProduto produto={produto} />
                    </Modal>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NOME</th>
                                <th>DESCRIÇÃO</th>
                                <th>SETOR</th>
                                <th>VALOR</th>
                                <th>QUANTIDADE</th>
                                <th>ACAO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storage.products?.map((p, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{p.name}</td>
                                        <td>{p.description}</td>
                                        <td>{p.sector}</td>
                                        <td>{p.value}</td>
                                        <td>{p.quantidade}</td>
                                        <td>
                                            <button onClick={() => openVerProduto(p)}>Visualizar</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Produtos;