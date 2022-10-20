import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login/login";
import Cadastrar from "../pages/Cadastrar/cadastrar";
import Home from "../pages/Home/home";
<<<<<<< HEAD
import Conteudo from "../pages/Conteudo/conteudo";
=======
import Produtos from "../pages/Produto/produtos";
>>>>>>> 8dcdc60b (att)

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path='/' exact />
                <Route element={<Cadastrar />} path='/cadastrar'/>
                <Route element={<Home />} path='/home' exact />
<<<<<<< HEAD
                <Route element={<Conteudo />} path='/conteudo' exact />
=======
                <Route element={<Produtos />} path='/produtos' exact />
>>>>>>> 8dcdc60b (att)
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;