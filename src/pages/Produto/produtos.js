import "./produtos.css"
import React from "react";
import { Link, useParams } from "react-router";
import { UserContext } from "../../hooks/user-hook";
import { getStorage } from "../../services/api";

const Produtos = () => {

    const params = useParams();
    const { user } = React.useContext(UserContext);
    const [storage, setStorage] = React.useState({});
    React.useEffect(() => {
        const fetchProducts = async () => {
            const res = await getStorage(user.email, params.name);
            console.log('res: ', res)
            return res;
        }

        setStorage(fetchProducts());
    }, [])
    console.log(params.name)
    return (
        <div className="produtos-container">
            <div className="produtos-header">
                <h1>
                    Produtos
                </h1>
                <Link style={{backgroundColor: 'white', padding: '8px 4px 8px 4px', borderRadius: '5px', textDecoration: 'none', color: 'black'}} to={'/'}>Voltar</Link>
            </div>
            <div className="produtos-content">
                <div>
                    <h1>{storage.name}</h1>
                    <p>{storage.description}</p>
                </div>
                <div>
                    <table>
                        <thead>
                            <th>
                                ID
                            </th>
                            <th>
                                NOME
                            </th>
                            <th>
                                DESCRIÇÃO
                            </th>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Produtos;