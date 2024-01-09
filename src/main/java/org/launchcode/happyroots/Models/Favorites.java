package org.launchcode.happyroots.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "favorites", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"userId", "speciesId"})})
public class Favorites extends AbstractEntity{

    @Column(name = "user_id")
    private String userId;

    @Column(name = "species_id")
    private int speciesId;

    private String commonName;

}





