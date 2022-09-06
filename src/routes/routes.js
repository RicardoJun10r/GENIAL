import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Cadastrar from "../pages/Cadastrar";
import Home from "../pages/Home/home";
import Expandido from "../pages/Expandido/expandido";

function Rotas() {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Login />} path='/' exact />
            <Route element={<Cadastrar />} path='/cadastrar'/>
            <Route element={<Home />} path='/home' exact />
            <Route element={<Expandido />} path='/expandido' />
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;