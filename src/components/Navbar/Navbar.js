import React, { useState } from "react";
import './Navbar.css';
import armazenLogo from "../../assets/warehouse.png";
import ModalSimples from "../Modal/ModalSimples";


const NavBar = () => {

    return (
        <div className="container-navbar">
            <h1 className="logo-genial"><img src={armazenLogo}/>GENIAL</h1>
            <nav>
                <ul>
                    <li><button className="button-30" role="button">Criar Armazém</button></li>
                    <li><button className="button-30" role="button">Editar Armazém</button></li>
                    <li><button className="button-30" role="button">Deletar Armazém</button></li>
                    <li className="dropdown">
                        <button className="button-30" role="button">Configurações</button>
                        <div className="dropdown-content">
                                <button className="button-15">Configurar Conta</button>
                                <button className="button-15">Log out</button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;