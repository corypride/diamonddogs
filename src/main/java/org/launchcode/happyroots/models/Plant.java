package org.launchcode.happyroots.Models;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
public class Plant extends AbstractEntity{


    private int speciesId;  //corresponds to 'species_id'
    private String commonName;

    @OneToOne(cascade = CascadeType.ALL)
    private CareInformation careInformation;

    private String thumbnail;
    private String originalUrl;
    private String cycle;

//    @ManyToMany(mappedBy = "plants")
//    private List<Favorite> favorites;

//  Constructor
    public Plant() {
    }
//    public Plant(CareInformation careInformation, int speciesId, String commonName, String thumbnail, String originalUrl, String cycle) {
//        this.careInformation = careInformation;
//        this.speciesId = speciesId;
//        this.commonName = commonName;
//        this.thumbnail = thumbnail;
//        this.originalUrl = originalUrl;
//        this.cycle = cycle;
//    }


}



//package org.launchcode.happyroots.Models;
//
//
//import jakarta.persistence.*;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.util.Collection;
//
//@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//public class Plant extends AbstractEntity {
//
//
//
//
//    private String speciesId;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "profile_id")
//    private Profile profile;
//
//
//
//
//
////    @ManyToOne
////    @JoinColumn(name = "profileId")
////    private Profile profile;
//
////    @ManyToMany(mappedBy = "profileId")
////    private Collection<Plant> speciesId;
////    private String plantId;
////
////    @ManyToOne
////    @JoinColumn(name = "profile_id")
////    private Profile profile_id;
//
////    @OneToMany
//
//
//
////    @ManyToMany(mappedBy = "plants")
////    private List<Plant> plants = new ArrayList<>();
//
//}

