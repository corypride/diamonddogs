package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Profile;
import org.launchcode.happyroots.Repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    @PostMapping("/create")
    public Profile createProfile(@RequestBody Profile profile) {
        return profileRepository.save(profile);
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


    //    update single value
//    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH)
    @PatchMapping("/{id}")
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


    //    delete profile
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProfile(@PathVariable int id) {
        Profile profile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "profile does not exist with id: " + id) );

        profileRepository.delete(profile);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
