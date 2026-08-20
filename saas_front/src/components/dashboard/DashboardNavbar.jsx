import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationsDropdown from './NotificationsDropdown';
import '../../styles/dashboard-navbar.css';

function DashboardNavbar({
  onToggleSidebar,
  userName = 'Admin',
  userRole = 'Administrateur'
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleChangePassword = () => {
    navigate('/admin/change-password');
    setDropdownOpen(false);
  };

  return (
    <header className="dashboard-navbar">
      <div className="dashboard-navbar-left">
        <button
          className="sidebar-toggle-btn"
          onClick={onToggleSidebar}
          aria-label="Ouvrir le menu"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="navbar-heading">
          <h1 className="dashboard-navbar-title">
            Tableau de bord
          </h1>

          <span className="navbar-subtitle">
            Tapou Tokhou
          </span>
        </div>
      </div>

      <div className="dashboard-navbar-right">
        <div className="navbar-date-container">
          <i className="bi bi-calendar3"></i>
          <span className="navbar-date">{today}</span>
        </div>

        <div className="navbar-divider"></div>

        <NotificationsDropdown />

        <div className="navbar-divider"></div>

        <div
          className={`navbar-user ${dropdownOpen ? 'open' : ''}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="navbar-user-avatar">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="navbar-user-info">
            <span className="navbar-user-name">
              {userName}
            </span>

            <span className="navbar-user-role">
              {userRole}
            </span>
          </div>

          <i
            className={`bi bi-chevron-${dropdownOpen ? 'up' : 'down'} navbar-user-arrow`}
          ></i>

          {dropdownOpen && (
            <div
              className="navbar-dropdown"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dropdown-header">
                <div className="dropdown-avatar">
                  {userName.charAt(0).toUpperCase()}
                </div>

                <div>
                  <strong>{userName}</strong>
                  <span>{userRole}</span>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <button
                className="navbar-dropdown-item"
                onClick={handleChangePassword}
              >
                <span className="dropdown-icon">
                  <i className="bi bi-key"></i>
                </span>

                <span>Changer le mot de passe</span>
              </button>

              <button
                className="navbar-dropdown-item logout"
                onClick={handleLogout}
              >
                <span className="dropdown-icon">
                  <i className="bi bi-box-arrow-right"></i>
                </span>

                <span>Déconnexion</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default DashboardNavbar;