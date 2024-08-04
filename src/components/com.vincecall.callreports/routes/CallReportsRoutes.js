import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../../../guards/PrivateRoute";
import ClippedDrawer from "../../com.vincecall.layout/Layout";
import CDRs from "../pages/CDRs";


export const CALLREPORTS_ROUTES = [
    <Route path='/callreports/cdrs' element={
        <PrivateRoute>
            <ClippedDrawer component={CDRs} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>
];
    