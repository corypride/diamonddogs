package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Repositories.FavoriteRepository;
import org.launchcode.happyroots.Repositories.PlantRepository;
import org.launchcode.happyroots.Repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;


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


//    @GetMapping("/findPlant/{userId}")
//    public List<Plant> findPlants(@PathVariable String userId) {
//
//        List<Favorite> list = favoriteRepository.findBySpeciesId();
//
////        List<Favorite> list = favoriteRepository.findByUserId(userId).get;
////        List<Plant> plants = plantRepository.findBySpeciesId(4);
//        List<Plant> plants = plantRepository.findSpecies();
////                plantRepository.findById();
////        plants.add(new Plant());
//
//        return plants;
//
//    }



    @GetMapping("/userId/{userId}")
    public List<Favorite> getUserId(@PathVariable String userId) {
//        return favoriteRepository.findByUserId(userId);
        return favoriteRepository.findUserId(userId);

    }


    @GetMapping("/speciesIdList/{userId}")
    public List<Integer> getSpeciesList(@PathVariable String userId) {
//        Favorite fave = getFavoriteById().getBody();
//        return favoriteRepository.findByUserId(userId);
        return favoriteRepository.findSpeciesIdList(userId);
    }

//    @GetMapping("/showSpecies/userId")
//    public List<Plant> showSpeciesList(@PathVariable String userId) {
//        Lis
//        for ()


//        return plantRepository.listPlants(favoriteRepository.findByUserId(userId));
//    }



//    @GetMapping("/find/{userId}")
//    public List<Plant> find(@PathVariable String userId) {
//        List<Favorite> fave = favoriteRepository.findByUserId(userId);
////        int id = Favorite favoriteRepository.findBySpeciesId();
//        List<Plant> plants = new ArrayList<>();
//        plants.add(favoriteRepository.findSpeciesId(id);
//
//        return plants;
//    }
//        Favorite result = (Favorite) favoriteRepository.findByUserId(userId);
////
////            Favorite favorite = result.get()
////            return favorite.getPlants();
//    }
//
//    private DataItem favorite;
//    int plant = favorite.getSpeciesId();
////        List<Favorite> plant = favoriteRepository.queryId(userId);
//        //        updateFavorite.setName(favoriteDetails.getName());
////            updateFavorite.setPlantId(favoriteDetails.getPlantId());
//            return plantRepository.findBySpeciesId(plant);
////            return plantRepository.findSpecies(userId);
//
////        }




//    @GetMapping("/userId/{userId}")
//    public List<Plant> getUserId(@PathVariable String userId) {
//        return plantRepository.findById(favoriteRepository.findBySpeciesId());
//    }

//    @GetMapping("/userId/{userId}")
//    public List<Plant> getUserId(@PathVariable String userId) {
//        return plantRepository.findById(favoriteRepository.findBySpeciesId());
//    }



//    @GetMapping("test/{userId}")
//    public List<DataItem> testTest(@PathVariable String userId) {
//        return plantRepository.getSpecies;
//    }



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
