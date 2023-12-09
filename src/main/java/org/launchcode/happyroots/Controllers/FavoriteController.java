package org.launchcode.happyroots.Controllers;


import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import jakarta.validation.Valid;
import org.launchcode.happyroots.Models.Data.FavoriteRepository;
import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Models.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/favorites")
public class FavoriteController {

    @GetMapping("/")
    public String getAll() {
        return "index";
    }

    @GetMapping("/{userId}")
    public String getUserFavorites(@PathVariable String userId) {
        return "we did it joe";
    }





}
