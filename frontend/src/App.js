import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import ChooseLogin from './pages/auth/ChooseLogin';
import ChooseRegister from './pages/auth/ChooseRegister';
import Login from './pages/auth/Login';
import RegisterAssociate from './pages/auth/RegisterAssociate';
import RegisterPartner from './pages/auth/RegisterPartner'; 
import PartnerDashboard from './pages/partner/PartnerDashboard';
import AssociateDashboard from './pages/associate/AssociateDashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    // Logout automático ao sair do sistema ou fechar o navegador
    const handleUnload = () => {
      localStorage.removeItem('token');
    };
    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirecionamento após login */}
        <Route path="/" element={isLoggedIn ? <Navigate to="/associate/dashboard" /> : <LandingPage />} />
        <Route path="/choose-login" element={<ChooseLogin />} />
        <Route path="/choose-register" element={<ChooseRegister />} />
        <Route path="/login/associate" element={<Login userType="associate" />} />
        <Route path="/login/partner" element={<Login userType="partner" />} />
        <Route path="/register/associate" element={<RegisterAssociate />} />
        <Route path="/register/partner" element={<RegisterPartner />} />

        {/* Rotas protegidas */}
        <Route path="/partner" element={<PrivateRoute />}>
          <Route path="dashboard" element={<PartnerDashboard />} />
        </Route>
        <Route path="/associate" element={<PrivateRoute />}>
          <Route path="dashboard" element={<AssociateDashboard />} />
        </Route>

        {/* Rota de logout */}
        <Route path="/logout" element={<Logout />} />

        {/* Redirecionamento para dashboard se logado, caso contrário para login */}
        <Route path="*" element={isLoggedIn ? <Navigate to="/associate/dashboard" /> : <Navigate to="/choose-login" />} />
      </Routes>
    </Router>
  );
}

// Componente de Logout
const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('token'); // Remove o token do localStorage
  }, []);

  return <Navigate to="/choose-login" />;
};

export default App;
