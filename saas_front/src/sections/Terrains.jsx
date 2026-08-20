import '../styles/terrains.css';

function Terrains() {
  return (
    <section id="terrains" className="terrains-section">

      <div className="terrains-container">

        {/* Introduction + Filtre */}
        <div className="terrains-top">

          <div className="terrains-header">

            <div className="terrains-intro">
              <span className="terrains-intro-line"></span>

              <div className="terrains-intro-text">
                <span>Nos</span>
                <span>terrains</span>
              </div>
            </div>

          <h2>
            Trouve facilement
            <span> un terrain</span>
          </h2>

            <div className="terrains-description">

              <p>
                Choisis ta ville et trouve facilement un terrain
                <strong> près de chez toi</strong>,
              </p>

              <p>
                consulte sa <strong>disponibilité</strong> et réserve
                <strong> en quelques clics.</strong>
              </p>

            </div>

          </div>

          {/* Filtre */}
          <div className="terrains-filter">

            <span className="terrains-filter-label">
              Filtrer par ville
            </span>

            <div className="select-wrapper">

              <i className="bi bi-geo-alt-fill select-icon"></i>

              <select id="ville" defaultValue="Medina">

                <option value="Medina">
                  Médina
                </option>

                <option value="Keur Massar">
                  Keur Massar
                </option>

              </select>

              <i className="bi bi-chevron-down select-chevron"></i>

            </div>

          </div>

        </div>

        {/* Résultats */}
        <div className="terrains-result">

          <div className="result-header">

            <h3>
              Terrains à Médina
            </h3>

            <span>
              3 terrains
            </span>

          </div>

          {/* Cartes statiques */}
          <div className="terrains-grid">

            <div className="terrain-card">

              <div className="terrain-placeholder">
                <i className="bi bi-image"></i>
              </div>

              <div className="terrain-card-content">

                <h4>
                  Terrain de Médina
                </h4>

                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  Médina
                </p>

                <div className="terrain-info">

                  <span>
                    <i className="bi bi-star-fill"></i>
                    4.8
                  </span>

                  <span className="available">
                    Disponible
                  </span>

                </div>

                <button className="terrain-button">
                  Voir le terrain
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

            </div>

            <div className="terrain-card">

              <div className="terrain-placeholder">
                <i className="bi bi-image"></i>
              </div>

              <div className="terrain-card-content">

                <h4>
                  Foot Center Médina
                </h4>

                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  Médina
                </p>

                <div className="terrain-info">

                  <span>
                    <i className="bi bi-star-fill"></i>
                    4.6
                  </span>

                  <span className="available">
                    Disponible
                  </span>

                </div>

                <button className="terrain-button">
                  Voir le terrain
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

            </div>

            <div className="terrain-card">

              <div className="terrain-placeholder">
                <i className="bi bi-image"></i>
              </div>

              <div className="terrain-card-content">

                <h4>
                  City Foot Médina
                </h4>

                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  Médina
                </p>

                <div className="terrain-info">

                  <span>
                    <i className="bi bi-star-fill"></i>
                    4.7
                  </span>

                  <span className="available">
                    Disponible
                  </span>

                </div>

                <button className="terrain-button">
                  Voir le terrain
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Terrains;