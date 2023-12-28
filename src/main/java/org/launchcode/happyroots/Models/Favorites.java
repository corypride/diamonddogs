package org.launchcode.happyroots.Models;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Favorites extends AbstractEntity{

    private String userId;
    private String commonName;
    private int speciesId;

}
