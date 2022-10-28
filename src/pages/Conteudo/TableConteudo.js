import { useEffect, useState } from 'react'
import { Button, Spinner, Table, TableProps } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
//import supabase from '../../services/api';
import 'bootstrap-icons/font/bootstrap-icons.css'

//import { api, getPlayers } from '../../services/api'

//const url = "http://165.227.103.201:8100";

function TableConteudo() {
  
  /*
  const navigate = useNavigate()
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    ;(async () => {
      //const response = await getPlayers()
      //setPlayers(response.data)
      setLoading(false)
    })()
  }, [])

  /*
    useEffect(() => {
        fetchJogadores()
    }, []);

    
    async function fetchJogadores() {
        setIsLoading(true);
        const { data } = await supabase
            .from('Jogadores')
            .select()
        setJogadores(data)
        setIsLoading(false)
        console.log("data: ", data)
    }

  function handleRegistrarJogadores(e) {
    navigate('/registro-atleta')
  }
  function handleEditarJogadores(nome) {
    navigate(`/editar-atleta/${nome}`)
  }

  function remove(nome) {
    console.log(nome);
    if (window.confirm("Tem certeza de que deseja excluir este jogador?")) {
      api
        .delete(url + "/players/" + nome)
        .then((res) => {
          console.log(res.data);
          const myalldata = players.filter((item) => item.nome !== nome);
          setPlayers(myalldata);
        })
        .catch((err) => console.error(err));
    }
  }

  /*
    async function deleteJogador(id) {
        if (window.confirm("Tem certeza de que deseja excluir este jogador?")) {
            try {
                const { error } = await supabase
                .from('Jogadores')
                .delete()
                .eq("id", id)
                if (error) throw error
                fetchJogadores()
            } catch (error) {
                console.error(error)
            }
        }
    }
    */

    /*
    inside table body
    
     {loading ?
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            : players
              .sort((a, b) => a.nome > b.nome ? 1 : -1)
              .map(player => (
                <tr key={player.id}>
                  <td className="text-center">{player.camisa}</td>
                  <td>{player.nome}</td>
                  <td>{player.posicao}</td>
                  <td>{player.idade}</td>
                  <td>
                    {new Date(player.termino_contrato).toLocaleDateString()}
                  </td>
                  <td>{player.vinculo}</td>
                  <td>{player.salario}</td>
                  <td className="text-center">
                    <Button
                      variant="warning"
                      onClick={() => {
                        //handleEditarJogadores(player.nome)
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      variant="danger" //onClick={() => remove(player.nome)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </td>
                </tr>
              ))
          }
    */

  return (
    <div>
        <Table
        striped
        bordered
        hover
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        <thead>
          <tr className="text-center">
            <th>Camisa</th>
            <th>Nome</th>
            <th>Posição</th>
            <th>Idade</th>
            <th>Término de contrato</th>
            <th>Vínculo</th>
            <th>Salário (R$)</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
                <tr>
                  <td className="text-center"></td>
                  <td>oi</td>
                  <td></td>
                  <td></td>
                  <td>
                    {new Date().toLocaleDateString}
                  </td>
                  <td></td>
                  <td></td>
                  <td className="text-center">
                    <Button
                      variant="warning"
                      onClick={() => {
                        //handleEditarJogadores(player.nome)
                      }}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    &nbsp;&nbsp;
                    <Button
                      variant="danger" //onClick={() => remove(player.nome)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </td>
                </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TableConteudo;