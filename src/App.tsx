import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PurchaseProvider } from './context/PurchaseContext';
import HomePage from './pages/HomePage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import BillingPage from './pages/BillingPage';

function App() {
  return (
    <PurchaseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="billing" element={<BillingPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </PurchaseProvider>
  );
}

export default App;
