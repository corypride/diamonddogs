package org.launchcode.happyroots.Models;


import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Profile extends AbstractEntity {

//
//    @OneToMany
//    @JoinColumn(name = "favorite_id")
    private List<Plant> plants = new ArrayList<>();


    private String name;
    private String userId;
    private String email;
    private String phoneNumber;
    private String imageURL;


}
