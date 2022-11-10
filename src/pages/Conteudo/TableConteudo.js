import { useState, useEffect, useCallback } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from 'axios';

import { api, getProductsByID } from '../../services/api.ts'


const accessToken =
'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ2aXRvckBnbWFpbC5jb20iLCJleHAiOjE2NjgxMjcxMDd9.yXqtF8gwJhjalqJ-DIHwYsKSYmMaQReoCJhgYSeJXJ0c1OJ8P-8R0Rff8OHeBg1MQZKxIqviZATRZOGGlnf5dw';

const apiUrl = 'http://localhost:8080';

function TableConteudo() {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [requestError, setRequestError] = useState();
    const [loading, setLoading] = useState(true);

    
    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${accessToken}`;
            return config;
        },
        error =>{
            return Promise.reject(error);
        }
    );

    const fetchData = useCallback(async () => {
        try {
            //fetch and set users or axios.get
            const result = await axios.get(`${apiUrl}/product/Supermercado`);
            setProducts(result.data);
            setLoading(false);
        } catch (err) {
         // set request error message
         setRequestError(err.message);
        }
    });
    
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
    }
    */

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
            .delete(apiUrl + "/compromissos/" + uuid)
            .then((res) => {
              console.log(res.data);
              const myalldata = products.filter((item) => item.uuid !== uuid);
              fetchData(myalldata);
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
        <button onClick={fetchData}></button>
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
                        .map( product2 => (
                                <tr key={product2.id}>
                                    <td>{product2.description}</td>
                                    <td>{product2.name}</td>
                                    <td>{product2.sector}</td>
                                    <td>{product2.value}</td>
                                    <td>{(new Date (product2.date)).toLocaleDateString()}</td>
                                    <td>{product2.quantidade}</td>
                                    <td className="text-center">
                                        <Button variant="warning" onClick={() => {handleEditarCompromissos(product2.uuid)}}><i className="bi bi-pencil-square"></i></Button>
                                        &nbsp;&nbsp;
                                        <Button variant="danger" onClick={() => remove(product2.uuid)}><i className="bi bi-trash-fill"></i></Button>
                                    </td>
                                </tr>
                            )
                        )
                        }
                </tbody>
            </Table>
        </div>
    );
};

export default TableConteudo;