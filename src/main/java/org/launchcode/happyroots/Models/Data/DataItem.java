package org.launchcode.happyroots.Models.Data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

//Maps each individual item in data array of api response.
//This is where core info (species id, name) are stored

public class DataItem {

    //    Fields
    @JsonProperty("id")
    private int speciesId;

    @JsonProperty("common_name")
    private String commonName;

    @JsonProperty("scientific_name")
    private List<String> scientificName;

    @JsonProperty("default_image")
    private ImageInfo defaultImage;

    private String cycle;
    private String watering;
    private List<String> sunlight;


    //    Getters/Setters


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

    public List<String> getScientificName() {
        return scientificName;
    }

    public void setScientificName(List<String> scientificName) {
        this.scientificName = scientificName;
    }

    public String getCycle() {
        return cycle;
    }

    public void setCycle(String cycle) {
        this.cycle = cycle;
    }

    public String getWatering() {
        return watering;
    }

    public void setWatering(String watering) {
        this.watering = watering;
    }

    public List<String> getSunlight() {
        return sunlight;
    }

    public void setSunlight(List<String> sunlight) {
        this.sunlight = sunlight;
    }

    public ImageInfo getDefaultImage() {
        return defaultImage;
    }

    public void setDefaultImage(ImageInfo defaultImage) {
        this.defaultImage = defaultImage;
    }
}