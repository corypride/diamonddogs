package org.launchcode.happyroots.models.data;

import java.util.List;

public class FaqApiResponse {
    // This field must match the JSON response structure
    private List<FaqItem> data;

    // Getters and Setters
    public List<FaqItem> getData() {
        return data;
    }

    public void setData(List<FaqItem> data) {
        this.data = data;
    }
}
