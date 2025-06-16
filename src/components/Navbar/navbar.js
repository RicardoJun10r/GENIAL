import './navbar.css';
import React from "react";
import armazenLogo from "../../assets/warehouse.png";
import { useNavigate } from 'react-router';
import { UserContext } from '../../hooks/user-hook';
import { Modal } from '../Modal/modal';
import Forms from '../Formularios/forms';

export const NavBar = () => {

    const navigate = useNavigate();

    const { setUser } = React.useContext(UserContext);

    const [criarArmazem, setCriarArmazem] = React.useState(false);

    function logOut() {
        setUser(null)
        navigate('/login')
    }

    return (
        <>
            <nav className="nav-container">
                <h1 style={{ left: 0, color: 'white' }}><img src={armazenLogo} />GENIAL</h1>
                <ul>
                    <li><button onClick={() => setCriarArmazem(true)} className="button-30" role="button">Criar Armazém</button></li>
                    <li><button className="button-30" role="button">Deletar Armazém</button></li>
                    <li className="dropdown">
                        <button className="button-30" role="button">Configurações</button>
                        <div className="dropdown-content">
                            <button className="button-15">Configurar Conta</button>
                            <button onClick={logOut} className="button-15">Log out</button>
                        </div>
                    </li>
                </ul>
            </nav>
            <Modal open={criarArmazem} close={() => setCriarArmazem(false)}>
                <Forms.Criar />
            </Modal>
        </>
    )
}
