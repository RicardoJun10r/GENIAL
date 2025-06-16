import './home.css';
import React from 'react';
import { useState } from 'react';
import { UserContext } from '../../hooks/user-hook';
import { buscar } from '../../services/api';

function Home() {

  const { user } = React.useContext(UserContext);
  const [storages, setStorages] = useState([]);

  console.log(user)


  React.useEffect(() => {
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
          storages.map((inventario) => (
            <div key={inventario.id}>
              <p style={{ color: 'black' }}>{inventario.name}</p>
            </div>
          ))
        ) : (
          <p>Você ainda não tem nenhum armazém cadastrado.</p>
        )}
      </div>
    </div>
  )
}


export default Home;