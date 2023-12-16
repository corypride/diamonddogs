package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Plant;
import org.launchcode.happyroots.Repositories.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/plant")
public class PlantController {

    @Autowired
    PlantRepository plantRepository;


    @GetMapping
    public Collection<Plant> findALlProfiles () {
        return plantRepository.findAll();
    }


    @GetMapping("/speciesId/{speciesId}")
    public List<Plant> getUserId(@PathVariable String speciesId) {
//        return plantRepository.findBySpeciesId(speciesId);
        return null;
    }


    @GetMapping("/{id}")
    public ResponseEntity<Plant> getPlantById(@PathVariable int id) {
        Plant plant =
                plantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Plant does not exist with id: " + id) );
        return ResponseEntity.ok(plant);
    }


    //    create
    @PostMapping("/create")
    public Plant createPlant(@RequestBody Plant plant ) {
        return plantRepository.save(plant);
    }




    //    update
    @PutMapping("/{id}")
    public ResponseEntity<Plant> updatePlant(@PathVariable int id,
                                                 @RequestBody Plant plantDetails) {
        Plant updatePlant =
                plantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Plant does not exist with id: " + id) );
        updatePlant.setSpeciesId(plantDetails.getSpeciesId());


        plantRepository.save(updatePlant);
        return ResponseEntity.ok(updatePlant);
    }


    //    update single value
    @PatchMapping("/{id}")
    public ResponseEntity<Plant> patchPlant(@PathVariable int id,
                                                @RequestBody Plant plantDetails) {
        Plant updatePlant =
                plantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Plant does not exist with id: " + id) );
        updatePlant.setSpeciesId(plantDetails.getSpeciesId());


        plantRepository.save(updatePlant);
        return ResponseEntity.ok(updatePlant);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deletePlant(@PathVariable int id) {
        Plant plant =
                plantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Plant does not exist with id: " + id) );

        plantRepository.delete(plant);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
