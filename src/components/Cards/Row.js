import React from "react";
import './Row.css';
import { useNavigate } from 'react-router-dom';

function Row({ inventario })
{
    const colors = ['green', 'red', 'blue', 'brown', 'violet'];
    let index = inventario.id;
    index = index % colors.length;

    const navigate = useNavigate();

    function goTo(e){
        navigate('/conteudo');  // Tela despesas
    } 

    return(
        <div className="card green" onClick={goTo}>
            <h2>{inventario.nome}</h2>
            <p>Setor: {inventario.setor}</p>
            <p style={{color: `${colors[index]}`}}>Descrição: {inventario.descricao}</p>
            <p>Data: {inventario.data}</p>
        </div>
    )
}

export default Row;