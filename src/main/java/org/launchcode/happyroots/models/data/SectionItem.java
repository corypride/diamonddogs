package org.launchcode.happyroots.Models.Data;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SectionItem {

    @JsonProperty("type")
    private String careType;

    @JsonProperty("description")
    private String careDescription;

    @JsonProperty("id")
    private int sectionId;

    public String getCareType() {
        return careType;
    }

    public void setCareType(String careType) {
        this.careType = careType;
    }

    public String getCareDescription() {
        return careDescription;
    }

    public void setCareDescription(String careDescription) {
        this.careDescription = careDescription;
    }

    public int getSectionId() {
        return sectionId;
    }

    public void setSectionId(int sectionId) {
        this.sectionId = sectionId;
    }
}