import Button from 'react-bootstrap/Button';

import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        <div className="contact-grid">

          {/* Colonne gauche */}
          <div className="contact-info">

            <div className="contact-intro">

              <span className="contact-intro-line"></span>

              <div className="contact-intro-text">
                <span>Nous</span>
                <span>contacter</span>
              </div>

            </div>

            <h1 className="contact-title">
              Une question ?
              <span>Contactez-nous.</span>
            </h1>

            <p className="contact-description">
              Vous avez une question, besoin d'informations ou
              souhaitez en savoir plus sur Tapou Tokhou ?
              <strong> Notre équipe est à votre écoute.</strong>
            </p>

            {/* Informations */}
            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>

                <div>
                  <span className="contact-detail-label">
                    Téléphone
                  </span>

                  <a href="tel:+221776845656">
                    77 684 56 56
                  </a>

                  <a href="tel:+221788213035">
                    78 821 30 35
                  </a>
                </div>

              </div>


              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>

                <div>
                  <span className="contact-detail-label">
                    Email
                  </span>

                  <a href="mailto:namoragroup821@gmail.com">
                    namoragroup821@gmail.com
                  </a>
                </div>

              </div>

            </div>

          </div>


          {/* Formulaire */}
          <div className="contact-form-card">

            <div className="contact-form-header">

              <h2>
                Envoyez-nous un message
              </h2>

              <p>
                Remplissez le formulaire et nous vous répondrons
                dès que possible.
              </p>

            </div>


            <form className="contact-form">

              {/* Prénom + Nom */}
              <div className="contact-form-row">

                <div className="contact-form-group">

                  <label htmlFor="prenom">
                    Prénom
                  </label>

                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    placeholder="Votre prénom"
                  />

                </div>


                <div className="contact-form-group">

                  <label htmlFor="nom">
                    Nom
                  </label>

                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Votre nom"
                  />

                </div>

              </div>


              {/* Téléphone */}
              <div className="contact-form-group">

                <label htmlFor="telephone">
                  Numéro de téléphone
                </label>

                <div className="contact-input-wrapper">

                  <i className="bi bi-telephone"></i>

                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    placeholder="Votre numéro de téléphone"
                  />

                </div>

              </div>


              {/* Message */}
              <div className="contact-form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Écrivez votre message..."
                ></textarea>

              </div>


              {/* Bouton */}
              <Button
                type="submit"
                className="contact-submit-button"
              >
                <i className="bi bi-send-fill"></i>
                Envoyer le message
              </Button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;