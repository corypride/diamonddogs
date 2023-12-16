package org.launchcode.happyroots.Controllers;

import org.launchcode.happyroots.Models.CareInformation;
import org.launchcode.happyroots.Models.Data.DataItem;
import org.launchcode.happyroots.Services.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {

    private final ApiService apiService;

    @Autowired
    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("/")
    public String hello() {
        return "hello world";
    }

    @GetMapping("/careinfo/species/{speciesId}")
    public CareInformation getCareInfoBySpeciesId(@PathVariable int speciesId) {
        return apiService.getCareInformationById(speciesId);
    }

    //  Works when searching one word common name, but data is null for two word common names
    @GetMapping("/careinfo/common/{commonName}")
    public CareInformation getCareInfoByCommonName(@PathVariable String commonName) {
        return apiService.getCareInformationByCommonName(commonName);
    }

    //   Returns unsorted list of first 30 species with details
    @GetMapping("/specieslist")
    public List<DataItem> getSpeciesList() {
        return apiService.getSpeciesList();
    }

    //    Options - full_shade, part_shade, sun-part_shade, full_sun
    @GetMapping("/specieslist/sunlight/{sunlight}")
    public List<DataItem> getSpeciesListBySunlight(@PathVariable String sunlight) {
        return apiService.getSpeciesListSortBySunlight(sunlight);
    }

    //  Options - frequent, average, minimum, none
    @GetMapping("/specieslist/watering/{watering}")
    public List<DataItem> getSpeciesListByWatering(@PathVariable String watering) {
        return apiService.getSpeciesListSortByWater(watering);
    }

    //  Options - perennial, annual, biennial, biannual
    @GetMapping("/specieslist/cycle/{cycle}")
    public List<DataItem> getSpeciesListByCycle(@PathVariable String cycle) {
        return apiService.getSpeciesListSortByCycle(cycle);
    }

//    Gets 5 pages of species list data at once
    @GetMapping("/specieslist/more/")
    public List<DataItem> getMoreSpeciesList() {
        return apiService.getAllSpecies();
    }


}


