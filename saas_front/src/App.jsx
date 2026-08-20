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

function App() {
  return (
    <>
      <AppNavbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
