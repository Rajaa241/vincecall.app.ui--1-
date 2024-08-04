import React from "react";
import { Route } from "react-router-dom";

const SigninComponent = React.lazy(() => import("../pages/Signin"));

export const AUTH_ROUTES = [
    <Route index element={<SigninComponent />}></Route>,
    <Route path="/signin" element={<SigninComponent />}></Route>,
];
