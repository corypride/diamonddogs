package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.CareInformation;
import org.launchcode.happyroots.Repositories.CareInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/careInformation")
public class CareInformationController {


    @Autowired
    CareInformationRepository careInformationRepository;


    @GetMapping
    public Collection<CareInformation> findAllCareInformations() {
        return careInformationRepository.findAll();
    }


    @GetMapping("/{id}")
    public ResponseEntity<CareInformation> getCareInformationById(@PathVariable int id) {
        CareInformation careInformation =
                careInformationRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "careInformation does not exist with id: " + id) );
        return ResponseEntity.ok(careInformation);
    }


    //    create careInformation
    @PostMapping("/create")
    public CareInformation createcareInformation(@RequestBody CareInformation careInformation) {
        return careInformationRepository.save(careInformation);
    }


    //    delete careInformation
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteCareInformation(@PathVariable int id) {
        CareInformation careInformation =
                careInformationRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "careInformation does not exist with id: " + id) );

        careInformationRepository.delete(careInformation);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
