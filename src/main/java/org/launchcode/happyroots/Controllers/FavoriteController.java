package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Favorite;
//import org.launchcode.happyroots.Models.Plant;
import org.launchcode.happyroots.Repositories.FavoriteRepository;
import org.launchcode.happyroots.Repositories.PlantRepository;
import org.launchcode.happyroots.Repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/favorite")
public class FavoriteController {




    @Autowired
    FavoriteRepository favoriteRepository;
    @Autowired
    PlantRepository plantRepository;
    @Autowired
    ProfileRepository profileRepository;
    @Autowired
    ApiController apiController;


    @GetMapping
    public Collection<Favorite> findALlFavorites () {
        return favoriteRepository.findAll();
    }



    @GetMapping("/userId/{userId}")
    public List<Favorite> getUserId(@PathVariable String userId) {
        return favoriteRepository.findByUserId(userId);
    }

    @GetMapping("test/again")
    public String testTest(String test) {
        return "test";
    }



//    @GetMapping("/name/{name}")
//    public List<Favorite> getUserName(@PathVariable String name) {
//        return favoriteRepository.findByName(name);
//
//    }

    @GetMapping("/plantId/{plantId}")
    public List<Favorite> getPlantId(@PathVariable String plantId) {
        return favoriteRepository.findByPlantId(plantId);
    }




    @GetMapping("/{id}")
    public ResponseEntity<Favorite> getFavoriteById(@PathVariable int id) {
        Favorite favorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );
        return ResponseEntity.ok(favorite);
    }


//    create favorite
    @PostMapping("/create")
    public Favorite createFavorite(@RequestBody Favorite favorite ) {
        return favoriteRepository.save(favorite);
    }




    //    update favorite
    @PutMapping("/{id}")
    public ResponseEntity<Favorite> updateFavorite(@PathVariable int id,
                                                   @RequestBody Favorite favoriteDetails) {
        Favorite updateFavorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );
//        updateFavorite.setName(favoriteDetails.getName());
        updateFavorite.setUserId(favoriteDetails.getUserId());
        updateFavorite.setPlantId(favoriteDetails.getPlantId());

        favoriteRepository.save(updateFavorite);
        return ResponseEntity.ok(updateFavorite);
    }


//    update single value
    @PatchMapping("/{id}")
    public ResponseEntity<Favorite> patchFavorite(@PathVariable int id,
                                                   @RequestBody Favorite favoriteDetails) {
        Favorite updateFavorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );
//        updateFavorite.setName(favoriteDetails.getName());
        updateFavorite.setUserId(favoriteDetails.getUserId());
        updateFavorite.setPlantId(favoriteDetails.getPlantId());

        favoriteRepository.save(updateFavorite);
        return ResponseEntity.ok(updateFavorite);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteFavorite(@PathVariable int id) {
        Favorite favorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );

        favoriteRepository.delete(favorite);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
