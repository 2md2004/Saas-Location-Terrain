import { NavLink, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo_tapou_tokhou.png';
import '../../styles/sidebar.css';

function Sidebar({ menuItems, isOpen = false }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside
      className={
        isOpen
          ? 'dashboard-sidebar open'
          : 'dashboard-sidebar'
      }
    >
      <div className="sidebar-brand">
        <div className="sidebar-logo-container">
          <img
            src={logo}
            alt="Tapou Tokhou"
            className="sidebar-logo"
          />
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="sidebar-section-title">
          PRINCIPAL
        </div>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              'sidebar-link' +
              (isActive ? ' active' : '')
            }
          >
            <span className="sidebar-link-icon">
              <i className={`bi ${item.icon}`}></i>
            </span>

            <span className="sidebar-link-label">
              {item.label}
            </span>

            <i className="bi bi-chevron-right sidebar-link-arrow"></i>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <span className="sidebar-logout-icon">
            <i className="bi bi-box-arrow-right"></i>
          </span>

          <span className="sidebar-logout-text">
            <strong>Déconnexion</strong>
            <span>Quitter la session</span>
          </span>

          <i className="bi bi-chevron-right sidebar-logout-arrow"></i>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;