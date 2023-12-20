package org.launchcode.happyroots.Models;



import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@NoArgsConstructor
public class Plant extends AbstractEntity{


    private int speciesId;  //corresponds to 'species_id'
    private String commonName;
    private String thumbnail;
    private String originalUrl;
    private String cycle;

    @OneToOne(cascade = CascadeType.ALL)
    private CareInformation careInformation;

}


