import './home.css';
import React from 'react';
import Row from '../../components/Row';
import database from '../../services/api';
import NavBar from '../../components/Navbar';

function Home()
{
  return(
    <div className="container">
      <div className="header">
        <NavBar/>
      </div>
      <div className="main">
        {database.map((inventario) => {
          return(
          <Row 
            key={inventario.id}
            nome={inventario.nome}
            setor={inventario.setor}
            imagem={inventario.imagem}
            data={inventario.data}
            descricao={inventario.descricao}
            produtos={inventario.produtos}
          />)
        })}
        </div>
    </div>
  )
}

  
export default Home;