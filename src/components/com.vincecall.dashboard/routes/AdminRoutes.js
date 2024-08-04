import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../../../guards/PrivateRoute";
import Layout from "../../com.vincecall.layout/Layout";
import AddUser from "../pages/AddUser";
import ManageUsers from "../pages/ManageUsers";


export const ADMIN_ROUTES = [
    <Route path='/addusers'
        element={
            <PrivateRoute>
                <Layout component={AddUser}></Layout>
            </PrivateRoute>
        }
    ></Route>,
    <Route path='/manageusers'
        element={
            <PrivateRoute>
                <Layout component={ManageUsers}></Layout>
            </PrivateRoute>
        }
    ></Route>,
];