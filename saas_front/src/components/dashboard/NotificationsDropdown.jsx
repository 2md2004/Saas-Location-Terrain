import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/notifications.css';

const notificationsInit = [
  {
    id: 1,
    icon: 'bi-calendar-check',
    iconColor: '#168A45',
    title: 'Nouvelle réservation',
    message: 'Amadou Ndiaye a réservé le terrain Keur Massar pour demain.',
    time: 'Il y a 12 min',
    read: false,
  },
  {
    id: 2,
    icon: 'bi-exclamation-triangle',
    iconColor: '#b8860b',
    title: 'Terrain en attente',
    message: 'Un nouveau terrain "Parcelles Sport" attend votre validation.',
    time: 'Il y a 1h',
    read: false,
  },
  {
    id: 3,
    icon: 'bi-person-plus',
    iconColor: '#1565c0',
    title: 'Nouveau propriétaire',
    message: 'Cheikh Sarr vient de s\'inscrire en tant que propriétaire.',
    time: 'Il y a 3h',
    read: true,
  },
];

function NotificationsDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications] = useState(notificationsInit);
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="notif-wrapper">
      <button
        className="navbar-icon-btn"
        aria-label="Notifications"
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
      >
        <i className="bi bi-bell"></i>
        {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
      </button>

      {open && (
        <div className="notif-dropdown" onClick={(e) => e.stopPropagation()}>
          <div className="notif-header">
            <h4>Notifications</h4>
            {unreadCount > 0 && <span className="notif-count">{unreadCount} non lues</span>}
          </div>

          <div className="notif-list">
            {notifications.map(n => (
              <div className={`notif-item ${!n.read ? 'unread' : ''}`} key={n.id}>
                <div className="notif-icon" style={{ backgroundColor: n.iconColor + '16', color: n.iconColor }}>
                  <i className={`bi ${n.icon}`}></i>
                </div>
                <div className="notif-content">
                  <span className="notif-title">{n.title}</span>
                  <span className="notif-message">{n.message}</span>
                  <span className="notif-time">{n.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="notif-footer">
            <button className="notif-see-all" onClick={() => { setOpen(false); navigate('/admin/notifications'); }}>Voir toutes les notifications</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotificationsDropdown;
