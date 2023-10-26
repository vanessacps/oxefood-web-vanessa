import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';
import Home from './views/home/Home';
import FormLogin from './views/login/FormLogin';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import { ProtectedRoute } from './views/util/ProtectedRoute';
import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';
import FormCupomDesconto from './views/cupomDesconto/FormCupomDesconto';
import ListCupomDesconto from './views/cupomDesconto/ListCupomDesconto';
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaProduto/ListCategoriaProduto';




function Rotas() {
    return (
        <Routes>
            
            <Route path="/" element={ <FormLogin/> } />

            <Route
                    path="/home"
                    element={
                        //ProtectedRoute - bloqueia e não permite que o usuario entre na tela usando o url.
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                    }
                />
                
                <Route
                    path="/list-cliente"
                    element={
                    <ProtectedRoute>
                        <ListCliente />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-cliente"
                    element={
                    <ProtectedRoute>
                        <FormCliente />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-produto"
                    element={
                    <ProtectedRoute>
                        <ListProduto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/form-entregador"
                    element={
                    <ProtectedRoute>
                        <FormEntregador />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-entregador"
                    element={
                    <ProtectedRoute>
                        <ListEntregador />
                    </ProtectedRoute>
                    }
                />


                <Route
                    path="/form-cupomDesconto"
                    element={
                    <ProtectedRoute>
                        <FormCupomDesconto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-cupomDesconto"
                    element={
                    <ProtectedRoute>
                        <ListCupomDesconto />
                    </ProtectedRoute>
                    }
                />


                <Route
                    path="/form-categoriaProduto"
                    element={
                    <ProtectedRoute>
                        <FormCategoriaProduto />
                    </ProtectedRoute>
                    }
                />

                <Route
                    path="/list-categoriaProduto"
                    element={
                    <ProtectedRoute>
                        <ListCategoriaProduto />
                    </ProtectedRoute>
                    }
                />
               

        </Routes>
    )
}

export default Rotas