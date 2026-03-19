import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Layout from '../components/layout';
import Cadastrar from '../pages/Cadastrar/cadastrar';
import Home from '../pages/Home/home';
import Login from '../pages/Login/login';
import Produtos from '../pages/Produto/produtos';
import ProtectedRoute from './protected-route';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Cadastrar />} path="/cadastrar" />

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
          path="/"
        >
          <Route index element={<Home />} />
          <Route element={<Produtos />} path="produtos/:id" />
        </Route>

        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
