import "./produtos.css"
import React from "react";
import { Link, useParams } from "react-router";
import { UserContext } from "../../hooks/user-hook";
import { getStorage } from "../../services/api";

const Produtos = () => {

    const params = useParams();
    const { user } = React.useContext(UserContext);
    const [storage, setStorage] = React.useState([]);
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
                <Link to={'/'}>Voltar</Link>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Produtos;