import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Cadastrar from "../pages/Cadastrar";
import Home from "../pages/Home/home";

function Rotas() {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Login />} path='/' exact />
            <Route element={<Cadastrar />} path='/cadastrar'/>
            <Route element={<Home />} path='/home' exact />
        </Routes>
        </BrowserRouter>
    )

}

export default Rotas;