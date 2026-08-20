import { Routes, Route } from 'react-router-dom';

import AppNavbar from './components/Navbar';
import Home from './sections/Home';
import Terrains from './sections/Terrains';
import Partenaire from './sections/Partenaire';
import Fonctionnement from './sections/Fonctionnement';
import Apropos from './sections/Apropos';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';

import DashboardLayout from './layouts/DashboardLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUtilisateurs from './pages/admin/Utilisateurs';
import AdminTerrains from './pages/admin/Terrains';
import AdminPaiements from './pages/admin/Paiements';
import AdminRapports from './pages/admin/Rapports';
import AdminNotifications from './pages/admin/Notifications';
import ChangePassword from './pages/ChangePassword';

function HomePage() {
  return (
    <>
      <Home />
      <Terrains />
      <Partenaire />
      <Fonctionnement />
      <Apropos />
      <Contact />
      <Footer />
    </>
  );
}

/* Layout du site vitrine (navbar publique + pages publiques) */
function PublicLayout({ children }) {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
    </>
  );
}

function App() {
  return (
    <Routes>

      {/* Site vitrine + auth — garde AppNavbar */}
      <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
      <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
      <Route path="/forgot-password" element={<PublicLayout><ForgotPassword /></PublicLayout>} />
      <Route path="/inscription" element={<PublicLayout><Register /></PublicLayout>} />
      <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />

      {/* Espace admin — sa propre Sidebar + Navbar, pas celles du site vitrine */}
      <Route path="/admin" element={<DashboardLayout role="admin" />}>
        <Route index element={<AdminDashboard />} />
        <Route path="utilisateurs" element={<AdminUtilisateurs />} />
        <Route path="terrains" element={<AdminTerrains />} />
        <Route path="paiements" element={<AdminPaiements />} />
        <Route path="rapports" element={<AdminRapports />} />
        <Route path="notifications" element={<AdminNotifications />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>

    </Routes>
  );
}

export default App;