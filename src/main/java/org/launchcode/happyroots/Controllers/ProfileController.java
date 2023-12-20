package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Profile;
import org.launchcode.happyroots.Repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/profile")
public class ProfileController {


    @Autowired
    ProfileRepository profileRepository;


    @GetMapping
    public Collection<Profile> findAllProfiles() {
        return profileRepository.findAll();
    }


//    create profile
//    @PostMapping("/create")
//    public Profile createProfile(@RequestBody Profile profile) {
//        return profileRepository.save(profile);
//    }

    @PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
//    @PostMapping("/create")
    public ResponseEntity<String> register(@RequestBody Profile profile) {
        Profile isExist = (profileRepository.findByEmail(profile.getEmail()));
        if (isExist != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with email " + profile.getEmail() + " already exists. Enter a new email to register.\n");
        }

        Profile newProfile = new Profile();

        newProfile.setName(profile.getName());
        newProfile.setEmail(profile.getEmail());
        newProfile.setUserId(profile.getUserId());
        newProfile.setPhoneNumber(profile.getPhoneNumber());
        newProfile.setImageUrl(profile.getImageUrl());

        profileRepository.save(newProfile);
        ResponseEntity.ok(newProfile);
        return ResponseEntity.status(HttpStatus.CREATED).body("Profile was successfully" +
                " registered.\n");
    }


    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable int id) {
        Profile profile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "profile does not exist with id: " + id) );
        return ResponseEntity.ok(profile);
    }


//        update Profile
    @PutMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable int id,
                                                 @RequestBody Profile profileDetails) {
        Profile updateProfile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "profile does not exist with id: " + id) );
        updateProfile.setName(profileDetails.getName());
        updateProfile.setUserId(profileDetails.getUserId());
        updateProfile.setEmail(profileDetails.getEmail());
        updateProfile.setPhoneNumber(profileDetails.getPhoneNumber());
        updateProfile.setImageUrl(profileDetails.getImageUrl());

        profileRepository.save(updateProfile);
        return ResponseEntity.ok(updateProfile);
    }


    //    delete profile
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProfile(@PathVariable int id) {
        Profile profile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "profile does not exist with id: " + id) );

        profileRepository.delete(profile);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    //    update single value
//    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
//    @PatchMapping("/{id}")
//    public ResponseEntity<Profile> patchProfile(@PathVariable int id,
//                                                @RequestBody Profile profileDetails) {
//        Profile updateProfile =
//                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
//                        "Profile does not exist with id: " + id) );
//        updateProfile.setName(profileDetails.getName());
//        updateProfile.setUserId(profileDetails.getUserId());
//        updateProfile.setEmail(profileDetails.getEmail());
//        updateProfile.setPhoneNumber(profileDetails.getPhoneNumber());
//        updateProfile.setImageUrl(profileDetails.getImageUrl());
//
//        profileRepository.save(updateProfile);
//        return ResponseEntity.ok(updateProfile);
//    }


}
