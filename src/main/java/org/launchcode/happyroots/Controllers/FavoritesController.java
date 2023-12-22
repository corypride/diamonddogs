package org.launchcode.happyroots.Controllers;

import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Favorites;
import org.launchcode.happyroots.Models.Profile;
import org.launchcode.happyroots.Repositories.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/favorites")
public class FavoritesController {


    @Autowired
    FavoritesRepository favoritesRepository;


    @GetMapping
    public Collection<Favorites> findAllFavorites () {
        return favoritesRepository.findAll();
    }


//    list of plants saved by user
    @GetMapping("/userId/{userId}")
    public List<Favorites> getUserId(@PathVariable String userId) {
        return favoritesRepository.findByUserId(userId);
//        return favoriteRepository.queryUserId(userId);
    }


    @GetMapping("/commonNameList/{userId}")
    public List<String> getCommonName(@PathVariable String userId) {
        return favoritesRepository.queryCommonName(userId);
    }


    @GetMapping("/speciesIdList/{userId}")
    public List<Integer> getSpeciesList(@PathVariable String userId) {
        return favoritesRepository.querySpeciesIdList(userId);
    }





//    TODO this needs to check for unique pairs so it doesn't save multiples


//    can i turn this into @Query or just enter it into sql manually
//    ALTER TABLE  `favorites` ADD UNIQUE (`user_id` ,`species_id`);

    @PostMapping("/create")
    public Favorites createFavorite(@RequestBody Favorites favorite) {
//        return favoritesRepository.findPair(userId, speciesId);
    return favoritesRepository.save(favorite);

    }


//      trying to check for value combo from controller


//    @PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
////    @PostMapping("/create")
//    public ResponseEntity<String> register(@RequestBody Favorites favorite,
//                                           String userId, Integer speciesId) {
////        Favorites isExist = (profileRepository.findByEmail(profile.getEmail()));
//        Favorites isExist = (favoritesRepository.findPair(userId, speciesId));
//        if (isExist != null) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User has saved " + favorite.getSpeciesId() + " already.\n");
//        }
//
//        Favorites newFavorite = new Favorites();
//
//        newFavorite.setUserId(favorite.getUserId());
//        newFavorite.setSpeciesId(favorite.getSpeciesId());
//        newFavorite.setCommonName(favorite.getCommonName());
//        favoritesRepository.save(newFavorite);
//        ResponseEntity.ok(newFavorite);
//        return ResponseEntity.status(HttpStatus.CREATED).body("Favorite "+  speciesId +
//                " was successfully saved.\n");
//    }






//    @PostMapping("/find")
//    public String findFavorite(@RequestBody Favorites favorite, String userId,
//                                  Integer speciesId) {
//        Favorites result = favoritesRepository.findPair(userId, speciesId);
//        if(result != null) {
//            return "favorite has already been saved";
//        } else {
//
//        favoritesRepository.save(favorite);
//        }
//        return favorite.toString();
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteFavorite(@PathVariable int id) {
        Favorites favorite=
                favoritesRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Favorite does not exist with id: " + id) );

        favoritesRepository.delete(favorite);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
