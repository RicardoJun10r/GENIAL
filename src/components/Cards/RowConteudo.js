import React from "react";
import './Row.css';

function RowConteudo({ produtos, inventario })
{

    return(
        <div className="card green">
            <p>Produtos</p>
            <p>Item: {produtos.nome}</p>
            <p>Qunatidade: {produtos.quantidade}</p>
        </div>
    )
}

export default RowConteudo;