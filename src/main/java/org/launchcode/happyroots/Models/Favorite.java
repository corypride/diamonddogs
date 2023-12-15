package org.launchcode.happyroots.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.*;

import java.util.Collection;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Favorite extends AbstractEntity {

//    private final Profile profile;
//    private String name;

    private String userId;

    private String plantId;



    // Initialize the id and value fields.
    public Favorite(Profile aProfile, List<Plant> somePlants) {
        super();
//        this.profile = aProfile;
        this.plants = somePlants;
    }
//    @OneToOne
//    @ManyToMany(mappedBy = "profile_id")
//    private String profileId;

//
//    @ManyToMany(mappedBy = "profile_id")
//    private Collection <Profile> profiles;
//
//    @ManyToMany(mappedBy = "profile_id")
    @ManyToMany
    private Collection<Plant> plants;

}


//    old getters and setters without lombok
//    public Favorite() {
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getUserId() {
//        return userId;
//    }
//
//    public void setUserId(String userId) {
//        this.userId = userId;
//    }
//
//    public String getPlantId() {
//        return plantId;
//    }
//
//    public void setPlantId(String plantId) {
//        this.plantId = plantId;
//    }

//    @Override
//    public String toString() {
//        return "{" +
//                "name : '" + name + '\'' +
//                ", userId : '" + userId + '\'' +
//                ", plantId : '" + plantId + '\'' +
//                '}';
//    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (!(o instanceof Favorite favorite)) return false;
//        return Objects.equals(getName(), favorite.getName()) && Objects.equals(getUserId(), favorite.getUserId()) && Objects.equals(getPlantId(), favorite.getPlantId());
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(getName(), getUserId(), getPlantId());
//    }
//}


