package org.launchcode.happyroots.Controllers;

import org.launchcode.happyroots.Repositories.SpeciesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/species")
public class SpeciesController {


    @Autowired
    SpeciesRepository speciesRepository;
}
