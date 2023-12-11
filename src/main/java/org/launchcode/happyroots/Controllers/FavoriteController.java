package org.launchcode.happyroots.Controllers;


import jakarta.validation.Valid;
import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Repositories.FavoriteRepository;
import org.launchcode.happyroots.Service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/favorites")
public class FavoriteController {

    @Autowired
    FavoriteService favoriteService;

    @Autowired
    FavoriteRepository favoriteRepository;

    @GetMapping("/")
    public String getAll() {
        return favoriteService.findAllFavorites().toString();
//        return "favorites get";
    }

    @GetMapping("/{userId}")
    public String getUserFavorites(@PathVariable String userId) {
//        return favoriteService.findById(userId);
        return "fetching favorites by userid";

    }

    @GetMapping
    public List<Favorite> findALlFavorites (){
        return favoriteService.findAllFavorites();
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Favorite> getAllUsers() {
        // This returns a JSON or XML with the users
        return favoriteRepository.findAll();
    }


    @PostMapping("/add")
    public String addFavorite(@RequestBody Favorite favorite){
        return favoriteService.addFavorite(favorite);
    }

//    public String processAddEmployerForm(@ModelAttribute @Valid Favorite newFavorite,
//                                         Errors errors, Model model) {
//
//        favoriteRepository.save(newFavorite);
//        return favoriteService.findAllFavorites().toString();
//    }


    @PostMapping("/")
    public String saveToDB () {

        return "please route me for posting";
    }



}
