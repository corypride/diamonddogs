package org.launchcode.happyroots.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CareInformation extends AbstractEntity{



    private String wateringDesc;
    private String sunlightDesc;
    private String pruningDesc;

    public CareInformation (){}

    public CareInformation(String wateringDesc, String sunlightDesc, String pruningDesc) {

        this.wateringDesc = wateringDesc;
        this.sunlightDesc = sunlightDesc;
        this.pruningDesc = pruningDesc;
    }



    public String getWateringDesc() {
        return wateringDesc;
    }

    public void setWateringDesc(String wateringDesc) {
        this.wateringDesc = wateringDesc;
    }

    public String getSunlightDesc() {
        return sunlightDesc;
    }

    public void setSunlightDesc(String sunlightDesc) {
        this.sunlightDesc = sunlightDesc;
    }

    public String getPruningDesc() {
        return pruningDesc;
    }

    public void setPruningDesc(String pruningDesc) {
        this.pruningDesc = pruningDesc;
    }
}
