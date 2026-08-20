import Button from 'react-bootstrap/Button';

import '../styles/a-propos.css';

function APropos() {
  return (
    <section id="a-propos" className="apropos-section">

      <div className="apropos-container">

        {/* En-tête */}
        <div className="apropos-header">

          <div className="apropos-intro">

            <span className="apropos-intro-line"></span>

            <div className="apropos-intro-text">
              <span>À propos de</span>
              <span>Tapou Tokhou</span>
            </div>

          </div>

          <h1 className="apropos-title">
            Réserver un terrain,
            <span>simplement.</span>
          </h1>

          <div className="apropos-description">

            <p>
              Tapou Tokhou est une plateforme pensée pour faciliter
              la recherche et la réservation de terrains de sport
              <strong> près de chez vous.</strong>
            </p>

          </div>

        </div>


        {/* Contenu principal */}
        <div className="apropos-content">

          {/* Notre objectif */}
          <div className="apropos-card">

            <div className="apropos-card-icon">
              <i className="bi bi-bullseye"></i>
            </div>

            <div>

              <h2>
                Notre objectif
              </h2>

              <p>
                Notre objectif est de rendre la réservation de terrains
                plus simple et plus rapide. Plus besoin de multiplier
                les appels pour savoir si un terrain est disponible.
              </p>

            </div>

          </div>


          {/* Notre vision */}
          <div className="apropos-card">

            <div className="apropos-card-icon">
              <i className="bi bi-eye-fill"></i>
            </div>

            <div>

              <h2>
                Notre vision
              </h2>

              <p>
                Nous voulons créer un espace où les joueurs peuvent
                facilement trouver un terrain, consulter ses
                disponibilités et réserver leur créneau en quelques clics.
              </p>

            </div>

          </div>


          {/* Pour les joueurs */}
          <div className="apropos-card">

            <div className="apropos-card-icon">
              <i className="bi bi-people-fill"></i>
            </div>

            <div>

              <h2>
                Pour les joueurs
              </h2>

              <p>
                Trouvez rapidement un terrain proche de chez vous,
                consultez les horaires disponibles et réservez
                directement le créneau qui vous convient.
              </p>

            </div>

          </div>


          {/* Pour les propriétaires */}
          <div className="apropos-card">

            <div className="apropos-card-icon">
              <i className="bi bi-building-fill"></i>
            </div>

            <div>

              <h2>
                Pour les propriétaires
              </h2>

              <p>
                Les propriétaires peuvent présenter leur terrain,
                définir leurs disponibilités et recevoir des
                réservations plus facilement.
              </p>

            </div>

          </div>

        </div>


        {/* Valeurs */}
        <div className="apropos-values">

          <div className="apropos-values-header">

            <span>
              Notre engagement
            </span>

            <h2>
              Une plateforme pensée pour
              <strong> simplifier.</strong>
            </h2>

          </div>


          <div className="values-grid">

            <div className="value-item">

              <i className="bi bi-lightning-fill"></i>

              <div>

                <h3>
                  Simplicité
                </h3>

                <p>
                  Une expérience claire et facile à utiliser.
                </p>

              </div>

            </div>


            <div className="value-item">

              <i className="bi bi-clock-fill"></i>

              <div>

                <h3>
                  Gain de temps
                </h3>

                <p>
                  Trouvez et réservez votre terrain rapidement.
                </p>

              </div>

            </div>


            <div className="value-item">

              <i className="bi bi-check-circle-fill"></i>

              <div>

                <h3>
                  Fiabilité
                </h3>

                <p>
                  Des disponibilités mises à jour après chaque réservation.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Conclusion */}
        <div className="apropos-conclusion">

          <div>

            <h2>
              Prêt à trouver votre terrain ?
            </h2>

            <p>
              Découvrez les terrains disponibles près de chez vous
              et réservez votre prochain match.
            </p>

          </div>

          <Button
            href="#terrains"
            className="apropos-button"
          >
            <i className="bi bi-search"></i>
            Trouver un terrain
          </Button>

        </div>

      </div>

    </section>
  );
}

export default APropos;