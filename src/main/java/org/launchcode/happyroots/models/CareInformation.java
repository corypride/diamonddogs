package org.launchcode.happyroots.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
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


}
