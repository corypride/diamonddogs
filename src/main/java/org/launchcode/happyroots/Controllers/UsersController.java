package org.launchcode.happyroots.Controllers;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.cloud.storage.*;
import com.google.firebase.cloud.StorageClient;
import org.launchcode.happyroots.Models.UserData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.security.Principal;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/users")
public class UsersController {

    @PostMapping("/signup")
    public ResponseEntity<UserRecord> signUp(@RequestBody UserData userData) {
        try {
            UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                    .setEmail(userData.getEmail())
                    .setPassword(userData.getPassword())
                    .setDisabled(false);

            UserRecord userRecord = FirebaseAuth.getInstance().createUser(request);
            System.out.println("Successfully created new user: " + userRecord.getUid());

            return ResponseEntity.ok(userRecord);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PostMapping("/changeUserImage")
    public ResponseEntity<UserRecord> changeUserImage(Principal principal, @RequestPart("image") MultipartFile image) {
        try {
            String imageUrl = uploadImageToStorage(principal.getName(), image);

            UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(principal.getName())
                    .setPhotoUrl(imageUrl);

            UserRecord userRecord = FirebaseAuth.getInstance().updateUser(request);

            return ResponseEntity.ok(userRecord);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null); // Handle error response
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    private String uploadImageToStorage(String id, MultipartFile image) throws StorageException, IOException {
        Bucket bucket = StorageClient.getInstance().bucket();
        Path tempFile = Files.createTempFile(id, image.getOriginalFilename());
        Files.copy(image.getInputStream(), tempFile, StandardCopyOption.REPLACE_EXISTING);

        String fileName = id + ".jpg";
        Blob blob = bucket.create(fileName, Files.readAllBytes(tempFile), "image/jpg");

        String imageUrl = blob.getMediaLink();

        Files.delete(tempFile);

        return imageUrl;
    }


    @PostMapping("/changeUsername")
    public ResponseEntity<UserRecord> changeUsername(Principal principal, @RequestPart("username") String username) {
        try {

            UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(principal.getName())
                    .setDisplayName(username);

            UserRecord userRecord = FirebaseAuth.getInstance().updateUser(request);

            return ResponseEntity.ok(userRecord);
        } catch (FirebaseAuthException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
