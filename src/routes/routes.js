import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";

function Rotas() {
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Login />} path='/' exact />
        </Routes>
        </BrowserRouter>
    )

}

export default Rotas;