import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../../../guards/PrivateRoute";
import ClippedDrawer from "../../com.vincecall.layout/Layout";
import Makepayment from "../pages/Makepayment";
import Invoices from "../pages/Invoices";


export const BILLING_ROUTES = [
    <Route path='/billing/makepayment' element={
        <PrivateRoute>
            <ClippedDrawer component={Makepayment} title="Invoices"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/billing/invoices' element={
        <PrivateRoute>
            <ClippedDrawer component={Invoices} title="Invoices"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
];
