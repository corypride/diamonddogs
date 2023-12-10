package org.launchcode.happyroots.models.data;

import java.util.List;

public class ApiResponse {

    private List<DataItem> data;

    public List<DataItem> getData() {
        return data;
    }

    public void setData(List<DataItem> data) {
        this.data = data;
    }
}