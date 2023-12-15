package org.launchcode.happyroots.Controllers;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.launchcode.happyroots.Models.UserData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/users")
public class UsersController {
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

    @PostMapping("/update")
    public ResponseEntity<UserRecord> update(Principal principal, @RequestBody UserData userData) {
        try {

            UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(principal.getName())
                    .setDisplayName(userData.getUsername())
                    .setPhotoUrl(userData.getPhotoUrl());

            UserRecord userRecord = FirebaseAuth.getInstance().updateUser(request);

            return ResponseEntity.ok(userRecord);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);/// + e.getMessage());
        }
    }
}
