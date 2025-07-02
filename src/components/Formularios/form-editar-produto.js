import React from 'react';
import { deleteProduct, updateProduct } from '../../services/api';

export const VerProduto = ({ produto }) => {

    const [produtoSelecionado, setProdutoSelecionado] = React.useState(produto);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProdutoSelecionado(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleUpdate = async () => {
        try {
            const updatedProduct = await updateProduct(produtoSelecionado);
            console.log('Produto atualizado:', updatedProduct);
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
        }
    }

    console.log(produto)
    return (
        <section>
            Detalhes do Produto
            <div>
                <form>
                    <div>
                        <label htmlFor="nome">
                            {produto.name}
                        </label>
                        <input onChange={handleChange} type="text" id="nome" value={produtoSelecionado.name} />
                    </div>
                    <div>
                        <label htmlFor="descricao">
                            {produto.description}
                        </label>
                        <input onChange={handleChange} type="text" id="descricao" value={produtoSelecionado.description} />
                    </div>
                    <div>
                        <label htmlFor="setor">
                            {produto.sector}
                        </label>
                        <input onChange={handleChange} type="text" id="setor" value={produtoSelecionado.sector} />
                    </div>
                    <div>
                        <label htmlFor="valor">
                            {produto.value}
                        </label>
                        <input onChange={handleChange} type="number" id="valor" value={produtoSelecionado.value} />
                    </div>
                    <div>
                        <label htmlFor="quantidade">
                            {produto.quantidade}
                        </label>
                        <input onChange={handleChange} type="number" id="quantidade" value={produtoSelecionado.quantidade} />
                    </div>
                    <div>
                        <button onClick={() => handleUpdate}>Editar</button>
                        <button onClick={() => deleteProduct(produto.id)}>Excluir</button>
                    </div>
                </form>
            </div>
        </section>
    )
}