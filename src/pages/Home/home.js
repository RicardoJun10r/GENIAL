import './home.css';
import React, { useState } from 'react';
import Row from '../../components/Cards/Row';
import database from '../../services/api';
import NavBar from '../../components/Navbar/Navbar';
import ModalSimples from '../../components/Modal/ModalSimples';

function Home()
{

  const [visibilidade, setVisibilidade] = useState(false);

  return(
    <div className="containerHome">
      <div className="header">
        <NavBar />
      </div>
      <div className="wrapper">
        {database.map((inventario) => {
          return(
          <Row 
            key={inventario.id}
            inventario={inventario}
          />)
        })}
        </div>
        {/* <div className="footer">
          <label>
            <h1>Modal Simples (teste)</h1>
            <input type="submit" value='abrir' onClick={() => { setVisibilidade(true) }} />
            {visibilidade ? 
            <ModalSimples onClose={ () => { setVisibilidade(false) } } >
              <h1>Ola</h1></ModalSimples> : null}
          </label>
        </div> */}
    </div>
  )
}

  
export default Home;