import '../../styles/admin.css';

const stats = [
  {
    label: 'Utilisateurs inscrits',
    value: '1 247',
    icon: 'bi-people-fill',
    color: '#0B5D3B',
    trend: '+12%',
    trendUp: true
  },
  {
    label: 'Propriétaires actifs',
    value: '83',
    icon: 'bi-person-badge-fill',
    color: '#39A935',
    trend: '+5%',
    trendUp: true
  },
  {
    label: 'Terrains en ligne',
    value: '156',
    icon: 'bi-map-fill',
    color: '#168A45',
    trend: '+8',
    trendUp: true
  },
  {
    label: 'Réservations (mois)',
    value: '892',
    icon: 'bi-calendar-check-fill',
    color: '#0B5D3B',
    trend: '+18%',
    trendUp: true
  },
  {
    label: 'Revenus (mois)',
    value: '4 750 000 F',
    icon: 'bi-cash-stack',
    color: '#39A935',
    trend: '+22%',
    trendUp: true
  },
  {
    label: 'Commission Tapou Tokhou',
    value: '712 500 F',
    icon: 'bi-percent',
    color: '#168A45',
    trend: '15%',
    trendUp: false
  },
  {
    label: 'Créneaux réservés',
    value: '892',
    icon: 'bi-clock-history',
    color: '#0B5D3B',
    trend: '+18%',
    trendUp: true
  },
  {
    label: 'Taux d’occupation',
    value: '68%',
    icon: 'bi-pie-chart-fill',
    color: '#39A935',
    trend: '+8%',
    trendUp: true
  }
];

const recentReservations = [
  {
    id: '#RES-0892',
    joueur: 'Amadou Ndiaye',
    terrain: 'Terrain Keur Massar',
    date: '20 Août 2026',
    heure: '16h - 17h',
    statut: 'Confirmée',
    montant: '15 000 F'
  },
  {
    id: '#RES-0891',
    joueur: 'Moussa Sow',
    terrain: 'Terrain Medina',
    date: '20 Août 2026',
    heure: '18h - 19h',
    statut: 'Confirmée',
    montant: '12 000 F'
  },
  {
    id: '#RES-0890',
    joueur: 'Ousmane Fall',
    terrain: 'Terrain Crous',
    date: '19 Août 2026',
    heure: '14h - 15h',
    statut: 'Confirmée',
    montant: '20 000 F'
  },
  {
    id: '#RES-0889',
    joueur: 'Ibrahima Diop',
    terrain: 'Terrain Pikine',
    date: '19 Août 2026',
    heure: '17h - 18h',
    statut: 'Confirmée',
    montant: '18 000 F'
  },
  {
    id: '#RES-0888',
    joueur: 'Cheikh Mbaye',
    terrain: 'Terrain Grand Yoff',
    date: '18 Août 2026',
    heure: '10h - 11h',
    statut: 'Confirmée',
    montant: '25 000 F'
  },
  {
    id: '#RES-0887',
    joueur: 'Abdoulaye Dia',
    terrain: 'Terrain Parcelles Assainies',
    date: '18 Août 2026',
    heure: '15h - 16h',
    statut: 'Confirmée',
    montant: '10 000 F'
  }
];

const topTerrains = [
  {
    nom: 'Terrain Keur Massar',
    proprietaire: 'Pape Sow',
    reservations: 89
  },
  {
    nom: 'Terrain Medina',
    proprietaire: 'Abdou Diouf',
    reservations: 76
  },
  {
    nom: 'Terrain Crous',
    proprietaire: 'Mamadou Lô',
    reservations: 64
  },
  {
    nom: 'Terrain Pikine',
    proprietaire: 'Souleymane Cissé',
    reservations: 58
  },
  {
    nom: 'Terrain Grand Yoff',
    proprietaire: 'Ibrahima Seck',
    reservations: 52
  }
];

const weeklyData = [
  {
    jour: 'Lun',
    reservations: 42
  },
  {
    jour: 'Mar',
    reservations: 58
  },
  {
    jour: 'Mer',
    reservations: 65
  },
  {
    jour: 'Jeu',
    reservations: 71
  },
  {
    jour: 'Ven',
    reservations: 94
  },
  {
    jour: 'Sam',
    reservations: 120
  },
  {
    jour: 'Dim',
    reservations: 88
  }
];

const weeklyRevenue = [
  {
    jour: 'Lun',
    revenus: 210000
  },
  {
    jour: 'Mar',
    revenus: 348000
  },
  {
    jour: 'Mer',
    revenus: 390000
  },
  {
    jour: 'Jeu',
    revenus: 426000
  },
  {
    jour: 'Ven',
    revenus: 564000
  },
  {
    jour: 'Sam',
    revenus: 720000
  },
  {
    jour: 'Dim',
    revenus: 528000
  }
];

const maxReservations = Math.max(
  ...weeklyData.map((data) => data.reservations)
);

const maxRevenue = Math.max(
  ...weeklyRevenue.map((data) => data.revenus)
);

function StatusBadge({ statut }) {
  return (
    <span className="status-badge status-confirmed">
      <i className="bi bi-check-circle-fill"></i>
      {statut}
    </span>
  );
}

function Dashboard() {
  return (
    <div className="admin-page">

      <div className="admin-page-header">
        <h1>Tableau de bord</h1>
        <p>
          Vue d'ensemble de l'activité de Tapou Tokhou.
        </p>
      </div>

      <div className="admin-stats-grid">
        {stats.map((stat, index) => (
          <div
            className="admin-stat-card"
            key={index}
          >
            <div className="admin-stat-header">
              <span className="admin-stat-label">
                {stat.label}
              </span>

              <span
                className="admin-stat-icon"
                style={{
                  backgroundColor: `${stat.color}14`,
                  color: stat.color
                }}
              >
                <i className={`bi ${stat.icon}`}></i>
              </span>
            </div>

            <span className="admin-stat-value">
              {stat.value}
            </span>

            <span
              className={`admin-stat-trend ${
                stat.trendUp ? 'up' : 'neutral'
              }`}
            >
              {stat.trendUp ? '↑' : '•'} {stat.trend} ce mois
            </span>
          </div>
        ))}
      </div>

      <div className="admin-dashboard-grid">

        <div className="admin-dashboard-left">

          <div className="admin-card admin-chart-card">

            <div className="admin-card-header">
              <div>
                <h3>Activité de la semaine</h3>
                <span className="admin-card-sub">
                  Réservations par jour
                </span>
              </div>

              <span className="admin-card-header-icon">
                <i className="bi bi-bar-chart-fill"></i>
              </span>
            </div>

            <div className="weekly-chart">
              {weeklyData.map((data, index) => (
                <div
                  className="chart-bar-group"
                  key={index}
                >
                  <div className="chart-bar-wrapper">
                    <div
                      className="chart-bar"
                      style={{
                        height: `${
                          (data.reservations / maxReservations) * 100
                        }%`
                      }}
                      title={`${data.reservations} réservations`}
                    ></div>
                  </div>

                  <span className="chart-bar-label">
                    {data.jour}
                  </span>

                  <span className="chart-bar-value">
                    {data.reservations}
                  </span>
                </div>
              ))}
            </div>

          </div>

          <div className="admin-card admin-chart-card">

            <div className="admin-card-header">
              <div>
                <h3>Revenus de la semaine</h3>
                <span className="admin-card-sub">
                  Revenus générés par jour
                </span>
              </div>

              <span className="admin-card-header-icon">
                <i className="bi bi-cash-stack"></i>
              </span>
            </div>

            <div className="weekly-chart">
              {weeklyRevenue.map((data, index) => (
                <div
                  className="chart-bar-group"
                  key={index}
                >
                  <div className="chart-bar-wrapper">
                    <div
                      className="chart-bar revenue-bar"
                      style={{
                        height: `${
                          (data.revenus / maxRevenue) * 100
                        }%`
                      }}
                      title={`${data.revenus.toLocaleString('fr-FR')} F`}
                    ></div>
                  </div>

                  <span className="chart-bar-label">
                    {data.jour}
                  </span>

                  <span className="chart-bar-value">
                    {(data.revenus / 1000).toFixed(0)}k
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        <div className="admin-card top-terrains-card">

          <div className="admin-card-header">
            <div>
              <h3>Top terrains</h3>
              <span className="admin-card-sub">
                Classement par réservations
              </span>
            </div>

            <span className="admin-card-header-icon">
              <i className="bi bi-trophy-fill"></i>
            </span>
          </div>

          <div className="top-terrains-list">
            {topTerrains.map((terrain, index) => (
              <div
                className="top-terrain-item"
                key={index}
              >
                <span className="terrain-rank">
                  #{index + 1}
                </span>

                <div className="terrain-info">
                  <span className="terrain-name">
                    {terrain.nom}
                  </span>

                  <span className="terrain-owner">
                    {terrain.proprietaire}
                  </span>
                </div>

                <div className="terrain-stats-right">
                  <span className="terrain-res-count">
                    {terrain.reservations}
                  </span>

                  <span className="terrain-res-label">
                    réserv.
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <div className="admin-card admin-full-width">

        <div className="admin-card-header">
          <div>
            <h3>Réservations récentes</h3>

            <span className="admin-card-sub">
              Dernières réservations effectuées
            </span>
          </div>

          <a
            href="/admin/paiements"
            className="admin-card-link"
          >
            Voir tout →
          </a>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Joueur</th>
                <th>Terrain</th>
                <th>Date</th>
                <th>Créneau</th>
                <th>Montant</th>
                <th>Statut</th>
              </tr>
            </thead>

            <tbody>
              {recentReservations.map((reservation, index) => (
                <tr key={index}>

                  <td className="td-mono">
                    {reservation.id}
                  </td>

                  <td>
                    {reservation.joueur}
                  </td>

                  <td>
                    {reservation.terrain}
                  </td>

                  <td>
                    {reservation.date}
                  </td>

                  <td>
                    {reservation.heure}
                  </td>

                  <td className="td-bold">
                    {reservation.montant}
                  </td>

                  <td>
                    <StatusBadge
                      statut={reservation.statut}
                    />
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;