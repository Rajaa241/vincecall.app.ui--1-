import React from "react";
import { Route } from "react-router-dom";
import ClippedDrawer from "../../com.vincecall.layout/Layout";
import PrivateRoute from "../../../guards/PrivateRoute";
import Showticket from "../pages/Showticket";
import Createticket from "../pages/Createticket";


export const SUPPORT_ROUTES = [
    <Route path='/support/createticket' element={<PrivateRoute>
        <ClippedDrawer component={Createticket} title="Dashboard"></ClippedDrawer>
    </PrivateRoute>
    }></Route>,
    <Route path='/support/showtickets' element={<PrivateRoute>
        <ClippedDrawer component={Showticket} title="Dashboard"></ClippedDrawer>
    </PrivateRoute>
    }></Route>,
];
