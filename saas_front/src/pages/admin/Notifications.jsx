import { useState } from 'react';
import '../../styles/admin.css';

const notificationsInit = [
  {
    id: 1,
    icon: 'bi-calendar-check',
    iconColor: '#168A45',
    title: 'Nouvelle réservation',
    message: 'Amadou Ndiaye a réservé le terrain Keur Massar pour demain à 16h.',
    time: 'Il y a 12 min',
    date: '20/08/2026',
    lue: false,
  },
  {
    id: 2,
    icon: 'bi-exclamation-triangle',
    iconColor: '#b8860b',
    title: 'Terrain en attente de validation',
    message: 'Un nouveau terrain "Parcelles Sport" soumis par Cheikh Mbaye attend votre validation.',
    time: 'Il y a 1h',
    date: '20/08/2026',
    lue: false,
  },
  {
    id: 3,
    icon: 'bi-person-plus',
    iconColor: '#1565c0',
    title: 'Nouveau propriétaire inscrit',
    message: 'Cheikh Sarr vient de créer un compte propriétaire. 3 terrains en attente.',
    time: 'Il y a 3h',
    date: '20/08/2026',
    lue: false,
  },
  {
    id: 4,
    icon: 'bi-cash-stack',
    iconColor: '#168A45',
    title: 'Paiement reçu',
    message: 'Moussa Sow a effectué un paiement de 12 000 F pour le terrain Medina Stars.',
    time: 'Il y a 5h',
    date: '19/08/2026',
    lue: true,
  },
  {
    id: 5,
    icon: 'bi-shield-exclamation',
    iconColor: '#b8860b',
    title: 'Terrain désactivé',
    message: 'Le terrain Guédiawaye Goal a été désactivé pour travaux de rénovation.',
    time: 'Il y a 2 jours',
    date: '18/08/2026',
    lue: true,
  },
  {
    id: 6,
    icon: 'bi-person-x',
    iconColor: '#DC3545',
    title: 'Utilisateur suspendu',
    message: 'Le compte de Ibrahima Ba a été suspendu pour non-respect des règles.',
    time: 'Il y a 3 jours',
    date: '17/08/2026',
    lue: true,
  },
  {
    id: 7,
    icon: 'bi-bar-chart',
    iconColor: '#7c3aed',
    title: 'Rapport mensuel disponible',
    message: 'Le rapport de juillet 2026 est prêt. Revenus : 4 200 000 F, Commission : 630 000 F.',
    time: 'Il y a 5 jours',
    date: '15/08/2026',
    lue: true,
  },
];

function Notifications() {
  const [notifications] = useState(notificationsInit);
  const [filter, setFilter] = useState('Toutes');

  const filtered = notifications.filter(n => {
    if (filter === 'Non lues') return !n.lue;
    if (filter === 'Lues') return n.lue;
    return true;
  });

  const nonLues = notifications.filter(n => !n.lue).length;

  return (
    <div className="admin-page">

      <div className="admin-page-header">
        <div className="admin-page-header-row">
          <div>
            <h1>Notifications</h1>
            <p>{nonLues > 0 ? `${nonLues} notification${nonLues > 1 ? 's' : ''} non lue${nonLues > 1 ? 's' : ''}` : 'Toutes les notifications sont lues.'}</p>
          </div>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-filters-bar">
          <div className="admin-filters-group">
            {['Toutes', 'Non lues', 'Lues'].map(f => (
              <button
                key={f}
                className={`notif-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                {f === 'Non lues' && nonLues > 0 && <span className="notif-filter-count">{nonLues}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="notif-page-list">
          {filtered.map(n => (
            <div className={`notif-page-item ${!n.lue ? 'unread' : ''}`} key={n.id}>
              <div className="notif-page-icon" style={{ backgroundColor: n.iconColor + '16', color: n.iconColor }}>
                <i className={`bi ${n.icon}`}></i>
              </div>
              <div className="notif-page-content">
                <div className="notif-page-top">
                  <span className="notif-page-title">{n.title}</span>
                  <span className="notif-page-date">{n.date}</span>
                </div>
                <p className="notif-page-message">{n.message}</p>
                <span className="notif-page-time">{n.time}</span>
              </div>
              {!n.lue && <span className="notif-page-dot"></span>}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="notif-page-empty">
              <i className="bi bi-bell-slash"></i>
              <p>Aucune notification.</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Notifications;
