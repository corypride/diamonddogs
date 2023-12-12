package org.launchcode.happyroots.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "favorite")
public class Favorite extends AbstractEntity {


    @Column(name = "name")
    private String name;

    @Column(name = "userId")
    private String userId;

    @Column(name = "plantId")
    private String plantId;



    public Favorite() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getPlantId() {
        return plantId;
    }

    public void setPlantId(String plantId) {
        this.plantId = plantId;
    }
}
