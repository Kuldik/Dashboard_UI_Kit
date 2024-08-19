import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/credit-cards" element={<CreditCards />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/services" element={<Services />} />
        <Route path="/my-privileges" element={<MyPrivileges />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;