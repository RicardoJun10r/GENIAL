import React from "react";
import { useEffect, useState } from "react";
import database from '../../services/api';

const Produtos = () => {

    const [storageIndex, setStorageIndex] = useState(null)
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        let index = localStorage.getItem('storage')
        return JSON.parse(index)
    }

    const storage = database.filter(storage => storage.id == storageIndex);

    useEffect(()=>{
        setStorageIndex(getProducts())
        setProducts(storage.produtos)
    },[storageIndex, products])

    return(
        <div>
            <h1>Ola</h1>
            <div>
                {products.map((produto) => {
                    return(
                        <p key={produto.id}>{produto.nome} + {}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Produtos;