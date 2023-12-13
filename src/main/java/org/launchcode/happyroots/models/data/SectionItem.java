package org.launchcode.happyroots.models.data;

import com.fasterxml.jackson.annotation.JsonProperty;

//Class represents subsection of DataItem. Models care instructions and their values

public class SectionItem {

//    Fields
    @JsonProperty("type")
    private String careType;

    @JsonProperty("description")
    private String careDescription;

    @JsonProperty("id")
    private int sectionId;

//    Getters/Setters
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