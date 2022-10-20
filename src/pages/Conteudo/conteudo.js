import './conteudo.css';
import React, { useState, useEffect } from 'react';
import RowConteudo from '../../components/Cards/RowConteudo';
import database from '../../services/api';
import NavBar from '../../components/Navbar/Navbar';
import ModalSimples from '../../components/Modal/ModalSimples/ModalSimples';
import Forms from '../../components/Formularios/Forms';

function Conteudo()
{

  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  const OPCAO = 'armazem';

  useEffect(()=>{
    console.log(modal)
  }, [modal], [index])

  return(
    <div className="containerHome">
      <div className="header">
        <NavBar setModal={setModal} modal={modal} setIndex={setIndex}/>
      </div>
      <div className="wrapperConteudo">
        {modal === true ? <div className='wrapper-modal'><ModalSimples setModal={setModal} opcao={OPCAO} formulario={<Forms setModal={setModal} modal={modal} index={index}/>} /></div> : null}
        {database.map((inventario) => {
          return(
          <RowConteudo
            //key={inventario.id}
            produtos={inventario.produtos[0]}
          />)
        })}
      </div>
    </div>
  )
}

export default Conteudo;