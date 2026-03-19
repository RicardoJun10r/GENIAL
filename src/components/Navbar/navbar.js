import './navbar.css';
import React from 'react';
import { useNavigate } from 'react-router';
import armazenLogo from '../../assets/warehouse.png';
import { UserContext } from '../../hooks/user-hook';
import Forms from '../Formularios/forms';
import { Modal } from '../Modal/modal';

export const NavBar = () => {
  const navigate = useNavigate();
  const { clearAuthSession } = React.useContext(UserContext);

  const [criarArmazem, setCriarArmazem] = React.useState(false);

  function logOut() {
    clearAuthSession();
    navigate('/login', { replace: true });
  }

  return (
    <>
      <nav className="nav-container">
        <h1 style={{ left: 0, color: 'white' }}>
          <img alt="Logo Genial" src={armazenLogo} />
          GENIAL
        </h1>
        <ul>
          <li>
            <button className="button-30" onClick={() => setCriarArmazem(true)} role="button" type="button">
              Criar Armazém
            </button>
          </li>
          <li>
            <button className="button-30" disabled role="button" type="button">
              Deletar Armazém
            </button>
          </li>
          <li className="dropdown">
            <button className="button-30" role="button" type="button">
              Configurações
            </button>
            <div className="dropdown-content">
              <button className="button-15" type="button">
                Configurar Conta
              </button>
              <button className="button-15" onClick={logOut} type="button">
                Log out
              </button>
            </div>
          </li>
        </ul>
      </nav>

      <Modal open={criarArmazem} close={() => setCriarArmazem(false)}>
        <Forms.Criar onSuccess={() => setCriarArmazem(false)} />
      </Modal>
    </>
  );
};
