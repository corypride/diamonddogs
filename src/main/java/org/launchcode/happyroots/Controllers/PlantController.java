package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Plant;
import org.launchcode.happyroots.Models.Profile;
import org.launchcode.happyroots.Repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/plant")
public class PlantController {


    @Autowired
    PlantRepository plantRepository;



//    TODO do we want update functions for this? or is create, read, delete enough?

    @GetMapping
    public Collection<Plant> findAllPlants() {
        return plantRepository.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<Plant> getPlantById(@PathVariable int id) {
        Plant plant =
                plantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "plant does not exist with id: " + id) );
        return ResponseEntity.ok(plant);
    }


    //    create profile
    @PostMapping("/create")
    public Plant createPlant(@RequestBody Plant plant) {
        return plantRepository.save(plant);
    }


    //    delete plant
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlant(@PathVariable int id) {
        Plant plant =
                plantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "plant does not exist with id: " + id) );

        plantRepository.delete(plant);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
