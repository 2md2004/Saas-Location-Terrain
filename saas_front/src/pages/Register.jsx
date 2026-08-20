import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/register.css';

import registerImg from '../assets/sign_up.png';
import logo from '../assets/logo_tapou_tokhou.png';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="registerPage">

      <div className="registerCard">

        <div className="registerLeftPanel">

          <div className="registerIllustrationSection">

            <img
              src={registerImg}
              alt="Créer un compte"
              className="registerIllustration"
            />

          </div>

        </div>

        <div className="registerFormSide">

          <div className="registerFormContainer">

            <div className="registerHeader">

              <img
                src={logo}
                alt="Tapou Tokhou"
                className="registerLogo"
              />

              <h2 className="registerBrand">
                Créer un compte
              </h2>

              <p className="registerSubtitle">
                Créez votre compte joueur pour réserver
                facilement votre terrain.
              </p>

            </div>

            <form className="registerForm">

              <div className="registerRow">

                <div className="registerField">

                  <label className="registerLabel">
                    Prénom
                  </label>

                  <div className="registerInputGroup">

                    <span className="registerInputIcon">
                      <i className="bi bi-person-fill"></i>
                    </span>

                    <input
                      type="text"
                      className="registerInput"
                      placeholder="Votre prénom"
                      autoComplete="given-name"
                    />

                  </div>

                </div>

                <div className="registerField">

                  <label className="registerLabel">
                    Nom
                  </label>

                  <div className="registerInputGroup">

                    <span className="registerInputIcon">
                      <i className="bi bi-person-fill"></i>
                    </span>

                    <input
                      type="text"
                      className="registerInput"
                      placeholder="Votre nom"
                      autoComplete="family-name"
                    />

                  </div>

                </div>

              </div>

              <div className="registerField">

                <label className="registerLabel">
                  Sexe
                </label>

                <div className="registerInputGroup">

                  <span className="registerInputIcon">
                    <i className="bi bi-gender-ambiguous"></i>
                  </span>

                  <select className="registerInput registerSelect">

                    <option value="">
                      Sélectionnez votre sexe
                    </option>

                    <option value="homme">
                      Homme
                    </option>

                    <option value="femme">
                      Femme
                    </option>

                  </select>

                </div>

              </div>

              <div className="registerField">

                <label className="registerLabel">
                  Email ou numéro de téléphone
                </label>

                <div className="registerInputGroup">

                  <span className="registerInputIcon">
                    <i className="bi bi-envelope-fill"></i>
                  </span>

                  <input
                    type="text"
                    className="registerInput"
                    placeholder="Email ou 77 000 00 00"
                    autoComplete="username"
                  />

                </div>

              </div>

              <div className="registerField">

                <label className="registerLabel">
                  Mot de passe
                </label>

                <div className="registerInputGroup">

                  <span className="registerInputIcon">
                    <i className="bi bi-lock-fill"></i>
                  </span>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="registerInput"
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="registerEyeButton"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    <i
                      className={`bi ${
                        showPassword
                          ? 'bi-eye-slash'
                          : 'bi-eye'
                      }`}
                    ></i>
                  </button>

                </div>

              </div>

              <div className="registerField">

                <label className="registerLabel">
                  Confirmer le mot de passe
                </label>

                <div className="registerInputGroup">

                  <span className="registerInputIcon">
                    <i className="bi bi-shield-lock-fill"></i>
                  </span>

                  <input
                    type={
                      showConfirmPassword
                        ? 'text'
                        : 'password'
                    }
                    className="registerInput"
                    placeholder="••••••••"
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="registerEyeButton"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  >
                    <i
                      className={`bi ${
                        showConfirmPassword
                          ? 'bi-eye-slash'
                          : 'bi-eye'
                      }`}
                    ></i>
                  </button>

                </div>

              </div>

              <button
                type="submit"
                className="registerButton"
              >
                <i className="bi bi-person-plus-fill"></i>
                Créer mon compte
              </button>

            </form>

            <div className="registerDivider">
              <span>OU</span>
            </div>

            <button
              type="button"
              className="googleButton"
            >

              <svg
                className="googleIcon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M21.35 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h5.22a4.46 4.46 0 0 1-1.94 2.93v2.44h3.14c1.84-1.69 2.93-4.18 2.93-7.4z"
                />

                <path
                  fill="#34A853"
                  d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.44c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.52A9.74 9.74 0 0 0 12 21.5z"
                />

                <path
                  fill="#FBBC05"
                  d="M6.54 13.61A5.85 5.85 0 0 1 6.23 12c0-.56.1-1.1.31-1.61V7.87H3.29A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.38l3.25-2.77z"
                />

                <path
                  fill="#EA4335"
                  d="M12 6.36c1.43 0 2.72.49 3.74 1.46l2.8-2.8C16.83 3.48 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.71 5.37l3.25 2.52C7.31 8.08 9.46 6.36 12 6.36z"
                />
              </svg>

              Continuer avec Google

            </button>

            <div className="registerLogin">

              <p>
                Vous avez un compte ?
              </p>

              <Link to="/login">
                Connectez-vous ici
              </Link>

            </div>

            <div className="registerOwner">

              <div className="registerOwnerIcon">
                <i className="bi bi-building"></i>
              </div>

              <div>

                <h3>
                  Vous êtes propriétaire d'un terrain ?
                </h3>

                <p>
                  La création de compte propriétaire
                  se fait directement avec notre équipe.
                </p>

                <Link to="/contact">
                  Nous contacter
                  <i className="bi bi-arrow-right"></i>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;