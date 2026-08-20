import { useState } from 'react';
import '../../styles/admin.css';

const periodes = [
  { key: 'aujourd', label: "Aujourd'hui" },
  { key: 'semaine', label: 'Cette semaine' },
  { key: 'mois', label: 'Ce mois' },
  { key: 'annee', label: 'Cette année' },
];

const donnees = {
  aujourd: {
    reservations: 24, revenus: 360000, commission: 54000, terrains: 42, utilisateurs: 18,
    evolutionRes: [3, 2, 4, 3, 5, 2, 3],
    evolutionLabels: ['8h', '9h', '10h', '11h', '14h', '15h', '16h'],
    topTerrains: [
      { nom: 'Keur Massar', reservations: 8, revenus: 120000 },
      { nom: 'Grand Yoff Arena', reservations: 6, revenus: 120000 },
      { nom: 'Medina Stars', reservations: 5, revenus: 60000 },
      { nom: 'Crous United', reservations: 3, revenus: 54000 },
      { nom: 'Parcelles Sport', reservations: 2, revenus: 26000 },
    ],
    methodes: { wave: 16, orange: 8 },
  },
  semaine: {
    reservations: 178, revenus: 2450000, commission: 367500, terrains: 89, utilisateurs: 64,
    evolutionRes: [42, 58, 65, 71, 94, 120, 88],
    evolutionLabels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    topTerrains: [
      { nom: 'Keur Massar', reservations: 38, revenus: 570000 },
      { nom: 'Grand Yoff Arena', reservations: 32, revenus: 640000 },
      { nom: 'Medina Stars', reservations: 28, revenus: 336000 },
      { nom: 'Crous United', reservations: 24, revenus: 432000 },
      { nom: 'Rufisque Elite', reservations: 19, revenus: 266000 },
    ],
    methodes: { wave: 112, orange: 66 },
  },
  mois: {
    reservations: 892, revenus: 4750000, commission: 712500, terrains: 156, utilisateurs: 312,
    evolutionRes: [185, 210, 195, 220, 265, 295, 280, 260, 240, 225, 210, 198, 180, 165, 155, 148, 140, 135, 128, 120, 115, 110, 105, 100, 95, 90, 88, 85, 82, 80],
    evolutionLabels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    topTerrains: [
      { nom: 'Keur Massar', reservations: 89, revenus: 1335000 },
      { nom: 'Grand Yoff Arena', reservations: 76, revenus: 1520000 },
      { nom: 'Medina Stars', reservations: 64, revenus: 768000 },
      { nom: 'Crous United', reservations: 58, revenus: 1044000 },
      { nom: 'Pikine FC', reservations: 52, revenus: 520000 },
    ],
    methodes: { wave: 580, orange: 312 },
  },
  annee: {
    reservations: 10840, revenus: 58200000, commission: 8730000, terrains: 156, utilisateurs: 1247,
    evolutionRes: [680, 720, 810, 890, 950, 1020, 980, 860, 790, 750, 700, 690],
    evolutionLabels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    topTerrains: [
      { nom: 'Keur Massar', reservations: 1420, revenus: 21300000 },
      { nom: 'Grand Yoff Arena', reservations: 1180, revenus: 23600000 },
      { nom: 'Medina Stars', reservations: 980, revenus: 11760000 },
      { nom: 'Crous United', reservations: 870, revenus: 15660000 },
      { nom: 'Rufisque Elite', reservations: 720, revenus: 10080000 },
    ],
    methodes: { wave: 7100, orange: 3740 },
  },
};

function fmt(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace('.', ',') + ' M F';
  if (n >= 1000) return (n / 1000).toFixed(0) + ' 000 F';
  return n + ' F';
}

function fmtFull(n) {
  return n.toLocaleString('fr-FR') + ' F';
}

function Rapports() {
  const [periode, setPeriode] = useState('mois');
  const d = donnees[periode];
  const maxRes = Math.max(...d.evolutionRes);

  const handleExportPDF = () => {
    const content = [
      'RAPPORT TAPOU TOKHOU',
      'Période : ' + periodes.find(p => p.key === periode).label,
      '',
      '--- RÉSUMÉ ---',
      'Réservations : ' + d.reservations,
      'Revenus : ' + fmtFull(d.revenus),
      'Commission Tapou Tokhou (15%) : ' + fmtFull(d.commission),
      'Terrains actifs : ' + d.terrains,
      'Utilisateurs actifs : ' + d.utilisateurs,
      '',
      '--- TOP 5 TERRAINS ---',
      ...d.topTerrains.map((t, i) => `${i + 1}. ${t.nom} — ${t.reservations} réserv. — ${fmtFull(t.revenus)}`),
      '',
      '--- MOYENS DE PAIEMENT ---',
      `Wave : ${d.methodes.wave}`,
      `Orange Money : ${d.methodes.orange}`,
      '',
      'Généré le ' + new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `rapport-tapou-tokhou-${periode}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="admin-page">

      <div className="admin-page-header">
        <div className="admin-page-header-row">
          <div>
            <h1>Rapports</h1>
            <p>Consultez les statistiques et exportez l'activité de la plateforme.</p>
          </div>
          <button className="btn-primary" onClick={handleExportPDF}>
            <i className="bi bi-download"></i>
            Exporter PDF
          </button>
        </div>
      </div>

      <div className="rapports-period-bar">
        {periodes.map(p => (
          <button
            key={p.key}
            className={`period-btn ${periode === p.key ? 'active' : ''}`}
            onClick={() => setPeriode(p.key)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="rapports-stats-grid">
        <div className="rapport-stat-card">
          <div className="rapport-stat-icon blue"><i className="bi bi-calendar-check"></i></div>
          <div className="rapport-stat-info">
            <span className="rapport-stat-value">{d.reservations.toLocaleString('fr-FR')}</span>
            <span className="rapport-stat-label">Réservations</span>
          </div>
        </div>
        <div className="rapport-stat-card">
          <div className="rapport-stat-icon green"><i className="bi bi-cash-stack"></i></div>
          <div className="rapport-stat-info">
            <span className="rapport-stat-value">{fmt(d.revenus)}</span>
            <span className="rapport-stat-label">Revenus générés</span>
          </div>
        </div>
        <div className="rapport-stat-card accent">
          <div className="rapport-stat-icon dark"><i className="bi bi-percent"></i></div>
          <div className="rapport-stat-info">
            <span className="rapport-stat-value">{fmt(d.commission)}</span>
            <span className="rapport-stat-label">Commission Tapou Tokhou</span>
          </div>
        </div>
        <div className="rapport-stat-card">
          <div className="rapport-stat-icon teal"><i className="bi bi-geo-alt"></i></div>
          <div className="rapport-stat-info">
            <span className="rapport-stat-value">{d.terrains}</span>
            <span className="rapport-stat-label">Terrains actifs</span>
          </div>
        </div>
        <div className="rapport-stat-card">
          <div className="rapport-stat-icon purple"><i className="bi bi-people"></i></div>
          <div className="rapport-stat-info">
            <span className="rapport-stat-value">{d.utilisateurs.toLocaleString('fr-FR')}</span>
            <span className="rapport-stat-label">Utilisateurs actifs</span>
          </div>
        </div>
      </div>

      <div className="rapports-grid">

        <div className="admin-card">
          <div className="admin-card-header">
            <h3>Évolution des réservations</h3>
            <span className="admin-card-sub">{periodes.find(p => p.key === periode).label}</span>
          </div>
          <div className="rapport-chart">
            {d.evolutionRes.map((val, i) => (
              <div className="rapport-bar-group" key={i}>
                <div className="rapport-bar-wrapper">
                  <div
                    className="rapport-bar"
                    style={{ height: `${(val / maxRes) * 100}%` }}
                    title={`${val} réservations`}
                  ></div>
                </div>
                <span className="rapport-bar-label">{d.evolutionLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-card rapport-moyens-card">
          <div className="admin-card-header">
            <h3>Moyens de paiement</h3>
          </div>
          <div className="rapport-moyens">
            <div className="rapport-moyen-item">
              <div className="rapport-moyen-circle wave">
                <span>{Math.round((d.methodes.wave / (d.methodes.wave + d.methodes.orange)) * 100)}%</span>
              </div>
              <div className="rapport-moyen-info">
                <span className="rapport-moyen-label">Wave</span>
                <span className="rapport-moyen-count">{d.methodes.wave.toLocaleString('fr-FR')}</span>
              </div>
            </div>
            <div className="rapport-moyen-item">
              <div className="rapport-moyen-circle orange">
                <span>{Math.round((d.methodes.orange / (d.methodes.wave + d.methodes.orange)) * 100)}%</span>
              </div>
              <div className="rapport-moyen-info">
                <span className="rapport-moyen-label">Orange Money</span>
                <span className="rapport-moyen-count">{d.methodes.orange.toLocaleString('fr-FR')}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="admin-card">
        <div className="admin-card-header">
          <h3>Top 5 terrains</h3>
          <span className="admin-card-sub">Classement par nombre de réservations</span>
        </div>
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Terrain</th>
                <th>Réservations</th>
                <th>Revenus générés</th>
                <th>Part du total</th>
              </tr>
            </thead>
            <tbody>
              {d.topTerrains.map((t, i) => (
                <tr key={i}>
                  <td><span className="rapport-rank">#{i + 1}</span></td>
                  <td className="td-bold">{t.nom}</td>
                  <td>{t.reservations.toLocaleString('fr-FR')}</td>
                  <td className="td-bold">{fmtFull(t.revenus)}</td>
                  <td>
                    <div className="rapport-bar-inline-wrapper">
                      <div className="rapport-bar-inline" style={{ width: `${(t.reservations / d.topTerrains[0].reservations) * 100}%` }}></div>
                      <span>{Math.round((t.reservations / d.reservations) * 100)}%</span>
                    </div>
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

export default Rapports;