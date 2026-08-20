import { Link } from 'react-router-dom';

import '../styles/login.css';

import forgotImg from '../assets/Forgot password-bro.png';
import logo from '../assets/logo_tapou_tokhou.png';

function ForgotPassword() {

  return (
    <div className="loginPage">

      <div className="loginCard">

        <div className="loginLeftPanel">

          <div className="illustrationSection">

            <img
              src={forgotImg}
              alt="Mot de passe oublié"
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
                Mot de passe oublié ?
              </h2>

              <p className="loginSubtitle">
                Entrez votre email ou votre numéro de téléphone
                pour réinitialiser votre mot de passe.
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

              <button
                type="submit"
                className="loginButton"
              >
                <i className="bi bi-send-fill"></i>
                Réinitialiser le mot de passe
              </button>

            </form>

            <div className="loginRegister">

              <p>
                Vous vous souvenez de votre mot de passe ?
              </p>

              <Link to="/login">
                Se connecter
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;