package org.launchcode.happyroots.models.data;

import java.util.List;

public class FaqApiResponse {
    // Maps entire JSON response of FAQ JSON. Top-level class to encapsulate complete response structure
    private List<FaqItem> data;

    // Getters and Setters
    public List<FaqItem> getData() {
        return data;
    }

    public void setData(List<FaqItem> data) {
        this.data = data;
    }
}
