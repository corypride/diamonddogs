package org.launchcode.happyroots.Models;


import jakarta.persistence.*;

@Entity
public class Plant {

//    Fields
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    private CareInformation careInformation;

    private String commonName;
    private String thumbnail;
    private String originalUrl;
    private String cycle;
    private int speciesId;

//  Constructor
    public Plant() {}

    public Plant(int id, CareInformation careInformation, String commonName, String thumbnail, String originalUrl, String cycle, int speciesId) {
        this.id = id;
        this.careInformation = careInformation;
        this.commonName = commonName;
        this.thumbnail = thumbnail;
        this.originalUrl = originalUrl;
        this.cycle = cycle;
        this.speciesId = speciesId;
    }

    //  Getters/Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public int getSpeciesId() {
        return speciesId;
    }

    public void setSpeciesId(int speciesId) {
        this.speciesId = speciesId;
    }
}
