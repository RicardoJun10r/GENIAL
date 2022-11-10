import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login/login";
import Cadastrar from "../pages/Cadastrar/cadastrar";
import Home from "../pages/Home/home";
import Produtos from "../pages/Produto/produtos";
import Conteudo from "../pages/Conteudo/conteudo";
import App from "../pages/TesteTabela/App";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/' exact />
                <Route element={<Cadastrar />} path='/cadastrar'/>
                <Route element={<Home />} path='/home' exact />
                <Route element={<Produtos />} path='/produtos' exact />
                <Route element={<Conteudo />} path='/conteudo' exact />
                <Route element={<App />} path='/app' exact />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;