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
        return "Hello world";
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserData userData) {
        try {
            UserRecord user = FirebaseAuth.getInstance().getUserByEmail(userData.getEmail());

            // TODO: verify password || token

            return ResponseEntity.ok(user);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody UserData userData) {
        try {
            UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                    .setEmail(userData.getEmail())
                    .setPassword(userData.getPassword())
                    .setDisabled(false);

            UserRecord userRecord = FirebaseAuth.getInstance().createUser(request);
            System.out.println("Successfully created new user: " + userRecord.getUid());

            return ResponseEntity.ok("User created successfully");
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating user: " + e.getMessage());
        }
    }

    @GetMapping("/test")
    public String test() {
        return "Hello from secured";
    }
}
