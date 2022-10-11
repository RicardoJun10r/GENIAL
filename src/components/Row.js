import React from "react";
import './Row.css';
import imagemLogo from "../assets/warehouse.png";

function Row({nome, setor, imagem, data, descricao, produtos})
{
    return(
        <div className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                    <div className="icon">
                        <i className="fa fa-linkedin-square" aria-hidden="true"> <img src={imagemLogo}/> </i>
                    </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                    <h3>
                        <a href="#0" target="_blank" style={{color:"#44bba7c2"}}>{nome}</a>
                    </h3>
                    <p style={{color:"#f5ab35", fontWeight: "bolder"}}>Descrição: {descricao}</p>
                    <p style={{color:"#f5ab35"}}>Data de criação: {data}</p>
                    <p style={{color:"#f5ab35"}}>Setor: {setor}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Row;