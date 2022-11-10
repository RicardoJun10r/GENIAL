import React from "react";
import EditarProduto from "./Formularios/Editar/EditarProduto";

const PegarNameTable = ({ product, handleEditClick, handleDeleteClick }) => {
    
    const saveStorage = (descricao_produto,nameProduct,setor_produto, valor_produto, quantidade_produto) => {
        localStorage.setItem('descricao', JSON.stringify(descricao_produto))
        localStorage.setItem('name', JSON.stringify(nameProduct))
        localStorage.setItem('setor', JSON.stringify(setor_produto))
        localStorage.setItem('valor', JSON.stringify(valor_produto))
        localStorage.setItem('quantidade', JSON.stringify(quantidade_produto))   
    }

    return(
        <div onClick={() => {saveStorage(product.description, product.name, product.sector, product.value, product.quantidade)}}>
       
        </div>
    )
};

export default PegarNameTable;