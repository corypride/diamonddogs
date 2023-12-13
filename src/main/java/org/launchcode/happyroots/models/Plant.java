package org.launchcode.happyroots.models;


import jakarta.persistence.*;

@Entity
public class Plant {

//    Fields
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    private CareInformation careInformation;

    private int speciesId;
    private String commonName;

//  Constructor
    public Plant(int id, int speciesId, String commonName, CareInformation careInformation) {
        this.id = id;
        this.speciesId = speciesId;
        this.commonName = commonName;
        this.careInformation = careInformation;
    }

//  Getters/Setters
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

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public CareInformation getCareInformation() {
        return careInformation;
    }

    public void setCareInformation(CareInformation careInformation) {
        this.careInformation = careInformation;
    }
}
