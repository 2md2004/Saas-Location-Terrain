import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/login.css';

import loginImg from '../assets/login.png';
import logo from '../assets/logo_tapou_tokhou.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="loginPage">

      <div className="loginCard">

        <div className="loginLeftPanel">

          <div className="illustrationSection">

            <img
              src={loginImg}
              alt="Illustration connexion"
              className="illustration"
            />

          </div>

        </div>

        <div className="loginFormSide">

          <div className="loginFormContainer">

            <div className="loginHeader">

              <img
                src={logo}
                alt="Tapou Tokhou"
                className="loginLogo"
              />

              <h2 className="loginBrand">
                Bienvenue dans Tapou Tokhou
              </h2>

              <p className="loginSubtitle">
                Connectez-vous à votre compte pour continuer.
              </p>

            </div>

            <form className="loginForm">

              <div className="loginField">

                <label className="loginLabel">
                  Email ou numéro de téléphone
                </label>

                <div className="loginInputGroup">

                  <span className="loginInputGroupText">
                    <i className="bi bi-person-fill"></i>
                  </span>

                  <input
                    type="text"
                    className="loginInput"
                    placeholder="Email ou 77 000 00 00"
                    autoComplete="username"
                  />

                </div>

              </div>

              <div className="loginField">

                <label className="loginLabel">
                  Mot de passe
                </label>

                <div className="loginInputGroup">

                  <span className="loginInputGroupText">
                    <i className="bi bi-lock-fill"></i>
                  </span>

                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="loginInput"
                    placeholder="••••••••"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="loginInputGroupText loginEyeBtn"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? 'Masquer le mot de passe'
                        : 'Afficher le mot de passe'
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

              <div className="loginForgotRow">

                <Link
                  to="/forgot-password"
                  className="loginForgot"
                >
                  Mot de passe oublié ?
                </Link>

              </div>

              <button
                type="submit"
                className="loginButton"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                Se connecter
              </button>

            </form>

            <div className="loginDivider">
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

            <div className="loginRegister">

              <p>
                Vous n'avez pas de compte ?
              </p>

              <Link to="/inscription">
                Créer un compte
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;