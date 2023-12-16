package org.launchcode.happyroots.models.data;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class FaqItem {
    private int id;
    private String question;
    private String answer;
    private List<String> tags;

    @JsonProperty("default_image")
    private ImageInfo defaultImage;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public ImageInfo getDefaultImage() {
        return defaultImage;
    }

    public void setDefaultImage(ImageInfo defaultImage) {
        this.defaultImage = defaultImage;
    }
}
