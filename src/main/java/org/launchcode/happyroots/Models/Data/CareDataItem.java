package org.launchcode.happyroots.Models.Data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class CareDataItem {

    private int id;

    @JsonProperty("species_id")
    private int speciesId;

    @JsonProperty("common_name")
    private String commonName;

    private List<SectionItem> section;

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

    public List<SectionItem> getSection() {
        return section;
    }

    public void setSection(List<SectionItem> section) {
        this.section = section;
    }
}
