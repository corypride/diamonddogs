package org.launchcode.happyroots.models.data;

import org.launchcode.happyroots.models.CareInformation;

import java.util.List;

public class CareInfoApiResponse {

    private List<CareDataItem> data;

    public List<CareDataItem> getData() {
        return data;
    }

    public void setData(List<CareDataItem> data) {
        this.data = data;
    }
}
