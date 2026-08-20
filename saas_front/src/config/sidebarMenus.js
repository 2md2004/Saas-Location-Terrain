export const sidebarMenus = {
  admin: [
    {
      label: 'Tableau de Bord',
      icon: 'bi-grid-1x2-fill',
      path: '/admin',
      end: true,
    },
    {
      label: 'Utilisateurs',
      icon: 'bi-people-fill',
      path: '/admin/utilisateurs',
    },
    {
      label: 'Terrains',
      icon: 'bi-geo-alt-fill',
      path: '/admin/terrains',
    },
    {
      label: 'Paiements',
      icon: 'bi-cash-stack',
      path: '/admin/paiements',
    },
    {
      label: 'Rapports',
      icon: 'bi-file-earmark-bar-graph',
      path: '/admin/rapports',
    },
  ],
};