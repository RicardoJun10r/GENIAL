import './home.css';
import React, { useState, useEffect } from 'react';
import Row from '../../components/Cards/Row';
import database from '../../services/api';
import NavBar from '../../components/Navbar/Navbar';
import ModalSimples from '../../components/Modal/ModalSimples/ModalSimples';

function Home()
{

  const [modal, setModal] = useState(false);

  const opcao = 'armazem';

  useEffect(()=>{
    console.log(modal)
  }, [modal])

  return(
    <div className="containerHome">
      <div className="header">
        <NavBar setModal={setModal} modal={modal}/>
      </div>
      <div className="wrapper">
        <div className='wrapper-modal'>
          {modal === true ? <ModalSimples setModal={setModal} opcao={opcao}/> : null}
        </div>
        {database.map((inventario) => {
          return(
          <Row 
            key={inventario.id}
            inventario={inventario}
          />)
        })}
      </div>
    </div>
  )
}

  
export default Home;