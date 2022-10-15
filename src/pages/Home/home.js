import './home.css';
import React, { useState, useEffect } from 'react';
import Row from '../../components/Cards/Row';
import database from '../../services/api';
import NavBar from '../../components/Navbar/Navbar';
import ModalSimples from '../../components/Modal/ModalSimples/ModalSimples';

function Home()
{

  const [modal, setModal] = useState(false);

  useEffect(()=>{
    console.log(modal)
  }, [modal])

  return(
    <div className="containerHome">
      <div className="header">
        <NavBar setModal={setModal} modal={modal}/>
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
        {modal === true ? 'true' : 'false'}
    </div>
  )
}

  
export default Home;