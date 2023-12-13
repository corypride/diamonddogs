package org.launchcode.happyroots.models.data;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImageInfo {

    //    Fields
    private int license;

    @JsonProperty("license_name")
    private String licenseName;

    @JsonProperty("license_url")
    private String licenseUrl;

    @JsonProperty("original_url")
    private String originalUrl;

    @JsonProperty("regular_url")
    private String regularUrl;

    @JsonProperty("medium_url")
    private String mediumUrl;

    @JsonProperty("small_url")
    private String smallUrl;

    private String thumbnail;

//    Gettters/Setters
    public int getLicense() {
        return license;
    }

    public void setLicense(int license) {
        this.license = license;
    }

    public String getLicenseName() {
        return licenseName;
    }

    public void setLicenseName(String licenseName) {
        this.licenseName = licenseName;
    }

    public String getLicenseUrl() {
        return licenseUrl;
    }

    public void setLicenseUrl(String licenseUrl) {
        this.licenseUrl = licenseUrl;
    }

    public String getOriginalUrl() {
        return originalUrl;
    }

    public void setOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
    }

    public String getRegularUrl() {
        return regularUrl;
    }

    public void setRegularUrl(String regularUrl) {
        this.regularUrl = regularUrl;
    }

    public String getMediumUrl() {
        return mediumUrl;
    }

    public void setMediumUrl(String mediumUrl) {
        this.mediumUrl = mediumUrl;
    }

    public String getSmallUrl() {
        return smallUrl;
    }

    public void setSmallUrl(String smallUrl) {
        this.smallUrl = smallUrl;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }
}