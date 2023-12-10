package org.launchcode.happyroots.controllers;

import org.launchcode.happyroots.models.CareInformation;
import org.launchcode.happyroots.services.ApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/careinfo/{speciesId}")
    public CareInformation getCareInfoBySpeciesId(@PathVariable int speciesId) {
        return apiService.getCareInformationById(speciesId);
    }

}


