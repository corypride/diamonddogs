package org.launchcode.happyroots.Models;

import jakarta.persistence.Entity;

@Entity
public class Favorite extends AbstractEntity {

    private String name;

    public Favorite() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
