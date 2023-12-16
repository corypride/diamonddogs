package org.launchcode.happyroots.Models.Data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class DataItem {

    //    Fields
    @JsonProperty("id")
    private int perenualId;

    @JsonProperty("species_id")
    private int speciesId;

    @JsonProperty("common_name")
    private String commonName;

    @JsonProperty("scientific_name")
    private List<String> scientificName;

    private List<SectionItem> section;
    private String cycle;

    private String watering;

    private List<String> sunlight;

    @JsonProperty("default_image")
    private ImageInfo defaultImage;

    //    Getters/Setters
    public int getPerenualId() {
        return perenualId;
    }

    public void setPerenualId(int perenualId) {
        this.perenualId = perenualId;
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

    public List<String> getScientificName() {
        return scientificName;
    }

    public void setScientificName(List<String> scientificName) {
        this.scientificName = scientificName;
    }

    public List<SectionItem> getSection() {
        return section;
    }

    public void setSection(List<SectionItem> section) {
        this.section = section;
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