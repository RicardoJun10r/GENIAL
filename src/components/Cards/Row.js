import React from "react";
import './Row.css';
import { useNavigate } from 'react-router-dom';

function Row({ inventario })
{

    const colors = ['green', 'red', 'blue', 'brown', 'violet'];
    let index = inventario.id;
    index = index % colors.length;

    const navigate = useNavigate();

    const saveStorage = (storageNAME, storageID) => {
        localStorage.setItem('storageNome', JSON.stringify(storageNAME))
        localStorage.setItem('storageId', JSON.stringify(storageID))
        navigate('/produtos')
    }

    return(
        <div className="card"  onClick={() => {saveStorage(inventario.name, inventario.id)}}>
            <h2>{inventario.name}</h2>
            <p style={{color: `${colors[index]}`}}>Descrição: {inventario.description}</p>
            {/*  <p style={{color: `${colors[index]}`}}>Data: {(new Date (inventario.date)).toLocaleDateString()}</p> */}
        </div>
    )
}

export default Row;