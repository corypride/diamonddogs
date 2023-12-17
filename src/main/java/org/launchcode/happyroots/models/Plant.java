package org.launchcode.happyroots.Models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Plant extends AbstractEntity {

//  Getters/Setters
    //    Fields


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
    public Plant(CareInformation careInformation, int speciesId, String commonName, String thumbnail, String originalUrl, String cycle) {
        this.careInformation = careInformation;
        this.speciesId = speciesId;
        this.commonName = commonName;
        this.thumbnail = thumbnail;
        this.originalUrl = originalUrl;
        this.cycle = cycle;
    }

}
