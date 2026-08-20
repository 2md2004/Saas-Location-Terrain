import '../styles/footer.css';
import logo from '../assets/logo_tapou_tokhou.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-grid">

          {/* Présentation */}
          <div className="footer-brand">

            <div className="footer-logo">
              <img src={logo} alt="Tapou Tokhou" className="footer-logo-img" />
              <h2>
                Tapou <span>Tokhou</span>
              </h2>
            </div>

            <p>
              Trouvez facilement un terrain, consultez sa disponibilité
              et réservez en quelques clics.
            </p>

          </div>


          {/* Liens rapides */}
          <div className="footer-column">

            <h3>
              Liens rapides
            </h3>

            <ul>

              <li>
                <a href="#accueil">
                  Accueil
                </a>
              </li>

              <li>
                <a href="#terrains">
                  Terrains
                </a>
              </li>

              <li>
                <a href="#partenaire">
                  Partenaire
                </a>
              </li>

              <li>
                <a href="#fonctionnement">
                  Fonctionnement
                </a>
              </li>

              <li>
                <a href="#a-propos">
                  À propos
                </a>
              </li>

              <li>
                <a href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>


          {/* Réseaux sociaux */}
          <div className="footer-column">

            <h3>
              Réseaux sociaux
            </h3>

            <div className="footer-socials">

              <a
                href="#"
                className="footer-social whatsapp"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>

              <a
                href="#"
                className="footer-social tiktok"
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok"></i>
                <span>TikTok</span>
              </a>

            </div>

          </div>


          {/* Contact */}
          <div className="footer-column">

            <h3>
              Contact
            </h3>

            <div className="footer-contact">

              <a href="tel:+221776845656">
                <i className="bi bi-telephone-fill"></i>
                77 684 56 56
              </a>

              <a href="tel:+221788213035">
                <i className="bi bi-telephone-fill"></i>
                78 821 30 35
              </a>

              <a href="mailto:namoragroup821@gmail.com">
                <i className="bi bi-envelope-fill"></i>
                namoragroup821@gmail.com
              </a>

            </div>

          </div>

        </div>


        {/* Bas du footer */}
        <div className="footer-bottom">

          <p>
            © {currentYear} - Tapou Tokhou. Tous droits réservés.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;