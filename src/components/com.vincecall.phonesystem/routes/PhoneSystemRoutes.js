import React from "react";
import { Route } from "react-router-dom";
import ClippedDrawer from "../../com.vincecall.layout/Layout";
import Listofextensions from "../pages/Listofextensions";
import DirectNumberList from "../pages/DirectNumberList";
import Phonestatus from "../pages/Phonestatus";
import Voicemailstatus from "../pages/Voicemailstatus";
import Phonefeatures from "../pages/Phonefeatures";
import Activecalls from "../pages/Activecalls";
import Videoconference from "../pages/Videoconference";
import Blacklistnumbers from "../pages/Blacklistnumbers";
import PrivateRoute from "../../../guards/PrivateRoute";
import InboundCallRecords from "../pages/InboundCallRecords";


export const PHONESYSTEM_ROUTES = [
    <Route path='/phonesystem/listofextensions' element={
        <PrivateRoute>
            <ClippedDrawer component={Listofextensions} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/DirectNumberList/inboundcallingreports' element={
        <PrivateRoute>
            <ClippedDrawer component={InboundCallRecords} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/DirectNumberList' element={
        <PrivateRoute>
            <ClippedDrawer component={DirectNumberList} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/phonestatus' element={
        <PrivateRoute>
            <ClippedDrawer component={Phonestatus} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/voicemailstatus' element={
        <PrivateRoute>
            <ClippedDrawer component={Voicemailstatus} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/phonefeaturescode' element={
        <PrivateRoute>
            <ClippedDrawer component={Phonefeatures} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/activecalls' element={
        <PrivateRoute>
            <ClippedDrawer component={Activecalls} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/videoconference' element={
        <PrivateRoute>
            <ClippedDrawer component={Videoconference} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>,
    <Route path='/phonesystem/blacklistnumbers' element={
        <PrivateRoute>
            <ClippedDrawer component={Blacklistnumbers} title="Dashboard"></ClippedDrawer>
        </PrivateRoute>
    }></Route>
];
