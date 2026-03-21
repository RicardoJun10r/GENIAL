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
      <nav className="nav-container glass-panel">
        <div className="container-navbar">
          <h1 className="nav-brand">
            <img alt="Logo Genial" src={armazenLogo} />
            <span>GENIAL</span>
          </h1>

          <ul className="nav-actions">
            <li>
              <button
                className="button-30 glass-button"
                onClick={() => setCriarArmazem(true)}
                type="button"
              >
                Criar Armazém
              </button>
            </li>
            <li>
              <button className="button-30 glass-button" disabled type="button">
                Deletar Armazém
              </button>
            </li>
            <li className="dropdown">
              <button className="button-30 glass-button" type="button">
                Configurações
              </button>
              <div className="dropdown-content glass-panel">
                <button className="button-15 glass-button" type="button">
                  Configurar Conta
                </button>
                <button className="button-15 glass-button" onClick={logOut} type="button">
                  Log out
                </button>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <Modal close={() => setCriarArmazem(false)} open={criarArmazem}>
        <Forms.Criar onSuccess={() => setCriarArmazem(false)} />
      </Modal>
    </>
  );
};
