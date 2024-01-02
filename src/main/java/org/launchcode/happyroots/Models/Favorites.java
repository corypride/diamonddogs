package org.launchcode.happyroots.Models;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLInsert;

@Entity
@Getter
@Setter
@NoArgsConstructor

@Table(name = "favorites")
public class Favorites extends AbstractEntity{

    private String userId;
    private String commonName;
    private int speciesId;

}
