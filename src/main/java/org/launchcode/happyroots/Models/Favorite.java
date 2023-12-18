package org.launchcode.happyroots.Models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Favorite extends AbstractEntity {

//    private String name;

    private String userId;

//    @OneToOne
//    private String profileId;

    private String thumbnail;

    //    @ManyToMany
    private String plantId;

    private int speciesId;

//    @Getter
//    @ManyToMany(cascade = CascadeType.ALL)
//    private List<Plant> plants = new ArrayList<>();

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



