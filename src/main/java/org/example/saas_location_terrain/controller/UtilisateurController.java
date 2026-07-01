package org.example.saas_location_terrain.controller;

import lombok.RequiredArgsConstructor;
import org.example.saas_location_terrain.model.Utilisateur;
import org.example.saas_location_terrain.service.UtilisateurService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/nomSaas/utilisateurs")
public class UtilisateurController {
    private final UtilisateurService utilisateurService;

    @PostMapping
    public ResponseEntity<Utilisateur> createUtilisateur(@RequestBody Utilisateur utilisateur) {
        return new ResponseEntity<>(utilisateurService.save(utilisateur), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Utilisateur>> getAllUtilisateurs() {
        return new ResponseEntity<>(utilisateurService.findAllUtilisateurs(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Utilisateur>> getUtilisateurById(@PathVariable String id) {
        return new ResponseEntity<>(utilisateurService.findById(id), HttpStatus.OK);

    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUtilisateurById(@PathVariable String id) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Utilisateur> updateUtilisateur(@PathVariable String id, @RequestBody Utilisateur utilisateur) {
        return new ResponseEntity<>(utilisateurService.updateUtilisateur(id, utilisateur), HttpStatus.OK);
    }
   @PatchMapping("activer/{id}")
    public ResponseEntity<Utilisateur> enableUtilisateur(@PathVariable String id) {
        return new ResponseEntity<>(utilisateurService.enableUtilisateurById(id),HttpStatus.OK);

   }
    @PatchMapping("desactiver/{id}")
    public ResponseEntity<Utilisateur> disableUtilisateur(@PathVariable String id) {
        return new ResponseEntity<>(utilisateurService.disableUtilisateurById(id),HttpStatus.OK);

    }
    @PatchMapping("archiver/{id}")
    public ResponseEntity<Utilisateur> archiverUtilisateur(@PathVariable String id) {
        return new ResponseEntity<>(utilisateurService.archiveUtilisateurById(id),HttpStatus.OK);

    }

}
