import { useState } from 'react';
import EmptyImg from '../../assets/Empty.png';
import '../../styles/admin.css';

const terrainsInit = [
  {
    id: 1, nom: 'Terrain Foot Keur Massar', localisation: 'Keur Massar, Dakar', prix: '15 000 F/h',
    proprietaire: 'Pape Sow', photos: 5, description: 'Terrain synthétique 5x5, éclairage nocturne, vestiaires disponibles.',
    statut: 'En attente', dateAjout: '18 Août 2026', note: null,
  },
  {
    id: 2, nom: 'Terrain Medina Stars', localisation: 'Medina, Dakar', prix: '12 000 F/h',
    proprietaire: 'Abdou Diouf', photos: 8, description: 'Terrain gazon naturel 7v7, casiers, eau potable sur place.',
    statut: 'Validé', dateAjout: '10 Août 2026', note: null,
  },
  {
    id: 3, nom: 'Terrain Crous United', localisation: 'Crous, Dakar', prix: '18 000 F/h',
    proprietaire: 'Mamadou Lô', photos: 4, description: 'Terrain synthétique 5x5, gradins pour 50 personnes, parking.',
    statut: 'Validé', dateAjout: '05 Août 2026', note: null,
  },
  {
    id: 4, nom: 'Terrain Pikine FC', localisation: 'Pikine, Dakar', prix: '10 000 F/h',
    proprietaire: 'Souleymane Cissé', photos: 3, description: 'Terrain sable 5x5, filets neufs, ambiance top.',
    statut: 'Refusé', dateAjout: '02 Août 2026', note: 'Photos de mauvaise qualité, description incomplète.',
  },
  {
    id: 5, nom: 'Terrain Grand Yoff Arena', localisation: 'Grand Yoff, Dakar', prix: '20 000 F/h',
    proprietaire: 'Ibrahima Seck', photos: 10, description: 'Terrain synthétique 7v7 premium, vestiaires modernes, éclairage LED.',
    statut: 'Validé', dateAjout: '28 Juil 2026', note: null,
  },
  {
    id: 6, nom: 'Terrain Parcelles Sport', localisation: 'Parcelles Assainies, Dakar', prix: '13 000 F/h',
    proprietaire: 'Cheikh Mbaye', photos: 6, description: 'Terrain gazon 5x5, bon état, scenery urbain.',
    statut: 'En attente', dateAjout: '19 Août 2026', note: null,
  },
  {
    id: 7, nom: 'Terrain Guédiawaye Goal', localisation: 'Guédiawaye, Dakar', prix: '8 000 F/h',
    proprietaire: 'Ousmane Fall', photos: 2, description: 'Terrain sable 5x5, ambiance locale, club de quartier.',
    statut: 'Désactivé', dateAjout: '15 Juil 2026', note: 'Travaux de rénovation en cours.',
  },
  {
    id: 8, nom: 'Terrain Rufisque Elite', localisation: 'Rufisque, Dakar', prix: '14 000 F/h',
    proprietaire: 'Amadou Ndiaye', photos: 7, description: 'Terrain synthétique 7v7, standard professionnel, douches.',
    statut: 'En attente', dateAjout: '20 Août 2026', note: null,
  },
  {
    id: 9, nom: 'Terrain Mbao Turf', localisation: 'Mbao, Dakar', prix: '11 000 F/h',
    proprietaire: 'Ibrahima Diop', photos: 4, description: 'Terrain gazon 5x5, cadre calme, parking facile.',
    statut: 'Validé', dateAjout: '22 Juil 2026', note: null,
  },
  {
    id: 10, nom: 'Terrain Diamaguène Arena', localisation: 'Diamaguène, Pikine', prix: '9 000 F/h',
    proprietaire: 'Fatou Sow', photos: 3, description: 'Terrain sable 5x5, filets corrects, bon accès.',
    statut: 'Refusé', dateAjout: '08 Août 2026', note: 'Prix non conforme aux tarifs de la zone.',
  },
];

const statutFiltres = ['Tous', 'En attente', 'Validé', 'Refusé', 'Désactivé'];

const statutConfig = {
  'En attente': { class: 'statut-en-attente', icon: 'bi-hourglass-split' },
  'Validé': { class: 'statut-valide', icon: 'bi-check-circle-fill' },
  'Refusé': { class: 'statut-refuse', icon: 'bi-x-circle-fill' },
  'Désactivé': { class: 'statut-desactive', icon: 'bi-pause-circle-fill' },
};

function Terrains() {
  const [terrains, setTerrains] = useState(terrainsInit);
  const [statutFilter, setStatutFilter] = useState('Tous');
  const [recherche, setRecherche] = useState('');
  const [modalView, setModalView] = useState(null);
  const [modalCorrection, setModalCorrection] = useState(null);
  const [correctionText, setCorrectionText] = useState('');

  const filtered = terrains.filter(t => {
    if (statutFilter !== 'Tous' && t.statut !== statutFilter) return false;
    if (recherche) {
      const q = recherche.toLowerCase();
      if (!t.nom.toLowerCase().includes(q) && !t.localisation.toLowerCase().includes(q) && !t.proprietaire.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const handleValider = (id) => {
    setTerrains(prev => prev.map(t => t.id === id ? { ...t, statut: 'Validé', note: null } : t));
  };

  const handleRefuser = (id) => {
    setTerrains(prev => prev.map(t => t.id === id ? { ...t, statut: 'Refusé', note: 'Non conforme aux règles.' } : t));
  };

  const handleDesactiver = (id) => {
    setTerrains(prev => prev.map(t => {
      if (t.id !== id) return t;
      if (t.statut === 'Désactivé') return { ...t, statut: 'Validé', note: null };
      return { ...t, statut: 'Désactivé', note: 'Désactivé temporairement par l\'admin.' };
    }));
  };

  const handleSendCorrection = () => {
    setTerrains(prev => prev.map(t => t.id === modalCorrection.id ? { ...t, statut: 'Refusé', note: correctionText } : t));
    setModalCorrection(null);
    setCorrectionText('');
  };

  const counts = {
    'En attente': terrains.filter(t => t.statut === 'En attente').length,
    'Validé': terrains.filter(t => t.statut === 'Validé').length,
    'Refusé': terrains.filter(t => t.statut === 'Refusé').length,
    'Désactivé': terrains.filter(t => t.statut === 'Désactivé').length,
  };

  return (
    <div className="admin-page">

      <div className="admin-page-header">
        <h1>Modérer les terrains</h1>
        <p>Validez, refusez ou désactivez les terrains publiés par les propriétaires.</p>
      </div>

      <div className="terrains-status-cards">
        {Object.entries(counts).map(([label, count]) => (
          <div className={`terrain-status-card ${statutConfig[label].class}`} key={label}>
            <i className={`bi ${statutConfig[label].icon}`}></i>
            <div>
              <span className="terrain-status-count">{count}</span>
              <span className="terrain-status-label">{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="admin-card">
        <div className="admin-filters-bar">
          <div className="admin-search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Rechercher un terrain, lieu, propriétaire..."
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

        <div className="terrains-grid">
          {filtered.map(t => {
            const cfg = statutConfig[t.statut];
            return (
              <div className="terrain-card" key={t.id}>
                <div className="terrain-card-header">
                  <div className="terrain-card-photos">
                    <i className="bi bi-image"></i>
                    <span>{t.photos}</span>
                  </div>
                  <span className={`terrain-statut-badge ${cfg.class}`}>
                    <i className={`bi ${cfg.icon}`}></i>
                    {t.statut}
                  </span>
                </div>

                <div className="terrain-card-body">
                  <h4 className="terrain-card-name">{t.nom}</h4>
                  <div className="terrain-card-meta">
                    <span><i className="bi bi-geo-alt"></i> {t.localisation}</span>
                    <span><i className="bi bi-cash"></i> {t.prix}</span>
                  </div>
                  <p className="terrain-card-desc">{t.description}</p>
                  <div className="terrain-card-owner">
                    <i className="bi bi-person"></i>
                    <span>{t.proprietaire}</span>
                    <span className="terrain-card-date">{t.dateAjout}</span>
                  </div>
                  {t.note && (
                    <div className="terrain-card-note">
                      <i className="bi bi-info-circle"></i>
                      <span>{t.note}</span>
                    </div>
                  )}
                </div>

                <div className="terrain-card-actions">
                  <button className="action-btn action-view" title="Voir détails" onClick={() => setModalView(t)}>
                    <i className="bi bi-eye"></i>
                  </button>
                  {(t.statut === 'En attente' || t.statut === 'Refusé') && (
                    <button className="action-btn action-validate" title="Valider" onClick={() => handleValider(t.id)}>
                      <i className="bi bi-check-lg"></i>
                    </button>
                  )}
                  {t.statut !== 'Refusé' && t.statut !== 'En attente' && (
                    <button className="action-btn action-desactiver" title={t.statut === 'Désactivé' ? 'Réactiver' : 'Désactiver'} onClick={() => handleDesactiver(t.id)}>
                      <i className={`bi ${t.statut === 'Désactivé' ? 'bi-play-circle' : 'bi-pause-circle'}`}></i>
                    </button>
                  )}
                  {t.statut !== 'Refusé' && (
                    <button className="action-btn action-correction" title="Demander correction" onClick={() => { setModalCorrection(t); setCorrectionText(t.note || ''); }}>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  )}
                  {t.statut !== 'Refusé' && (
                    <button className="action-btn action-refuser" title="Refuser" onClick={() => handleRefuser(t.id)}>
                      <i className="bi bi-x-lg"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="terrains-empty">
              <img src={EmptyImg} alt="Aucun terrain" className="empty-state-img" />
              <p>Aucun terrain trouvé.</p>
            </div>
          )}
        </div>

        <div className="admin-table-footer">
          <span>{filtered.length} terrain{filtered.length > 1 ? 's' : ''}</span>
        </div>
      </div>

      {modalView && (
        <div className="modal-overlay" onClick={() => setModalView(null)}>
          <div className="modal-content modal-view-terrain" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalView.nom}</h3>
              <button className="modal-close" onClick={() => setModalView(null)}><i className="bi bi-x-lg"></i></button>
            </div>
            <div className="modal-body">
              <div className="terrain-detail-photos">
                <i className="bi bi-image"></i>
                <span>{modalView.photos} photo{modalView.photos > 1 ? 's' : ''}</span>
              </div>
              <div className="terrain-detail-rows">
                <div className="view-row"><span className="view-label">Localisation</span><span>{modalView.localisation}</span></div>
                <div className="view-row"><span className="view-label">Prix</span><span>{modalView.prix}</span></div>
                <div className="view-row"><span className="view-label">Propriétaire</span><span>{modalView.proprietaire}</span></div>
                <div className="view-row"><span className="view-label">Statut</span><span className={`terrain-statut-badge ${statutConfig[modalView.statut].class}`}><i className={`bi ${statutConfig[modalView.statut].icon}`}></i>{modalView.statut}</span></div>
                <div className="view-row"><span className="view-label">Date d'ajout</span><span>{modalView.dateAjout}</span></div>
              </div>
              <div className="terrain-detail-desc">
                <span className="view-label">Description</span>
                <p>{modalView.description}</p>
              </div>
              {modalView.note && (
                <div className="terrain-detail-note">
                  <i className="bi bi-exclamation-triangle"></i>
                  <span>{modalView.note}</span>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setModalView(null)}>Fermer</button>
              {modalView.statut === 'En attente' && (
                <button className="btn-primary" onClick={() => { handleValider(modalView.id); setModalView(null); }}>Valider le terrain</button>
              )}
            </div>
          </div>
        </div>
      )}

      {modalCorrection && (
        <div className="modal-overlay" onClick={() => setModalCorrection(null)}>
          <div className="modal-content modal-correction" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Demander une correction</h3>
              <button className="modal-close" onClick={() => setModalCorrection(null)}><i className="bi bi-x-lg"></i></button>
            </div>
            <div className="modal-body">
              <p className="correction-terrain-name">{modalCorrection.nom}</p>
              <div className="form-group">
                <label>Raison du refus / Demande de correction</label>
                <textarea
                  className="correction-textarea"
                  value={correctionText}
                  onChange={(e) => setCorrectionText(e.target.value)}
                  placeholder="Ex: Les photos sont floues, veuillez les remplacer..."
                  rows={5}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setModalCorrection(null)}>Annuler</button>
              <button className="btn-primary btn-danger" onClick={handleSendCorrection} disabled={!correctionText.trim()}>Envoyer</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Terrains;