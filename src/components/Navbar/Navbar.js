import React, { useState, useEffect } from "react";
import './Navbar.css';
import armazenLogo from "../../assets/warehouse.png";
import ModalSimples from "../Modal/ModalSimples/ModalSimples";
import { useNavigate } from 'react-router-dom';

const NavBar = ({ setModal, modal }) => {

    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const sterEgg = () => {
        setCount( currentCount => {
            return currentCount + 1;
        })
    }

    const aviso = (count) =>{
        if(count === 10) 
        {
            alert("PARA DE APERTAR")
            setCount(0)
            console.clear()
        }
    }

    useEffect(() => {
        aviso(count)
    }, [count])

    return (
        <div className="container-navbar">
            <h1 className="logo-genial"><img src={armazenLogo}/>GENIAL</h1>
            <nav>
                <ul>
                    <li><button onClick={() => {setModal(!modal)}} className="button-30" role="button">Criar Armazém</button></li>
                    <li><button className="button-30" role="button">Editar Armazém</button></li>
                    <li><button className="button-30" role="button">Deletar Armazém</button></li>
                    <li className="dropdown">
                        <button className="button-30" role="button">Configurações</button>
                        <div className="dropdown-content">
                            <button className="button-15">Configurar Conta</button>
                            <button onClick={()=>{navigate('/')}} className="button-15">Log out</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;