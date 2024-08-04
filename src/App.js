import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { AUTH_ROUTES } from './components/com.vincecall.auth/routes/AuthRoutes';
import { PHONESYSTEM_ROUTES } from './components/com.vincecall.phonesystem/routes/PhoneSystemRoutes';
import { ACCOUNTINFO_ROUTES } from './components/com.vincecall.accountinfo/routes/AccountInfoRoutes';
import { CALLREPORTS_ROUTES } from './components/com.vincecall.callreports/routes/CallReportsRoutes';
import { SUPPORT_ROUTES } from './components/com.vincecall.support/routes/SuppportRoutes';
import { HOME_ROUTES } from './components/com.vincecall.home/routes/HomeRoutes';
import { ADMIN_ROUTES } from './components/com.vincecall.dashboard/routes/AdminRoutes';
import { QR_ROUTES } from './components/com.vincecall.qrcodes/routes/QrRoutes';
import { BILLING_ROUTES } from './components/com.vincecall.billing/routes/BillingRoutes';

function App() {
  return (

    <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
      <BrowserRouter>
        <Routes>
          {AUTH_ROUTES}
          {HOME_ROUTES}
          {PHONESYSTEM_ROUTES}
          {ACCOUNTINFO_ROUTES}
          {CALLREPORTS_ROUTES}
          {SUPPORT_ROUTES}
          {ADMIN_ROUTES}
          {BILLING_ROUTES}
          {QR_ROUTES}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
