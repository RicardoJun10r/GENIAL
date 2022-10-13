import React, { useState } from "react";
import './Navbar.css';
import armazenLogo from "../assets/warehouse.png";
import ModalSimples from "./ModalSimples";


const NavBar = () => {

    return (
        <div>
            <nav className="menu">
                <img src={armazenLogo} alt="logo" />
                <h1 style={{color: "white",fontSize:"2em" , fontWeight: "bolder"}}>Genial</h1>
                <input id ="menu__toggle" type="checkbox" className='menu__toggle'/>
                <label htmlFor="menu__toggle" className="menu__toggle-label">
                    <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
                        <path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z' />
                    </svg>
                    <svg preserveAspectRatio='xMinYMin' viewBox='0 0 24 24'>
                        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                </label>
                <ol className='menu__content'>
                    <li className="menu-item"><a href="">Criar Armazém</a></li>
                    <li className="menu-item"><a href="">Editar Armazém</a></li>
                    <li className="menu-item"><a href="">Deletar Armazém</a></li>
                    <li className="menu-item">
                    <a href="">Configurações</a>
                        <ol className="sub-menu">
                            <li className="menu-item"><a href="">Consultar Conta</a></li>
                            <li className="menu-item"><a href="">Logout</a></li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export default NavBar;