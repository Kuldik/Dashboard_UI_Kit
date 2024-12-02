import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Components/dashboard-layout/pages/Dashboard/Dashboard';
import Transactions from './Components/dashboard-layout/pages/Transactions/Transactions';
import Accounts from './Components/dashboard-layout/pages/Accounts/Accounts';
import Investments from './Components/dashboard-layout/pages/Investments/Investments';
import CreditCards from './Components/dashboard-layout/pages/CreditCards/CreditCard';
import Loans from './Components/dashboard-layout/pages/Loans/Loans';
import Services from './Components/dashboard-layout/pages/Services/Services';
import MyPrivileges from './Components/dashboard-layout/pages/MyPrivileges/MyPrivileges';
import Settings from './Components/dashboard-layout/pages/Settings/Settings';
import { DashboardLayout } from './Components/dashboard-layout/DashboardLayout';
/* eslint-disable */
// @ts-ignore
import PageTransition from './Components/PageTransition/PageTransition';


const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            }
          />
          <Route
            path="/transactions"
            element={
              <PageTransition>
                <Transactions />
              </PageTransition>
            }
          />
          <Route
            path="/accounts"
            element={
              <PageTransition>
                <Accounts />
              </PageTransition>
            }
          />
          <Route
            path="/investments"
            element={
              <PageTransition>
                <Investments />
              </PageTransition>
            }
          />
          <Route
            path="/credit-cards"
            element={
              <PageTransition>
                <CreditCards />
              </PageTransition>
            }
          />
          <Route
            path="/loans"
            element={
              <PageTransition>
                <Loans />
              </PageTransition>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransition>
                <Services />
              </PageTransition>
            }
          />
          <Route
            path="/my-privileges"
            element={
              <PageTransition>
                <MyPrivileges />
              </PageTransition>
            }
          />
          <Route
            path="/settings"
            element={
              <PageTransition>
                <Settings />
              </PageTransition>
            }
          />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;