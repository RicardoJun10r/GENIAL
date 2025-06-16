import './criar-armazem.css'
import React from "react";
import { UserContext } from "../../hooks/user-hook"
import { addStorageOnUser } from "../../services/api";

export const CriarArmazem = () => {

    const { user } = React.useContext(UserContext);

    const [error, setError] = React.useState('')

    const name = React.useRef();
    const description = React.useRef();

    async function onSubmit(e) {
        e.preventDefault();
        console.log('enviando')
        try {
            const res = await addStorageOnUser(user.id, name.current.value, description.current.value)
            console.log(res)
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }

    return (
        <section className="criar-armazem-container">
            <div className="criar-armazem-header">
                <h1>Criar Armazém</h1>
            </div>
            <div>
                <form onSubmit={onSubmit} className="criar-armazem-form">
                    <div className="form-group">
                        <label htmlFor="armazem-nome">
                            Nome do Armazém
                        </label>
                        <input id="armazem-nome" ref={name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="armazem-descricao">
                            Descrição do Armazém (Opcional)
                        </label>
                        <textarea id="armazem-descricao" ref={description} />
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