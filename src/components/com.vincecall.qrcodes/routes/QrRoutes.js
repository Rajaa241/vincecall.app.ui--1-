import React from "react";
import { Route } from "react-router-dom";
import ClippedDrawer from "../../com.vincecall.layout/Layout";
import PrivateRoute from "../../../guards/PrivateRoute";
import qrcodes from "./qrcodes";


export const QR_ROUTES = [
    <Route path='/qrcodes' element={
        <PrivateRoute>
            <ClippedDrawer component={qrcodes} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,

];
    