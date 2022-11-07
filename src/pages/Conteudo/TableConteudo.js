import { useState, useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import { api, getProducts } from '../../services/api.ts'

const url = "https://genial-back.herokuapp.com/";

function TableConteudo() {

    const navigate = useNavigate();
    const [products, createProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getProducts();
            createProducts(response.data);
            setLoading(false);
        })();
    }, []);
    
    /*
    useEffect(() => {
        fetchCompromissos()
    }, []);

    async function fetchCompromissos() {
        setIsLoading(true);
        const { data } = await supabase
            .from('Compromissos')
            .select()
        setCompromissos(data)
        setIsLoading(false)
        console.log("data: ", data)
    }*/

    function handleRegistrarCompromissos(e){
        navigate('/registro-compromisso');
    }
    function handleEditarCompromissos(uuid){
        navigate(`/editar-compromisso/${uuid}`);
    }

    function remove(uuid) {
        console.log(uuid);
        if (window.confirm("Tem certeza de que deseja excluir este compromisso?")) {
          api
            .delete(url + "/compromissos/" + uuid)
            .then((res) => {
              console.log(res.data);
              const myalldata = products.filter((item) => item.uuid !== uuid);
              createProducts(myalldata);
            })
            .catch((err) => console.error(err));
        }
      }
    
    /*
    async function deleteCompromisso(id) {
        if (window.confirm("Tem certeza de que deseja excluir este compromisso?")) {
            try {
                const { error } = await supabase
                .from('Compromissos')
                .delete()
                .eq("id", id)
                if (error) throw error
                fetchCompromissos()
            } catch (error) {
                console.error(error)
            }
        }
    }*/

    return (
        <div >
            <Table striped bordered hover style={{ backgroundColor:'white', color:'black' }}>
                <thead>
                    <tr className="text-center">
                        <th>Descrição</th>
                        <th>Nome</th>
                        <th>Setor</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Quantidade</th>
                        <th>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {loading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : products
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map(product => (
                                <tr key={product.id}>
                                    <td>{product.descricao}</td>
                                    <td>{product.nome}</td>
                                    <td>{product.sector}</td>
                                    <td>{product.value}</td>
                                    <td>{(new Date (product.date)).toLocaleDateString()}</td>
                                    <td>{product.quantidade}</td>
                                    <td className="text-center">
                                        <Button variant="warning" onClick={() => {handleEditarCompromissos(products.uuid)}}><i className="bi bi-pencil-square"></i></Button>
                                        &nbsp;&nbsp;
                                        <Button variant="danger" onClick={() => remove(products.uuid)}><i className="bi bi-trash-fill"></i></Button>
                                    </td>
                                </tr>
                            ))
                        }
                </tbody>
            </Table>
        </div>
    );
};

export default TableConteudo;