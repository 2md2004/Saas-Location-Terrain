package org.example.saas_location_terrain.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.saas_location_terrain.enums.EtatUtilisateur;
import org.example.saas_location_terrain.enums.Role;
import org.example.saas_location_terrain.enums.Sexe;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Utilisateur {
    @Id
    private String id;
    @Column(nullable = false,length = 20)
    private String nom;
    @Column(nullable = false,length = 20)
    private String prenom;
    @Column(nullable = false,length = 20)
    private String email;
    @Column(nullable = false,length = 20)
    private String telephone;
    private String motDePasse;
    @Enumerated(EnumType.STRING)
    private Sexe sexe;
    @Enumerated(EnumType.STRING)
    private Role role;
    @Enumerated(EnumType.STRING)
    private EtatUtilisateur etatUtilisateur;
    private LocalDateTime dateDeCreation = LocalDateTime.now();
}
