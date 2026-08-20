import Button from 'react-bootstrap/Button';

import '../styles/partenaire.css';

function Partenaire() {
  return (
    <section id="partenaire" className="partenaire-section">

      <div className="partenaire-container">

        {/* En-tête de section */}
        <div className="partenaire-header">

          <div className="partenaire-intro">
            <span className="partenaire-intro-line"></span>

            <div className="partenaire-intro-text">
              <span>Nos</span>
              <span>partenaires</span>
            </div>
          </div>

          <h2 className="partenaire-section-title">
            Développez votre activité
            <span>avec Tapou Tokhou.</span>
          </h2>

          <div className="partenaire-section-description">

            <p>
              Proposez votre terrain et gagnez en visibilité
              <strong> auprès des joueurs près de chez vous</strong>,
            </p>

            <p>
              gérez vos <strong>disponibilités</strong> et recevez
              <strong> des réservations simplement.</strong>
            </p>

          </div>

        </div>


        {/* Contenu */}
        <div className="partenaire-grid">

          {/* Colonne gauche */}
          <div className="partenaire-col partenaire-col-hero">

            <h3 className="partenaire-title">
              Votre terrain a
              <span>plus de visibilité.</span>
            </h3>

            <p className="partenaire-lead">
              Proposez votre terrain sur Tapou Tokhou, présentez vos
              <strong> disponibilités</strong> et permettez aux joueurs
              de réserver facilement.
            </p>

            <div className="partenaire-button">

              <Button
                href="#contact"
                className="partenaire-btn-primary"
              >
                <i className="bi bi-handshake-fill"></i>
                Devenir partenaire
              </Button>

            </div>

          </div>


          {/* Colonne milieu */}
          <div className="partenaire-col partenaire-col-avantages">

            <h2 className="partenaire-block-title">
              Les avantages
            </h2>

            <div className="avantages-list">

              <div className="avantage-item">

                <i className="bi bi-eye-fill"></i>

                <div>
                  <h3>Plus de visibilité</h3>

                  <p>
                    Votre terrain devient visible par les joueurs
                    à la recherche d'un endroit pour jouer.
                  </p>
                </div>

              </div>


              <div className="avantage-item">

                <i className="bi bi-calendar2-check-fill"></i>

                <div>
                  <h3>Disponibilités gérées</h3>

                  <p>
                    Indiquez vos horaires et créneaux disponibles
                    pour informer facilement les joueurs.
                  </p>
                </div>

              </div>


              <div className="avantage-item">

                <i className="bi bi-phone-fill"></i>

                <div>
                  <h3>Réservations simplifiées</h3>

                  <p>
                    Réduisez les appels grâce aux réservations
                    effectuées directement en ligne.
                  </p>
                </div>

              </div>


              <div className="avantage-item">

                <i className="bi bi-people-fill"></i>

                <div>
                  <h3>Plus de joueurs</h3>

                  <p>
                    Faites découvrir votre terrain à de nouveaux
                    joueurs proches de chez vous.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Colonne droite */}
          <div className="partenaire-col partenaire-col-steps">

            <h2 className="partenaire-block-title">
              Comment devenir partenaire ?
            </h2>

            <div className="steps-list">

              <div className="step-mini">
                <span className="step-mini-number">01</span>
                <p>Nous contacter pour avoir un compte</p>
              </div>

              <div className="step-mini">
                <span className="step-mini-number">02</span>
                <p>Ajoutez votre terrain</p>
              </div>

              <div className="step-mini">
                <span className="step-mini-number">03</span>
                <p>Gestion automatique des disponibilités</p>
              </div>

              <div className="step-mini">
                <span className="step-mini-number">04</span>
                <p>Recevez des réservations</p>
              </div>

            </div>

          </div>

        </div>


        {/* Conclusion */}
        <div className="partenaire-conclusion">

          <p>
            Vous avez un terrain ? Rejoignez Tapou Tokhou et permettez
            à plus de joueurs de découvrir et réserver votre terrain.
          </p>

          <Button
            href="#contact"
            className="partenaire-cta-button"
          >
            <i className="bi bi-person-plus-fill"></i>
            Devenir partenaire
          </Button>

        </div>

      </div>

    </section>
  );
}

export default Partenaire;