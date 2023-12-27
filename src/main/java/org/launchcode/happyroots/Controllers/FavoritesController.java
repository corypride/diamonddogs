package org.launchcode.happyroots.Controllers;

import org.launchcode.happyroots.Models.Favorites;
import org.launchcode.happyroots.Repositories.FavoritesRepository;
import org.springframework.beans.factory.annotation.Autowired;
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





    @PostMapping("/create")
    public Favorites createFavorite(@RequestBody Favorites favorite) {
        return favoritesRepository.save(favorite);
    }

}
