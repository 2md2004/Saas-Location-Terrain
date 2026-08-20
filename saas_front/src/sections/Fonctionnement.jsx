import Button from 'react-bootstrap/Button';

import '../styles/fonctionnement.css';

function Fonctionnement() {
  return (
    <section id="fonctionnement" className="fonctionnement-section">

      <div className="fonctionnement-container">

        {/* En-tête */}
        <div className="fonctionnement-header">

          <div className="fonctionnement-intro">

            <span className="fonctionnement-intro-line"></span>

            <div className="fonctionnement-intro-text">
              <span>Avec</span>
              <span>Tapou</span>
              <span>Tokhou</span>
            </div>

          </div>

          <h1 className="fonctionnement-title">
            Comment ça
            <span>marche ?</span>
          </h1>

          <div className="fonctionnement-description">

            <p>
              Réserver un terrain n'a jamais été aussi simple.
              <strong> Trouvez, vérifiez et réservez</strong> votre
              terrain en quelques clics.
            </p>

          </div>

        </div>


        {/* Fonctionnement */}
        <div className="fonctionnement-content">

          {/* Pour les joueurs */}
          <div className="fonctionnement-column">

            <h2 className="fonctionnement-block-title">
              Pour les joueurs
            </h2>

            <div className="mini-list">

              <div className="mini-item">

                <i className="bi bi-geo-alt-fill"></i>

                <div>
                  <h3>
                    Choisissez votre ville
                  </h3>

                  <p>
                    Sélectionnez votre ville pour découvrir les
                    terrains disponibles près de chez vous.
                  </p>
                </div>

              </div>


              <div className="mini-item">

                <i className="bi bi-search"></i>

                <div>
                  <h3>
                    Trouvez votre terrain
                  </h3>

                  <p>
                    Consultez les terrains disponibles et choisissez
                    celui qui correspond à vos besoins.
                  </p>
                </div>

              </div>


              <div className="mini-item">

                <i className="bi bi-calendar-check-fill"></i>

                <div>
                  <h3>
                    Vérifiez la disponibilité
                  </h3>

                  <p>
                    Consultez les créneaux disponibles avant de
                    choisir l'horaire de votre match.
                  </p>
                </div>

              </div>


              <div className="mini-item">

                <i className="bi bi-check-circle-fill"></i>

                <div>
                  <h3>
                    Réservez
                  </h3>

                  <p>
                    Choisissez votre créneau et confirmez votre
                    réservation en quelques clics.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* Pour les propriétaires */}
          <div className="fonctionnement-column">

            <h2 className="fonctionnement-block-title">
              Pour les propriétaires de terrain
            </h2>

            <div className="mini-list">

              <div className="mini-item">

                <i className="bi bi-person-plus-fill"></i>

                <div>
                  <h3>
                    Contactez-nous pour avoir un compte
                  </h3>

                  <p>
                    Contactez Tapou Tokhou afin d'obtenir votre
                    compte propriétaire.
                  </p>
                </div>

              </div>


              <div className="mini-item">

                <i className="bi bi-building-fill"></i>

                <div>
                  <h3>
                    Ajoutez votre terrain
                  </h3>

                  <p>
                    Présentez votre terrain avec ses informations,
                    ses tarifs et ses caractéristiques.
                  </p>
                </div>

              </div>


              <div className="mini-item">

                <i className="bi bi-clock-fill"></i>

                <div>
                  <h3>
                    Définissez vos disponibilités
                  </h3>

                  <p>
                    Définissez les jours et horaires pendant
                    lesquels votre terrain peut être réservé.
                  </p>
                </div>

              </div>


              <div className="mini-item">

                <i className="bi bi-calendar-check-fill"></i>

                <div>
                  <h3>
                    Disponibilités mises à jour automatiquement
                  </h3>

                  <p>
                    Lorsqu'un joueur réserve un créneau,
                    celui-ci n'est plus proposé aux autres joueurs.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Conclusion */}
        <div className="fonctionnement-conclusion">

          <p>
            Prêt à trouver votre terrain ? Découvrez les terrains
            disponibles près de chez vous et réservez votre prochain
            match.
          </p>

          <Button
            href="#terrains"
            className="fonctionnement-cta-button"
          >
            <i className="bi bi-search"></i>
            Trouver un terrain
          </Button>

        </div>

      </div>

    </section>
  );
}

export default Fonctionnement;