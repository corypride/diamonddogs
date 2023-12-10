package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/favorites")
public class FavoriteController {

    @Autowired
    FavoriteService favoriteService;

//    @GetMapping("/")
//    public String getAll() {
//        return "favorites get";
//    }
//
//    @GetMapping("/{userId}")
//    public String getUserFavorites(@PathVariable String userId) {
//        return "we did it";
//    }

    @GetMapping
    public List<Favorite> findALlFavorites (){
        return favoriteService.findAllFavorites();
    }


    @PostMapping("/add")
    public String addFavorite(@RequestBody Favorite favorite){
        return favoriteService.addFavorite(favorite);
    }



    @PostMapping("/")
    public String saveToDB () {

        return "please route me for posting";
    }



}
