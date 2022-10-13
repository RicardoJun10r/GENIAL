import './home.css';
import React, { useState, useCallback } from 'react';
import Row from '../../components/Row';
import database from '../../services/api';
import NavBar from '../../components/Navbar';
import ModalSimples from '../../components/ModalSimples';

function Home()
{

  const [visibilidade, setVisibilidade] = useState(false);

  return(
    <div className="containerHome">
      <div className="header">
        <NavBar />
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
        <div className="footer">
          <label>
            <h1>Modal Simples (teste)</h1>
            <input type="submit" value='abrir' onClick={() => { setVisibilidade(true) }} />
            {visibilidade ? 
            <ModalSimples onClose={ () => { setVisibilidade(false) } } >
              <h1>Ola</h1></ModalSimples> : null}
          </label>
        </div>
    </div>
  )
}

  
export default Home;