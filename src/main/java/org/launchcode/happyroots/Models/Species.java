package org.launchcode.happyroots.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "species")
public class Species {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String common_name;
    private String scientific_name;
    private String other_name;
    private String family;
    private String origin;

    private String type;
    private Double min_height;
    private Double max_height;
    private String height_unit;

    private String cycle;
    private String watering;
    private Integer depth_water_requirement;
    private Double volume_water_requirement;
    private String watering_period;
    private Integer watering_general_benchmark;


    private String bark_color;
    private String leaf_color;
    private String sunlight;
    private String pruning_months;
    private Integer pruning_count;
    private Integer seeds;
    private String attracts;
    private String propagation;
    private Integer min_hardiness;
    private Integer max_hardiness;
    private String hardiness_location;
    private Boolean flowers;
    private String flowering_season;
    private String flower_color;
    private String soil;
    private Boolean cones;
    private Boolean fruits;
    private Boolean edible_fruit;
    private String fruit_color;
    private String fruiting_season;
    private String harvest_season;
    private String harvest_method;
    private Boolean leaf;
    private Boolean edible_leaf;

    // Other properties
    private String growth_rate;
    private String maintenance;
    private Boolean medicinal;
    private Boolean poisonous_to_humans;
    private Boolean poisonous_to_pets;
    private Boolean drought_tolerant;
    private Boolean salt_tolerant;
    private Boolean thorny;
    private Boolean invasive;
    private Boolean rare;
    private Integer rare_level;
    private Boolean tropical;
    private Boolean cuisine;
    private Boolean indoor;
    private String care_level;
    private String description;

    // Image
    private String image_url;

}
