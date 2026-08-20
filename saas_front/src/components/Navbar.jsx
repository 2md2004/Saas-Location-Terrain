import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import '../styles/navbar.css';

import logo from '../assets/logo_tapou_tokhou.png';

const sections = ['accueil', 'terrains', 'partenaire', 'fonctionnement', 'a-propos', 'contact'];

function AppNavbar() {
  const [active, setActive] = useState('accueil');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const navTo = (id) => isHome ? `#${id}` : `/#${id}`;

  return (
    <Navbar expand="lg" className="navbar-tapou" sticky="top">

      <Container fluid className="navbar-container">

        {/* Logo */}
        <div className="navbar-left">

          <Navbar.Brand as={Link} to="/" className="navbar-logo">

            <img
              src={logo}
              alt="Tapou Tokhou"
              className="navbar-logo-image"
            />

            <div className="navbar-brand-text">

              <span className="navbar-brand-name">
                Tapou Tokhou
              </span>

              <span className="navbar-slogan">
                Réserve ton terrain et gagne du temps.
              </span>

            </div>

          </Navbar.Brand>

        </div>

        {/* Menu mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          {/* Menu central */}
          <div className="navbar-center">

            <Nav>

              <Nav.Link
                href={navTo('accueil')}
                className={`navbar-link${active === 'accueil' ? ' active' : ''}`}
              >
                <i className="bi bi-house-door-fill"></i>
                <span>Accueil</span>
              </Nav.Link>

              <Nav.Link
                href={navTo('terrains')}
                className={`navbar-link${active === 'terrains' ? ' active' : ''}`}
              >
                <i className="bi bi-geo-alt-fill"></i>
                <span>Terrains</span>
              </Nav.Link>

              <Nav.Link
                href={navTo('partenaire')}
                className={`navbar-link${active === 'partenaire' ? ' active' : ''}`}
              >
                <i className="bi bi-people-fill"></i>
                <span>Partenaire</span>
              </Nav.Link>

              <Nav.Link
                href={navTo('fonctionnement')}
                className={`navbar-link${active === 'fonctionnement' ? ' active' : ''}`}
              >
               <i className="bi bi-gear-fill"></i>
                <span>Fonctionnement</span>
              </Nav.Link>

              <Nav.Link
                href={navTo('a-propos')}
                className={`navbar-link${active === 'a-propos' ? ' active' : ''}`}
              >
                <i className="bi bi-info-circle-fill"></i>
                <span>À propos</span>
              </Nav.Link>

              <Nav.Link
                href={navTo('contact')}
                className={`navbar-link${active === 'contact' ? ' active' : ''}`}
              >
                <i className="bi bi-telephone-fill"></i>
                <span>Contact</span>
              </Nav.Link>

            </Nav>

          </div>

          {/* Actions */}
          <div className="navbar-right">

            <Link
              to="/login"
              className="btn-connexion"
            >
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Connexion</span>
            </Link>

            <Link
              to="/inscription"
              className="btn-inscription"
            >
              <i className="bi bi-person-plus-fill"></i>
              <span>Inscription</span>
            </Link>

          </div>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
}

export default AppNavbar;
