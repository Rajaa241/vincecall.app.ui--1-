import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../../../guards/PrivateRoute";
import ClippedDrawer from "../../com.vincecall.layout/Layout";
import Globaldocuments from "../pages/ContactList";
import Contactinfo from "../pages/Contactinfo";
import Manageusers from "../pages/Manageusers";
import Createuser from "../pages/Createuser";
import Usercontacts from "../pages/Usercontacts";
import ContactList from "../pages/ContactList";
import Permissions from "../pages/Permissions";


export const ACCOUNTINFO_ROUTES = [
    <Route path='/accountinfo/contactlist' element={
        <PrivateRoute>
            <ClippedDrawer component={ContactList} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/accountinfo/contactinfo' element={
        <PrivateRoute>
            <ClippedDrawer component={Contactinfo} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/accountinfo/manageusers' element={
        <PrivateRoute>
            <ClippedDrawer component={Manageusers} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/accountinfo/manageusers/permissions' element={
        <PrivateRoute>
            <ClippedDrawer component={Permissions} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/accountinfo/manageusers/create' element={
        <PrivateRoute>
            <ClippedDrawer component={Createuser} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/accountinfo/usercontacts' element={
        <PrivateRoute>
            <ClippedDrawer component={Usercontacts} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>
];
