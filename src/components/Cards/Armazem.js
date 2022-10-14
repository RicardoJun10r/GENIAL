import React from "react";
import './Row.css';

function Row({nome, setor, data, descricao, produtos})
{
    return(
        <div className="containerRow">
            <div className="cardRow">
                <div className="face face1">
                    <div className="contentRow">
                    <div className="icon">
                        <i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize:"1.0em", textAlign:'center'}}> {nome} </i>
                    </div>
                    </div>
                </div>
                <div className="face face2">
                    <div className="contentRow">
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