package org.launchcode.happyroots.Models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Plant extends AbstractEntity {


//
//    @ManyToOne
//    @JoinColumn(name = "profile_id")
//    private Profile profile_id;

//    @OneToMany
    private String plantId;



//    @ManyToMany(mappedBy = "plants")
//    private List<Plant> plants = new ArrayList<>();

}
