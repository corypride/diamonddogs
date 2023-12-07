package org.launchcode.happyroots.Models;

public abstract class AbstractEntity {

    private int id;

    public AbstractEntity(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
