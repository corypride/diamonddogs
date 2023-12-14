package org.launchcode.happyroots.Models;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Profile extends AbstractEntity {

    private String userId;

}
