package org.launchcode.happyroots.Services;

import org.launchcode.happyroots.Models.Data.*;
import org.launchcode.happyroots.Models.Plant;
import org.launchcode.happyroots.Models.CareInformation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;


import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ApiService {

    // Fields
    private static final Logger log = LoggerFactory.getLogger(ApiService.class);

    private static final int MAX_PAGES = 5; // Maximum number of pages to fetch
    private static final int ITEMS_PER_PAGE = 30; // Items per page as defined by the API

    //   Perenual api key
    @Value("${perenual.api.key}")
    private String apiKey;



    private final RestTemplate restTemplate;

    @Autowired
    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    //    Api call methods
    public CareInformation getCareInformationById(int speciesId) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-care-guide-list")
                .queryParam("key", apiKey)
                .queryParam("species_id", speciesId);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return extractCareInformation(Objects.requireNonNull(response.getBody()));
    }
    //    Returns care information by common name
    public CareInformation getCareInformationByCommonName(String commonName) {
        log.info("Common Name: " + commonName);

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-care-guide-list")
                .queryParam("key", apiKey)
                .queryParam("q", commonName);
        String url = builder.toUriString();
        log.info("Making API request to URL: " + url);

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        log.info("API Response: " + response);
        return extractCareInformation(Objects.requireNonNull(response.getBody()));
    }

    public List<DataItem> getSpeciesList() {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(response.getBody()).getData();
    }

    public List<DataItem> getSpeciesListSortBySunlight(String sunlight) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("sunlight", sunlight);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(response.getBody().getData());
    }

    public List<DataItem> getSpeciesListSortByWater(String watering) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("watering", watering);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(response.getBody().getData());
    }

    public List<DataItem> getSpeciesListSortByCycle(String cycle) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("cycle", cycle);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(response.getBody().getData());
    }

    public List<FaqItem> getFaqByTag(String tags) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/article-faq-list")
                .queryParam("key", apiKey)
                .queryParam("q", tags);
        String url = builder.toUriString();

        ResponseEntity<FaqApiResponse> response = restTemplate.getForEntity(url, FaqApiResponse.class);
        return Objects.requireNonNull(response.getBody().getData());
    }

//    Gets multiple (5) pages of species list data at once
    public List<DataItem> getAllSpecies() {
        List<DataItem> allSpecies = new ArrayList<>();
        int page = 1; // Start from page 1

        while (page <= MAX_PAGES) {
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                    .queryParam("key", apiKey)
                    .queryParam("page", page);
            String url = builder.toUriString();

            ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
            ApiResponse apiResponse = response.getBody();

            if (apiResponse != null && apiResponse.getData() != null) {
                allSpecies.addAll(apiResponse.getData());
                page++; // Increment to get the next page in the next iteration
            } else {
                // If the API response is null or doesn't contain any data, stop fetching more pages
                break;
            }
        }

        return allSpecies;
    }

    public Plant extractPlantInformation(ApiResponse apiResponse) {
        if (apiResponse.getData() == null || apiResponse.getData().isEmpty()) {
            return null;
        }

        DataItem firstItem = apiResponse.getData().get(0); // Get the first DataItem
        Plant plant = new Plant();
        plant.setSpeciesId(firstItem.getSpeciesId());
        plant.setCommonName(firstItem.getCommonName());
        plant.setCycle(firstItem.getCycle());
        plant.setThumbnail(firstItem.getDefaultImage().getThumbnail());
        plant.setOriginalUrl(firstItem.getDefaultImage().getOriginalUrl());
        plant.setCareInformation(new CareInformation());
        return plant;
    }

    //    Care info pulled from JSON
    private void updateCareInformation(CareInformation careInfo, List<SectionItem> sections) {
        for (SectionItem section : sections) {
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

    //  Helper method for Update Care Information method
    public CareInformation extractCareInformation(ApiResponse apiResponse) {
        CareInformation careInfo = new CareInformation();
        for (DataItem item : apiResponse.getData()) {
            updateCareInformation(careInfo, item.getSection());
        }
        return careInfo;
    }

    // Combines plant list and care list data into one step. Search by common name
    public Plant mergeSpeciesAndCareGuideData(String commonName) {
        // Fetch species list data by common name
        UriComponentsBuilder speciesBuilder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("q", commonName);
        ResponseEntity<ApiResponse> speciesResponse = restTemplate.getForEntity(speciesBuilder.toUriString(), ApiResponse.class);
        Plant plant = extractPlantInformation(Objects.requireNonNull(speciesResponse.getBody()));

        // Fetch care guide data by common name
        CareInformation careInfo = getCareInformationByCommonName(commonName);
        if (careInfo != null) {
            plant.setCareInformation(careInfo);
        }

        return plant;
    }
}
