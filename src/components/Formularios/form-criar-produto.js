import './criar-armazem.css'
import React from "react";
import { addProduct } from "../../services/api";
import { useParams } from 'react-router';

export const CriarProduto = () => {

    const [error, setError] = React.useState('')
    const params = useParams();
    const name = React.useRef();
    const description = React.useRef();
    const sector = React.useRef();
    const value = React.useRef();
    const quantidade = React.useRef();

    async function onSubmit(e) {
        e.preventDefault();
        console.log('enviando')
        try {
            const res = await addProduct(params.id,
                name.current.value,
                description.current.value,
                sector.current.value,
                value.current.value,
                quantidade.current.value)
            console.log(res)
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }

    return (
        <section className="criar-armazem-container">
            <div className="criar-armazem-header">
                <h1>Criar Produto</h1>
            </div>
            <div>
                <form onSubmit={onSubmit} className="criar-armazem-form">
                    <div className="form-group">
                        <label htmlFor="armazem-nome">
                            Nome do Produto
                        </label>
                        <input id="armazem-nome" ref={name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="armazem-descricao">
                            Descrição do Produto
                        </label>
                        <textarea id="armazem-descricao" ref={description} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="armazem-descricao">
                            Setor do Produto
                        </label>
                        <input type='text' ref={sector} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="armazem-descricao">
                            Valor do Produto
                        </label>
                        <input type='number' ref={value} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="armazem-descricao">
                            Quantidade do Produto
                        </label>
                        <input type='number' ref={quantidade} />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <div className="form-actions">
                        <button type="submit" className="button-criar">Criar</button>
                    </div>
                </form>
            </div>
        </section>
    )
}