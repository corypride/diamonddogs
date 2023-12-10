package org.launchcode.happyroots.models.data;

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

    @JsonProperty("watering")
    private String wateringBrief;

    @JsonProperty("sunlight")
    private List<String> sunlightBrief;

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

    public String getWateringBrief() {
        return wateringBrief;
    }

    public void setWateringBrief(String wateringBrief) {
        this.wateringBrief = wateringBrief;
    }

    public List<String> getSunlightBrief() {
        return sunlightBrief;
    }

    public void setSunlightBrief(List<String> sunlightBrief) {
        this.sunlightBrief = sunlightBrief;
    }

    public ImageInfo getDefaultImage() {
        return defaultImage;
    }

    public void setDefaultImage(ImageInfo defaultImage) {
        this.defaultImage = defaultImage;
    }
}