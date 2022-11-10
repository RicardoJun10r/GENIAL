import NavBar from '../../components/Navbar/Navbar';
import TableConteudo from "./TableConteudo";
import React, { useState, useEffect } from 'react';
import "./conteudo.css";

function Conteudo() {

  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

    return (
            <div className="containerHomeConteudo">
                <div className="headerConteudo">
                    <NavBar setModal={setModal} modal={modal} setIndex={setIndex}/>
                </div>
                <div className="wrapperTabela">
                    <TableConteudo/>
                </div>
                <footer className="position">
                    <h5 className="color">
                        <a 
                            style={{ color:'black', textDecoration: 'none' }} 
                            href="/home" className="float-start">
                                <i class="bi bi-arrow-left-circle-fill"></i>
                                &nbsp;Voltar&nbsp;&nbsp;
                        </a>
                        <a 
                            style={{ color:'black', textDecoration: 'none' }} 
                            href="/registro-compromisso" className="float-start">
                                <i class="bi bi-plus-circle-fill"></i>
                                &nbsp;Agendar Novo Compromisso&nbsp;&nbsp;
                        </a>
                    </h5>
                </footer>
            </div>
    )
}
export default Conteudo;