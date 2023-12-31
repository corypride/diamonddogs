package org.launchcode.happyroots.Models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
public class CareInformation {

//    Fields
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JsonProperty("species_id")
    private int speciesId;

    private String wateringDesc;
    private String sunlightDesc;
    private String pruningDesc;

//  Constructors
    public CareInformation (){}

    public CareInformation(int id, int speciesId, String wateringDesc, String sunlightDesc, String pruningDesc) {
        this.id = id;
        this.speciesId = speciesId;
        this.wateringDesc = wateringDesc;
        this.sunlightDesc = sunlightDesc;
        this.pruningDesc = pruningDesc;
    }

    //  Getter/Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(int speciesId) {
        this.speciesId = speciesId;
    }

    public String getWateringDesc() {
        return wateringDesc;
    }

    public void setWateringDesc(String wateringDesc) {
        this.wateringDesc = wateringDesc;
    }

    public String getSunlightDesc() {
        return sunlightDesc;
    }

    public void setSunlightDesc(String sunlightDesc) {
        this.sunlightDesc = sunlightDesc;
    }

    public String getPruningDesc() {
        return pruningDesc;
    }

    public void setPruningDesc(String pruningDesc) {
        this.pruningDesc = pruningDesc;
    }

}
