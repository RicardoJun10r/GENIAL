import { Route, Routes, BrowserRouter } from "react-router";

import Login from "../pages/Login/login";
import Cadastrar from "../pages/Cadastrar/cadastrar";
import Home from "../pages/Home/home";
import Produtos from "../pages/Produto/produtos";
import Layout from "../components/layout";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/login' />
                <Route element={<Cadastrar />} path='/cadastrar' />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<Produtos />} path='produtos/:name' />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;