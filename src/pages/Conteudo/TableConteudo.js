import { useState, useEffect } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

import { api, getCompromissos } from '../../services/api'

const url = "https://genial-back.herokuapp.com/";

function TableConteudo() {

    const navigate = useNavigate();
    const [compromissos, setCompromissos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getCompromissos();
            setCompromissos(response.data);
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
              const myalldata = compromissos.filter((item) => item.uuid !== uuid);
              setCompromissos(myalldata);
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
                        <th>Data</th>
                        <th>Horário</th>
                        <th>Anfitrião</th>
                        <th>Visitante</th>
                        <th>Local</th>
                        <th>Torneio</th>
                        <th>Editar/Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {loading ? 
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    : compromissos
                    .sort((a, b) => new Date(a.data) - new Date(b.data))
                    .map(compromisso => (
                                <tr key={compromisso.id}>
                                    <td>{(new Date (compromisso.data)).toLocaleDateString()}</td>
                                    <td>{(new Date (compromisso.horario)).toLocaleTimeString()}</td>
                                    <td>{compromisso.anfitriao}</td>
                                    <td>{compromisso.visitante}</td>
                                    <td>{compromisso.local}</td>
                                    <td>{compromisso.torneio}</td>
                                    <td className="text-center">
                                        <Button variant="warning" onClick={() => {handleEditarCompromissos(compromisso.uuid)}}><i className="bi bi-pencil-square"></i></Button>
                                        &nbsp;&nbsp;
                                        <Button variant="danger" onClick={() => remove(compromisso.uuid)}><i className="bi bi-trash-fill"></i></Button>
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