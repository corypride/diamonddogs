package org.launchcode.happyroots.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CareInformation {

//    Fields
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String wateringDesc;
    private String sunlightDesc;
    private String pruningDesc;

//  Constructors
    public CareInformation (){}

    public CareInformation(int id, String wateringDesc, String sunlightDesc, String pruningDesc) {
        this.id = id;
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
