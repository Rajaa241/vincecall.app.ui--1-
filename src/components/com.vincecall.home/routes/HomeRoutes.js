import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../../../guards/PrivateRoute";
import Layout from "../../com.vincecall.layout/Layout";
import { HOME_ROUTE_PATH } from "../constants/constants";
import Dashboard from "../../com.vincecall.dashboard/pages/Dashboard";


export const HOME_ROUTES = [
    <Route path='/dashboard'
        element={
            <PrivateRoute>
                <Layout component={Dashboard}></Layout>
            </PrivateRoute>
        }
    ></Route>
];
