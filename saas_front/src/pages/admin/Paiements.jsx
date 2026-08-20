import { useState } from 'react';
import EmptyImg from '../../assets/Empty.png';
import '../../styles/admin.css';

const paiementsInit = [
  { id: '#PAY-0892', joueur: 'Amadou Ndiaye', terrain: 'Keur Massar', montant: 15000, commission: 2250, date: '20/08/2026', statut: 'Payé' },
  { id: '#PAY-0891', joueur: 'Moussa Sow', terrain: 'Medina Stars', montant: 12000, commission: 1800, date: '20/08/2026', statut: 'Payé' },
  { id: '#PAY-0890', joueur: 'Ousmane Fall', terrain: 'Crous United', montant: 18000, commission: 2700, date: '19/08/2026', statut: 'Payé' },
  { id: '#PAY-0889', joueur: 'Ibrahima Diop', terrain: 'Pikine FC', montant: 10000, commission: 1500, date: '19/08/2026', statut: 'Payé' },
  { id: '#PAY-0888', joueur: 'Cheikh Mbaye', terrain: 'Grand Yoff Arena', montant: 20000, commission: 3000, date: '18/08/2026', statut: 'Payé' },
  { id: '#PAY-0887', joueur: 'Abdoulaye Dia', terrain: 'Parcelles Sport', montant: 13000, commission: 1950, date: '18/08/2026', statut: 'Payé' },
  { id: '#PAY-0886', joueur: 'Fatou Sow', terrain: 'Diamaguène Arena', montant: 9000, commission: 1350, date: '17/08/2026', statut: 'Payé' },
  { id: '#PAY-0885', joueur: 'Pape Sy', terrain: 'Keur Massar', montant: 15000, commission: 2250, date: '17/08/2026', statut: 'Payé' },
  { id: '#PAY-0884', joueur: 'Mariama Cissé', terrain: 'Medina Stars', montant: 12000, commission: 1800, date: '16/08/2026', statut: 'Payé' },
  { id: '#PAY-0883', joueur: 'Ndèye Gueye', terrain: 'Rufisque Elite', montant: 14000, commission: 2100, date: '16/08/2026', statut: 'Payé' },
  { id: '#PAY-0882', joueur: 'Khady Thiam', terrain: 'Mbao Turf', montant: 11000, commission: 1650, date: '15/08/2026', statut: 'Payé' },
  { id: '#PAY-0881', joueur: 'Ibrahima Ba', terrain: 'Grand Yoff Arena', montant: 20000, commission: 3000, date: '15/08/2026', statut: 'Payé' },
  { id: '#PAY-0880', joueur: 'Amadou Ndiaye', terrain: 'Crous United', montant: 18000, commission: 2700, date: '14/08/2026', statut: 'Payé' },
  { id: '#PAY-0879', joueur: 'Ousmane Mbaye', terrain: 'Pikine FC', montant: 10000, commission: 1500, date: '14/08/2026', statut: 'Payé' },
  { id: '#PAY-0878', joueur: 'Moussa Sow', terrain: 'Parcelles Sport', montant: 13000, commission: 1950, date: '13/08/2026', statut: 'Payé' },
  { id: '#PAY-0877', joueur: 'Abdoulaye Kane', terrain: 'Keur Massar', montant: 15000, commission: 2250, date: '13/08/2026', statut: 'Payé' },
  { id: '#PAY-0876', joueur: 'Fatou Sow', terrain: 'Rufisque Elite', montant: 14000, commission: 2100, date: '12/08/2026', statut: 'Payé' },
  { id: '#PAY-0875', joueur: 'Ibrahima Diop', terrain: 'Mbao Turf', montant: 11000, commission: 1650, date: '12/08/2026', statut: 'Payé' },
];

const statutFiltres = ['Tous', 'Payé'];

const statutConfig = {
  'Payé': 'statut-paye',
};

function formatMontant(n) {
  return n.toLocaleString('fr-FR') + ' F';
}

function Paiements() {
  const [paiements] = useState(paiementsInit);
  const [statutFilter, setStatutFilter] = useState('Tous');
  const [recherche, setRecherche] = useState('');

  const filtered = paiements.filter(p => {
    if (statutFilter !== 'Tous' && p.statut !== statutFilter) return false;
    if (recherche) {
      const q = recherche.toLowerCase();
      if (!p.joueur.toLowerCase().includes(q) && !p.terrain.toLowerCase().includes(q) && !p.id.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const totalEncaisse = filtered.filter(p => p.statut === 'Payé').reduce((s, p) => s + p.montant, 0);
  const totalCommission = filtered.filter(p => p.statut === 'Payé').reduce((s, p) => s + p.commission, 0);
  const nbPayes = filtered.filter(p => p.statut === 'Payé').length;
  const nbEnAttente = filtered.filter(p => p.statut === 'En attente').length;

  return (
    <div className="admin-page">

      <div className="admin-page-header">
        <h1>Historique des paiements</h1>
        <p>Consultez l'ensemble des transactions effectuées sur la plateforme.</p>
      </div>

      <div className="paiements-stats-grid">
        <div className="paiement-stat-card">
          <span className="paiement-stat-label">Total encaissé</span>
          <span className="paiement-stat-value">{formatMontant(totalEncaisse)}</span>
          <span className="paiement-stat-sub">{nbPayes} paiement{nbPayes > 1 ? 's' : ''} confirmé{nbPayes > 1 ? 's' : ''}</span>
        </div>
        <div className="paiement-stat-card accent">
          <span className="paiement-stat-label">Commission Tapou Tokhou</span>
          <span className="paiement-stat-value">{formatMontant(totalCommission)}</span>
          <span className="paiement-stat-sub">15% par transaction</span>
        </div>
        <div className="paiement-stat-card">
          <span className="paiement-stat-label">En attente</span>
          <span className="paiement-stat-value">{nbEnAttente}</span>
          <span className="paiement-stat-sub">paiement{nbEnAttente > 1 ? 's' : ''} à confirmer</span>
        </div>
        <div className="paiement-stat-card">
          <span className="paiement-stat-label">Transactions</span>
          <span className="paiement-stat-value">{filtered.length}</span>
          <span className="paiement-stat-sub">au total</span>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-filters-bar">
          <div className="admin-search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Rechercher par référence, joueur ou terrain..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
          </div>
          <div className="admin-filters-group">
            <select value={statutFilter} onChange={(e) => setStatutFilter(e.target.value)}>
              {statutFiltres.map(s => <option key={s} value={s}>{s === 'Tous' ? 'Tous les statuts' : s}</option>)}
            </select>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Référence</th>
                <th>Joueur</th>
                <th>Terrain</th>
                <th>Montant</th>
                <th>Commission</th>
                <th>Date</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p, i) => (
                <tr key={i}>
                  <td className="td-mono">{p.id}</td>
                  <td>{p.joueur}</td>
                  <td>{p.terrain}</td>
                  <td className="td-bold">{formatMontant(p.montant)}</td>
                  <td className="td-commission">{formatMontant(p.commission)}</td>
                  <td className="td-date">{p.date}</td>
                  <td><span className={`paiement-statut ${statutConfig[p.statut]}`}>{p.statut}</span></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan="7" className="td-empty">
                  <div className="empty-state">
                    <img src={EmptyImg} alt="Aucun paiement" className="empty-state-img" />
                    <p>Aucun paiement trouvé.</p>
                  </div>
                </td></tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="admin-table-footer">
          <span>{filtered.length} transaction{filtered.length > 1 ? 's' : ''}</span>
        </div>
      </div>

    </div>
  );
}

export default Paiements;