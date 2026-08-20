import Button from 'react-bootstrap/Button';

import '../styles/home.css';

import heroImage from '../assets/hero.jpeg';

function Home() {
  return (
    <section id="accueil" className="hero-section">
      <div className="hero-container">

        {/* Contenu */}
        <div className="hero-content">

          {/* Introduction */}
          <div className="hero-intro">

            <span className="intro-line"></span>

            <div className="intro-text">
              <span>Avec</span>
              <span>Tapou</span>
              <span>Tokhou</span>
            </div>

          </div>

          {/* Titre */}
          <h1 className="hero-title">

            <span className="title-line title-line-1">
              Réserve ton terrain et
            </span>

            <span className="title-line title-line-2">
              gagne du temps.
            </span>

          </h1>

          {/* Description */}
          <div className="hero-description">

            <p className="description-main">
              Trouve facilement un terrain
              <strong> près de chez toi</strong>,
            </p>

            <p className="description-main">
              consulte sa <strong>disponibilité</strong> et réserve
              <strong> en quelques clics.</strong>
            </p>

          </div>

          {/* Boutons */}
          <div className="hero-buttons">

            <Button
              href="#terrains"
              className="hero-btn-primary"
            >
              <i className="bi bi-search"></i>
              Trouver un terrain
            </Button>

            <Button
              href="#partenaire"
              variant="outline"
              className="hero-btn-secondary"
            >
              <i className="bi bi-people-fill"></i>
              Devenir partenaire
            </Button>

          </div>

          {/* Avantages */}
          <div className="hero-features">

            <div className="hero-feature">
              <i className="bi bi-geo-alt-fill"></i>

              <span>
                Terrains proches
              </span>
            </div>

            <div className="hero-feature">
              <i className="bi bi-calendar-check-fill"></i>

              <span>
                Disponibilité
              </span>
            </div>

            <div className="hero-feature">
              <i className="bi bi-stopwatch-fill"></i>

              <span>
                Réservation rapide
              </span>
            </div>

          </div>

        </div>

        {/* Image */}
        <div className="hero-image-wrapper">

          <div className="hero-image-card">

            <img
              src={heroImage}
              alt="Terrain de football"
              className="hero-image"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;