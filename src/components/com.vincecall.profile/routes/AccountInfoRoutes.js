import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../../../guards/PrivateRoute";
import ClippedDrawer from "../../com.vincecall.layout/Layout";
import Globaldocuments from "../pages/ContactList";
import Contactinfo from "../pages/ProfileCard";
import Manageusers from "../pages/Manageusers";
import Createuser from "../pages/Createuser";
import Usercontacts from "../pages/Usercontacts";
import ContactList from "../pages/ContactList";
import Permissions from "../pages/Permissions";


export const ACCOUNTINFO_ROUTES = [
    <Route path='/home/profile' element={
        <PrivateRoute>
            <ClippedDrawer component={ContactList} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    
];
