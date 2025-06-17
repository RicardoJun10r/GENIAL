import './home.css';
import React from 'react';
import { useState } from 'react';
import { UserContext } from '../../hooks/user-hook';
import { buscar } from '../../services/api';
import { Card } from '../../components/Card/card';
import { useNavigate } from 'react-router';

function Home() {

  const { user } = React.useContext(UserContext);
  const [storages, setStorages] = useState([]);
  const navigate = useNavigate();
  console.log(user)

  React.useEffect(() => {
    if (user === null) {
      return navigate('/login')
    }

    const fetchData = async () => {
      const res = await buscar(user.email);
      if (Array.isArray(res)) {
        console.log("DADOS: ", res)
        setStorages(res)
      }
    }

    fetchData()

  }, [user?.email])


  console.log('storages:', storages)

  return (
    <div className="home-container">
      <h1>Seus Armazéns</h1>
      <div className='painel'>
        {storages.length > 0 ? (
          storages.map((inventario, index) => (
            <Card key={index} handleFunction={() => navigate(`/produtos/${(inventario.name)}`)} titulo={inventario.name} content={inventario.description} foot={Date.now()} />
          ))
        ) : (
          <p style={{ position: 'absolute' }}>Você ainda não tem nenhum armazém cadastrado.</p>
        )}
      </div>
    </div>
  )
}


export default Home;