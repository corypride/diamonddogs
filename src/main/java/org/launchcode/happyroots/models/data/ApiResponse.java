package org.launchcode.happyroots.models.data;

import java.util.List;

//Maps entire JSON response. Top-level class to encapsulate complete response structure

public class ApiResponse {

//    Fields
    private List<DataItem> data;

//  Getters/Setters
    public List<DataItem> getData() {
        return data;
    }

    public void setData(List<DataItem> data) {
        this.data = data;
    }

}