package org.example.saas_location_terrain.service;

import lombok.RequiredArgsConstructor;
import org.example.saas_location_terrain.enums.EtatUtilisateur;
import org.example.saas_location_terrain.exceptions.EmailAlreadyUsedException;
import org.example.saas_location_terrain.exceptions.TelephoneAlreadyUsedException;
import org.example.saas_location_terrain.exceptions.UtilisateurNotFoundException;
import org.example.saas_location_terrain.model.Utilisateur;
import org.example.saas_location_terrain.repository.UtilisateurRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UtilisateurService {
    private final UtilisateurRepository utilisateurRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    public Utilisateur save(Utilisateur utilisateur) {
        if(utilisateurRepository.findByEmail(utilisateur.getEmail()).isPresent()) throw new EmailAlreadyUsedException("Cet email existe déjà");
        if (utilisateurRepository.findByTelephone(utilisateur.getTelephone()).isPresent()) throw new TelephoneAlreadyUsedException("Ce numéro de téléphone existe déjà");

        utilisateur.setId(UUID.randomUUID().toString().substring(0,7));
        utilisateur.setEtatUtilisateur(EtatUtilisateur.ACTIF);
        utilisateur.setMotDePasse(bCryptPasswordEncoder.encode(utilisateur.getMotDePasse()));
        return utilisateurRepository.save(utilisateur);
    }
    public Optional<Utilisateur> findByEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }
    public Optional<Utilisateur> findById(String id) {
        return utilisateurRepository.findById(id);
    }
    public Optional<Utilisateur> findByTelephone(String telephone) {
        return utilisateurRepository.findByTelephone(telephone);
    }
    public void deleteUtilisateurById(String id) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findById(id);
        if (utilisateur.isPresent()) {
            utilisateurRepository.deleteById(id);
        }
        else throw new UtilisateurNotFoundException("Utilisateur introuvable");


    }
    public List<Utilisateur> findAllUtilisateurs() {
        return  utilisateurRepository.findAll();
    }

    public Utilisateur updateUtilisateur(String id,Utilisateur utilisateur) {
        Optional<Utilisateur> utilisateurOptional = utilisateurRepository.findById(id);
        if (utilisateurOptional.isPresent()) {
            Utilisateur old =  utilisateurOptional.get();
            old.setNom(utilisateur.getNom());
            old.setPrenom(utilisateur.getPrenom());
            old.setTelephone(utilisateur.getTelephone());
            old.setEmail(utilisateur.getEmail());
            old.setMotDePasse(utilisateur.getMotDePasse());
            old.setEtatUtilisateur(utilisateur.getEtatUtilisateur());
            old.setRole(utilisateur.getRole());
            old.setSexe(utilisateur.getSexe());
            old.setDateDeCreation(utilisateur.getDateDeCreation());
            return utilisateurRepository.save(old);

        }
        else throw new UtilisateurNotFoundException("Utilisateur introuvable");
    }

    public Utilisateur activateUtilisateurById(String id) {
        Optional<Utilisateur> utilisateurOptional = utilisateurRepository.findById(id);
        if (utilisateurOptional.isPresent()) {
            Utilisateur utilisateur = utilisateurOptional.get();
            utilisateur.setEtatUtilisateur(EtatUtilisateur.ACTIF);
            return utilisateurRepository.save(utilisateur);
        }
        else throw new UtilisateurNotFoundException("Utilisateur introuvable");
    }

    public Utilisateur enableUtilisateurById(String id) {
        Optional<Utilisateur> utilisateurOptional = utilisateurRepository.findById(id);
        if (utilisateurOptional.isPresent()) {
            Utilisateur utilisateur = utilisateurOptional.get();
            utilisateur.setEtatUtilisateur(EtatUtilisateur.ACTIF);
            return utilisateurRepository.save(utilisateur);
        }
        else throw new UtilisateurNotFoundException("Utilisateur introuvable");
    }

    public Utilisateur disableUtilisateurById(String id) {
        Optional<Utilisateur> utilisateurOptional = utilisateurRepository.findById(id);
        if (utilisateurOptional.isPresent()) {
            Utilisateur utilisateur = utilisateurOptional.get();
            utilisateur.setEtatUtilisateur(EtatUtilisateur.INACTIF);
            return utilisateurRepository.save(utilisateur);
        }
        else throw new UtilisateurNotFoundException("Utilisateur introuvable");
    }

    public Utilisateur archiveUtilisateurById(String id) {
        Optional<Utilisateur> utilisateurOptional = utilisateurRepository.findById(id);
        if (utilisateurOptional.isPresent()) {
            Utilisateur utilisateur = utilisateurOptional.get();
            utilisateur.setEtatUtilisateur(EtatUtilisateur.ARCHIVE);
            return utilisateurRepository.save(utilisateur);
        }
        else throw new UtilisateurNotFoundException("Utilisateur introuvable");
    }

}
