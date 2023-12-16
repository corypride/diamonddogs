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
    private String thumbnail;
    private String originalUrl;
    private String cycle;

//  Constructor
    public Plant() {
    }
    public Plant(int id, CareInformation careInformation, int speciesId, String commonName, String thumbnail, String originalUrl, String cycle) {
        this.id = id;
        this.careInformation = careInformation;
        this.speciesId = speciesId;
        this.commonName = commonName;
        this.thumbnail = thumbnail;
        this.originalUrl = originalUrl;
        this.cycle = cycle;
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

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public void setOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
    }

    public String getCycle() {
        return cycle;
    }

    public void setCycle(String cycle) {
        this.cycle = cycle;
    }
}
