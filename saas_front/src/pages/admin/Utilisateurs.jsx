import { useState } from 'react';
import EmptyImg from '../../assets/Empty.png';
import '../../styles/admin.css';

const utilisateursInit = [
  { id: 1, prenom: 'Amadou', nom: 'Ndiaye', sexe: 'M', email: 'amadou.ndiaye@gmail.com', telephone: '+221 77 123 45 67', role: 'Joueur', statut: 'Actif', dateInsc: '12 Jan 2026' },
  { id: 2, prenom: 'Fatou', nom: 'Sow', sexe: 'F', email: 'fatou.sow@gmail.com', telephone: '+221 78 234 56 78', role: 'Propriétaire', statut: 'Actif', dateInsc: '05 Fév 2026' },
  { id: 3, prenom: 'Moussa', nom: 'Diop', sexe: 'M', email: 'moussa.diop@yahoo.fr', telephone: '+221 76 345 67 89', role: 'Joueur', statut: 'Actif', dateInsc: '18 Mar 2026' },
  { id: 4, prenom: 'Aissatou', nom: 'Fall', sexe: 'F', email: 'aissatou.fall@gmail.com', telephone: '+221 70 456 78 90', role: 'Propriétaire', statut: 'Actif', dateInsc: '22 Avr 2026' },
  { id: 5, prenom: 'Ibrahima', nom: 'Ba', sexe: 'M', email: 'ibrahima.ba@outlook.com', telephone: '+221 77 567 89 01', role: 'Joueur', statut: 'Suspendu', dateInsc: '01 Mai 2026' },
  { id: 6, prenom: 'Ousmane', nom: 'Mbaye', sexe: 'M', email: 'ousmane.mbaye@gmail.com', telephone: '+221 78 678 90 12', role: 'Admin', statut: 'Actif', dateInsc: '10 Jan 2026' },
  { id: 7, prenom: 'Mariama', nom: 'Cissé', sexe: 'F', email: 'mariama.cisse@gmail.com', telephone: '+221 76 789 01 23', role: 'Joueur', statut: 'Actif', dateInsc: '15 Juin 2026' },
  { id: 8, prenom: 'Cheikh', nom: 'Sarr', sexe: 'M', email: 'cheikh.sarr@yahoo.fr', telephone: '+221 70 890 12 34', role: 'Propriétaire', statut: 'Actif', dateInsc: '28 Juin 2026' },
  { id: 9, prenom: 'Ndèye', nom: 'Gueye', sexe: 'F', email: 'ndeye.gueye@gmail.com', telephone: '+221 77 901 23 45', role: 'Joueur', statut: 'Actif', dateInsc: '03 Jul 2026' },
  { id: 10, prenom: 'Abdoulaye', nom: 'Kane', sexe: 'M', email: 'abdoulaye.kane@gmail.com', telephone: '+221 78 012 34 56', role: 'Propriétaire', statut: 'Suspendu', dateInsc: '14 Jul 2026' },
  { id: 11, prenom: 'Khady', nom: 'Thiam', sexe: 'F', email: 'khady.thiam@outlook.com', telephone: '+221 76 111 22 33', role: 'Joueur', statut: 'Actif', dateInsc: '20 Jul 2026' },
  { id: 12, prenom: 'Pape', nom: 'Sy', sexe: 'M', email: 'pape.sy@gmail.com', telephone: '+221 70 222 33 44', role: 'Joueur', statut: 'Actif', dateInsc: '05 Août 2026' },
];

const roleFiltres = ['Tous', 'Joueur', 'Propriétaire', 'Admin'];

const statutFiltres = ['Tous', 'Actif', 'Suspendu'];

function Utilisateurs() {
  const [users, setUsers] = useState(utilisateursInit);
  const [roleFilter, setRoleFilter] = useState('Tous');
  const [statutFilter, setStatutFilter] = useState('Tous');
  const [recherche, setRecherche] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalView, setModalView] = useState(null);
  const [modalEdit, setModalEdit] = useState(null);
  const [form, setForm] = useState({ prenom: '', nom: '', sexe: 'M', email: '', telephone: '' });

  const filtered = users.filter(u => {
    if (roleFilter !== 'Tous' && u.role !== roleFilter) return false;
    if (statutFilter !== 'Tous' && u.statut !== statutFilter) return false;
    if (recherche) {
      const q = recherche.toLowerCase();
      const match = u.prenom.toLowerCase().includes(q) || u.nom.toLowerCase().includes(q) || u.email.toLowerCase().includes(q) || u.telephone.includes(q);
      if (!match) return false;
    }
    return true;
  });

  const handleOpenModal = () => {
    setForm({ prenom: '', nom: '', sexe: 'M', email: '', telephone: '' });
    setModalOpen(true);
  };

  const handleEdit = (user) => {
    setForm({ prenom: user.prenom, nom: user.nom, sexe: user.sexe, email: user.email, telephone: user.telephone });
    setModalEdit(user);
  };

  const handleSave = () => {
    if (modalEdit) {
      setUsers(prev => prev.map(u => u.id === modalEdit.id ? { ...u, ...form } : u));
      setModalEdit(null);
    } else {
      const newUser = {
        id: users.length + 1,
        ...form,
        role: 'Propriétaire',
        statut: 'Actif',
        dateInsc: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
      };
      setUsers(prev => [...prev, newUser]);
      setModalOpen(false);
    }
  };

  const handleArchive = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, statut: u.statut === 'Suspendu' ? 'Actif' : 'Suspendu' } : u));
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalEdit(null);
    setModalView(null);
  };

  const openModalForm = modalOpen || modalEdit;

  return (
    <div className="admin-page">

      <div className="admin-page-header">
        <div className="admin-page-header-row">
          <div>
            <h1>Gérer les utilisateurs</h1>
            <p>Consultez, modifiez ou suspendez les comptes joueurs et propriétaires.</p>
          </div>
          <button className="btn-primary" onClick={handleOpenModal}>
            <i className="bi bi-plus-lg"></i>
            Ajouter propriétaire
          </button>
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-filters-bar">
          <div className="admin-search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Rechercher un utilisateur..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
          </div>
          <div className="admin-filters-group">
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
              {roleFiltres.map(r => <option key={r} value={r}>{r === 'Tous' ? 'Tous les rôles' : r}</option>)}
            </select>
            <select value={statutFilter} onChange={(e) => setStatutFilter(e.target.value)}>
              {statutFiltres.map(s => <option key={s} value={s}>{s === 'Tous' ? 'Tous les statuts' : s}</option>)}
            </select>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Utilisateur</th>
                <th>Contact</th>
                <th>Rôle</th>
                <th>Statut</th>
                <th>Inscrit le</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id}>
                  <td>
                    <div className="user-cell">
                      <div className={`user-avatar-sm ${u.sexe === 'F' ? 'female' : ''}`}>
                        {u.prenom.charAt(0)}{u.nom.charAt(0)}
                      </div>
                      <div className="user-cell-info">
                        <span className="user-cell-name">{u.prenom} {u.nom}</span>
                        <span className="user-cell-id">ID-{String(u.id).padStart(4, '0')}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="contact-cell">
                      <span>{u.email}</span>
                      <span className="contact-phone">{u.telephone}</span>
                    </div>
                  </td>
                  <td><span className={`role-badge role-${u.role.toLowerCase()}`}>{u.role}</span></td>
                  <td><span className={`statut-badge ${u.statut === 'Actif' ? 'statut-actif' : 'statut-suspendu'}`}>{u.statut}</span></td>
                  <td className="td-date">{u.dateInsc}</td>
                  <td>
                    <div className="actions-cell">
                      <button className="action-btn action-view" title="Voir" onClick={() => setModalView(u)}>
                        <i className="bi bi-eye"></i>
                      </button>
                      <button className="action-btn action-edit" title="Modifier" onClick={() => handleEdit(u)}>
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className={`action-btn ${u.statut === 'Suspendu' ? 'action-reactivate' : 'action-archive'}`} title={u.statut === 'Suspendu' ? 'Réactiver' : 'Archiver'} onClick={() => handleArchive(u.id)}>
                        <i className={`bi ${u.statut === 'Suspendu' ? 'bi-arrow-counterclockwise' : 'bi-archive'}`}></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="6" className="td-empty">
                    <div className="empty-state">
                      <img src={EmptyImg} alt="Aucun utilisateur" className="empty-state-img" />
                      <p>Aucun utilisateur trouvé.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="admin-table-footer">
          <span>{filtered.length} utilisateur{filtered.length > 1 ? 's' : ''}</span>
        </div>
      </div>

      {openModalForm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modalEdit ? 'Modifier l\'utilisateur' : 'Ajouter un propriétaire'}</h3>
              <button className="modal-close" onClick={closeModal}><i className="bi bi-x-lg"></i></button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group">
                  <label>Prénom</label>
                  <input type="text" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })} placeholder="Ex: Amadou" />
                </div>
                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" value={form.nom} onChange={(e) => setForm({ ...form, nom: e.target.value })} placeholder="Ex: Ndiaye" />
                </div>
              </div>
              <div className="form-group">
                <label>Sexe</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input type="radio" name="sexe" value="M" checked={form.sexe === 'M'} onChange={(e) => setForm({ ...form, sexe: e.target.value })} />
                    <span>Masculin</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="sexe" value="F" checked={form.sexe === 'F'} onChange={(e) => setForm({ ...form, sexe: e.target.value })} />
                    <span>Féminin</span>
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Ex: amadou@gmail.com" />
                </div>
                <div className="form-group">
                  <label>Téléphone</label>
                  <input type="tel" value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })} placeholder="Ex: +221 77 123 45 67" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={closeModal}>Annuler</button>
              <button className="btn-primary" onClick={handleSave}>{modalEdit ? 'Enregistrer' : 'Ajouter'}</button>
            </div>
          </div>
        </div>
      )}

      {modalView && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content modal-view" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Détails de l'utilisateur</h3>
              <button className="modal-close" onClick={closeModal}><i className="bi bi-x-lg"></i></button>
            </div>
            <div className="modal-body">
              <div className="view-user-header">
                <div className={`view-avatar ${modalView.sexe === 'F' ? 'female' : ''}`}>
                  {modalView.prenom.charAt(0)}{modalView.nom.charAt(0)}
                </div>
                <div>
                  <h4>{modalView.prenom} {modalView.nom}</h4>
                  <span className={`role-badge role-${modalView.role.toLowerCase()}`}>{modalView.role}</span>
                </div>
              </div>
              <div className="view-details">
                <div className="view-row"><span className="view-label">Email</span><span>{modalView.email}</span></div>
                <div className="view-row"><span className="view-label">Téléphone</span><span>{modalView.telephone}</span></div>
                <div className="view-row"><span className="view-label">Sexe</span><span>{modalView.sexe === 'M' ? 'Masculin' : 'Féminin'}</span></div>
                <div className="view-row"><span className="view-label">Statut</span><span className={`statut-badge ${modalView.statut === 'Actif' ? 'statut-actif' : 'statut-suspendu'}`}>{modalView.statut}</span></div>
                <div className="view-row"><span className="view-label">Inscrit le</span><span>{modalView.dateInsc}</span></div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={closeModal}>Fermer</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Utilisateurs;