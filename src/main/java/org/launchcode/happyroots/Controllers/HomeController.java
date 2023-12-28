package org.launchcode.happyroots.Controllers;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.launchcode.happyroots.Models.UserData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/plants")
public class HomeController {

    @GetMapping("/")
    public String getAll() {
        return "Hello world from public";
    }

    @GetMapping("/test")
    public String test() {
        return "Hello from secured";
    }
}
