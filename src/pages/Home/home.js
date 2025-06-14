import './home.css';
import React from 'react';
import { useState } from 'react';
import Row from '../../components/Cards/Row';
import { NavBar } from '../../components/Navbar/navbar';
import ModalSimples from '../../components/Modal/ModalSimples/ModalSimples';
import Forms from '../../components/Formularios/Forms';
import { UserContext } from '../../hooks/user-hook';

const Dialog = ({children, onClose}) => {
  return(
    <dialog style={{backgroundColor: 'black'}} onClose={onClose}>
      <div>X</div>
      {children}
    </dialog>
  )
}

function Home() {

  const { user } = React.useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [criarDialog, setCriarDialog] = React.useState(false);
  const [deletarDialog, setDeletarDialog] = React.useState(false);
  const [configuracoesDialog, setConfiguracoesDialog] = React.useState(false);
  const [index, setIndex] = useState(0);
  const [storage, setStorage] = useState([]);

  console.log(user)

  function refreshPage() {
    setTimeout(() => { window.location.reload(false); }, 350000);
  }

  return (
    <div className="containerHome" onLoad={refreshPage}>
      <div className="header">
        <NavBar setCriarDialog={setCriarDialog} setDeletarDialog={setDeletarDialog} setConfiguracoesDialog={setConfiguracoesDialog} />
      </div>
      <div className="container">
        {criarDialog === true ? (
          <div>
            <Dialog>
              <>
                ola
              </>
            </Dialog>
          </div>) : null}
        {storage?.map((inventario) => {
          return (
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