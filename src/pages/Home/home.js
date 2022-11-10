import './home.css';
import React, { useState, useEffect } from 'react';
import Row from '../../components/Cards/Row';
import database from '../../services/api';
import NavBar from '../../components/Navbar/Navbar';
import ModalSimples from '../../components/Modal/ModalSimples/ModalSimples';
import Forms from '../../components/Formularios/Forms';
import { listStorage } from '../../services/api';
import { useCallback } from 'react';
import axios from 'axios';

function Home()
{

  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [storage, setStorage] = useState([]);

  const OPCAO = 'armazem';

  useEffect( () => {
    console.log(modal + ' ' + storage)

    fetchData()

  }, [modal], [index], [storage] )

  const fetchData = useCallback(async () => {
    try {
        //fetch and set users or axios.get
        const result = await axios.get(
          'http://localhost:8080/storage',
          {
              headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
          }
      )
        setStorage(result.data);
    } catch (err) {
      console.log(err.message);
    }
});

  return(
    <div className="containerHome">
      <div className="header">
        <NavBar setModal={setModal} modal={modal} setIndex={setIndex}/>
      </div>
      <div className="wrapper">
        {modal === true ? <div className='wrapper-modal'><ModalSimples setModal={setModal} opcao={OPCAO} formulario={<Forms setModal={setModal} modal={modal} index={index}/>} /></div> : null}
        {storage?.map((inventario) => {
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