import React from "react";
import './Row.css';
import { useNavigate } from 'react-router-dom';

function Row({ inventario })
{

    const colors = ['green', 'red', 'blue', 'brown', 'violet'];
    let index = inventario.id;
    index = index % colors.length;

    const navigate = useNavigate();

    const saveStorageIndex = (storageID) => {
        localStorage.setItem('storage', JSON.stringify(storageID))
        navigate('/produtos')
    }

    return(
        <div className="card green"  onClick={() => {saveStorageIndex(inventario.id)}}>
            <h2>{inventario.name}</h2>
            <p style={{color: `${colors[index]}`}}>Descrição: {inventario.description}</p>
            <p>Data: {inventario.date}</p>
        </div>
    )
}

export default Row;