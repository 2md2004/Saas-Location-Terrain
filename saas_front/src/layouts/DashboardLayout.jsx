import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/dashboard/Sidebar';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';
import { sidebarMenus } from '../config/sidebarMenus';

import '../styles/dashboard-layout.css';

/**
 * Layout unique pour toutes les interfaces internes (admin, plus tard
 * propriétaire, etc.). Ne dépend que de `role` pour savoir quel menu
 * afficher — Sidebar et DashboardNavbar ne sont écrits qu'une seule fois.
 *
 * `role` sera à terme récupéré depuis le contexte d'authentification
 * (ex: const { user } = useAuth(); role={user.role}) plutôt que passé
 * en prop statique depuis les routes.
 */
function DashboardLayout({ role = 'admin' }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = sidebarMenus[role] || [];

  return (
    <div className="dashboard-layout">

      <Sidebar menuItems={menuItems} isOpen={sidebarOpen} />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="dashboard-main">

        <DashboardNavbar
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        <div className="dashboard-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;