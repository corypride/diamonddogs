package org.launchcode.happyroots.Models;


import jakarta.persistence.*;

@Entity
public class Plant extends AbstractEntity {


    private int speciesId;  //corresponds to 'species_id'
    private String commonName;

    @OneToOne(cascade = CascadeType.ALL)
    private CareInformation careInformation;

    public Plant(int speciesId, String commonName, CareInformation careInformation) {
        this.speciesId = speciesId;
        this.commonName = commonName;
        this.careInformation = careInformation;
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
