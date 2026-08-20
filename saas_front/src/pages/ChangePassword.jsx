import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/login.css';

import changePasswordImg from '../assets/change_password.png';
import logo from '../assets/logo_tapou_tokhou.png';

function ChangePassword() {
  const [ancien, setAncien] = useState('');
  const [nouveau, setNouveau] = useState('');
  const [confirmer, setConfirmer] = useState('');
  const [showAncien, setShowAncien] = useState(false);
  const [showNouveau, setShowNouveau] = useState(false);
  const [showConfirmer, setShowConfirmer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginPage">

      <div className="loginCard">

        <div className="loginLeftPanel">

          <div className="illustrationSection">

            <img
              src={changePasswordImg}
              alt="Changer le mot de passe"
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
                Changer le mot de passe
              </h2>

              <p className="loginSubtitle">
                Entrez votre mot de passe actuel puis choisissez un nouveau.
              </p>

            </div>

            <form className="loginForm" onSubmit={handleSubmit}>

              <div className="loginField">

                <label className="loginLabel">
                  Ancien mot de passe
                </label>

                <div className="loginInputGroup">

                  <span className="loginInputGroupText">
                    <i className="bi bi-lock-fill"></i>
                  </span>

                  <input
                    type={showAncien ? 'text' : 'password'}
                    className="loginInput"
                    placeholder="••••••••"
                    value={ancien}
                    onChange={(e) => setAncien(e.target.value)}
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="loginEyeBtn"
                    onClick={() => setShowAncien(!showAncien)}
                  >
                    <i className={`bi ${showAncien ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>

                </div>

              </div>

              <div className="loginField">

                <label className="loginLabel">
                  Nouveau mot de passe
                </label>

                <div className="loginInputGroup">

                  <span className="loginInputGroupText">
                    <i className="bi bi-lock-fill"></i>
                  </span>

                  <input
                    type={showNouveau ? 'text' : 'password'}
                    className="loginInput"
                    placeholder="••••••••"
                    value={nouveau}
                    onChange={(e) => setNouveau(e.target.value)}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="loginEyeBtn"
                    onClick={() => setShowNouveau(!showNouveau)}
                  >
                    <i className={`bi ${showNouveau ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>

                </div>

              </div>

              <div className="loginField">

                <label className="loginLabel">
                  Confirmer le mot de passe
                </label>

                <div className="loginInputGroup">

                  <span className="loginInputGroupText">
                    <i className="bi bi-lock-fill"></i>
                  </span>

                  <input
                    type={showConfirmer ? 'text' : 'password'}
                    className="loginInput"
                    placeholder="••••••••"
                    value={confirmer}
                    onChange={(e) => setConfirmer(e.target.value)}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="loginEyeBtn"
                    onClick={() => setShowConfirmer(!showConfirmer)}
                  >
                    <i className={`bi ${showConfirmer ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>

                </div>

              </div>

              <button
                type="submit"
                className="loginButton"
              >
                <i className="bi bi-check-lg"></i>
                Enregistrer
              </button>

            </form>

            <div className="loginRegister">

              <Link to="/admin">
                ← Retour au tableau de bord
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChangePassword;
