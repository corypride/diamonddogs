package org.launchcode.happyroots.services;

import org.apache.coyote.Response;
import org.launchcode.happyroots.models.CareInformation;
import org.launchcode.happyroots.models.data.ApiResponse;
import org.launchcode.happyroots.models.data.DataItem;
import org.launchcode.happyroots.models.data.SectionItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Objects;

@Service
public class ApiService {

    @Value("${perenual.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    @Autowired
    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public CareInformation getCareInformationById(int speciesId) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-care-guide-list")
                .queryParam("key", apiKey)
                .queryParam("species_id", speciesId);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return extractCareInformation(Objects.requireNonNull(response.getBody()));
    }

    public CareInformation getCareInformationByCommonName(String commonName) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-care-guide-list")
                .queryParam("key", apiKey)
                .queryParam("q", commonName);
        String url = builder.toUriString();

        ResponseEntity<CareInformation> response = restTemplate.getForEntity(url, CareInformation.class);
        return response.getBody();
    }

    public List<DataItem> getSpeciesList() {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(response.getBody()).getData();
    }

    public CareInformation extractCareInformation(ApiResponse apiResponse) {
        CareInformation careInfo = new CareInformation();
        for (DataItem item : apiResponse.getData()) {
            for (SectionItem section : item.getSection()) {
                switch (section.getCareType()) {
                    case "watering":
                        careInfo.setWateringDesc(section.getCareDescription());
                        break;
                    case "sunlight":
                        careInfo.setSunlightDesc(section.getCareDescription());
                        break;
                    case "pruning":
                        careInfo.setPruningDesc(section.getCareDescription());
                        break;
                }
            }
        }
        return careInfo;
    }
}
