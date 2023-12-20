package org.launchcode.happyroots.services;

import org.launchcode.happyroots.models.CareInformation;
import org.launchcode.happyroots.models.Plant;
import org.launchcode.happyroots.models.data.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class ApiService {

    // Fields
    private static final int MAX_PAGES = 5; // Maximum number of pages to fetch
    private final RestTemplate restTemplate;

    //Perenual api key
    @Value("${perenual.api.key}")
    private String apiKey;

    @Autowired
    public ApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    //    Api call methods

    // Returns care info by species id
    public CareInformation getCareInformationById(int speciesId) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-care-guide-list")
                .queryParam("key", apiKey)
                .queryParam("species_id", speciesId);
        String url = builder.toUriString();

        ResponseEntity<CareInfoApiResponse> response = restTemplate.getForEntity(url, CareInfoApiResponse.class);
        return extractCareInformation(Objects.requireNonNull(response.getBody()));
    }
    //    Returns care information by common name
    public CareInformation getCareInformationByCommonName(String commonName) {

        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-care-guide-list")
                .queryParam("key", apiKey)
                .queryParam("q", commonName);
        String url = builder.toUriString();

        ResponseEntity<CareInfoApiResponse> response = restTemplate.getForEntity(url, CareInfoApiResponse.class);
        System.out.println(response.getBody());
        return extractCareInformation(Objects.requireNonNull(response.getBody()));
    }
    // Returns list of species list data
    public List<DataItem> getSpeciesList() {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey);

        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(Objects.requireNonNull(response.getBody()).getData());
    }
    // Sorts species list by common name
    public List<DataItem> getSpeciesListSortByCommonName(String commonName) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("q", commonName);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(Objects.requireNonNull(response.getBody().getData()));
    }
    // sorts species list by sunlight value
    public List<DataItem> getSpeciesListSortBySunlight(String sunlight) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("sunlight", sunlight);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(Objects.requireNonNull(response.getBody()).getData());
    }
    // sorts species list by watering needs value
    public List<DataItem> getSpeciesListSortByWater(String watering) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("watering", watering);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(Objects.requireNonNull(response.getBody()).getData());
    }
    // sorts species list by growth cycle value
    public List<DataItem> getSpeciesListSortByCycle(String cycle) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-list")
                .queryParam("key", apiKey)
                .queryParam("cycle", cycle);
        String url = builder.toUriString();

        ResponseEntity<ApiResponse> response = restTemplate.getForEntity(url, ApiResponse.class);
        return Objects.requireNonNull(Objects.requireNonNull(response.getBody()).getData());
    }
    //    returns list of FAQs by tags
    public List<FaqItem> getFaqByTag(String tags) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/article-faq-list")
                .queryParam("key", apiKey)
                .queryParam("q", tags);
        String url = builder.toUriString();

        ResponseEntity<FaqApiResponse> response = restTemplate.getForEntity(url, FaqApiResponse.class);
        return Objects.requireNonNull(Objects.requireNonNull(response.getBody()).getData());
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
                page++;
            } else {
                break;
            }
        }
        return allSpecies;
    }

    //    Helper method for Extract Care Information method
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

    //  Returns care information from care guide JSON
    public CareInformation extractCareInformation(CareInfoApiResponse apiResponse) {
        if (apiResponse.getData() == null || apiResponse.getData().isEmpty()) {
            return null;
        }

        CareDataItem responseItem = apiResponse.getData().get(0);
        CareInformation careInfo = new CareInformation();

        careInfo.setId(responseItem.getId());
        careInfo.setSpeciesId(responseItem.getSpeciesId());
        updateCareInformation(careInfo, responseItem.getSection());

        return careInfo;
    }

    // Combines plant list and care guide data into one step. Search by common name
    public Plant mergeSpeciesAndCareGuideData(String commonName) {

        // Fetch species list data by common name
        List<DataItem> speciesList = getSpeciesListSortByCommonName(commonName);
        if (speciesList.isEmpty()) {
            return null;
        }
        // Fetch care guide data by common name
        CareInformation careInfo = getCareInformationByCommonName(commonName);
        if (careInfo == null || speciesList.isEmpty()) {
            return null;
        }

        // Attempt to find a matching species with the same speciesId from the care information
        DataItem matchedSpecies = speciesList.stream()
                .filter(item -> item.getSpeciesId() == careInfo.getSpeciesId())
                .findFirst().orElse(null);

        // If there's no matched species, return null
        if (matchedSpecies == null) {
            return null;
        }

        return createPlant(matchedSpecies, careInfo);
    }

    //  Helper method for mergeSpeciesAndCareGuideData
    private Plant createPlant(DataItem matchedSpecies, CareInformation careInfo) {
        Plant plant = new Plant();
        plant.setSpeciesId(matchedSpecies.getSpeciesId());
        plant.setCommonName(matchedSpecies.getCommonName());
        plant.setCycle(matchedSpecies.getCycle());
        if (matchedSpecies.getDefaultImage() != null) {
            plant.setThumbnail(matchedSpecies.getDefaultImage().getThumbnail());
            plant.setOriginalUrl(matchedSpecies.getDefaultImage().getOriginalUrl());
        }
        plant.setCareInformation(careInfo);
        return plant;
    }

    //  Method used to get all the common names in the care guide
    public List<String> getAllCommonNames() {
        List<String> commonNames = new ArrayList<>();
        for (int page = 51; page <= 100; page++) {
            UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://perenual.com/api/species-care-guide-list")
                    .queryParam("key", apiKey)
                    .queryParam("page", page);
            String url = builder.toUriString();

            ResponseEntity<CareInfoApiResponse> response = restTemplate.getForEntity(url, CareInfoApiResponse.class);
            CareInfoApiResponse apiResponse = response.getBody();

            if (apiResponse != null && apiResponse.getData() != null) {
                for (CareDataItem item : apiResponse.getData()) {
                    commonNames.add(item.getCommonName());
                }
            } else {
                // Break the loop if the response is null or contains no data
                break;
            }
        }
        return commonNames;
    }

}
