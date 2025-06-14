import { useEffect } from "react";
import './navbar.css';
import armazenLogo from "../../assets/warehouse.png";
import { useNavigate } from 'react-router-dom';


export const NavBar = ({ setCriarDialog, setDeletarDialog, setConfiguracoesDialog }) => {

    const navigate = useNavigate();

    function logOut() {
        localStorage.clear();
        navigate('/')
    }

    useEffect(() => {
    }, [])

    return (
        <nav className="nav-container">
            <h1 style={{ left: 0, color: 'white' }}><img src={armazenLogo} />GENIAL</h1>
            <ul>
                <li><button onClick={() => { setCriarDialog(true); }} className="button-30" role="button">Criar Armazém</button></li>
                <li><button onClick={() => { setDeletarDialog(true); }} className="button-30" role="button">Deletar Armazém</button></li>
                <li className="dropdown">
                    <button className="button-30" role="button">Configurações</button>
                    <div className="dropdown-content">
                        <button onClick={() => setConfiguracoesDialog(true)} className="button-15">Configurar Conta</button>
                        <button onClick={logOut} className="button-15">Log out</button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}
