package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Plant;
import org.launchcode.happyroots.Models.Profile;
import org.launchcode.happyroots.Repositories.PlantRepository;
import org.launchcode.happyroots.Repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    ProfileRepository profileRepository;

    @Autowired
    PlantRepository plantRepository;



    @GetMapping
    public Collection<Profile> findALlProfiles () {
        return profileRepository.findAll();
    }

//    @GetMapping("/test/{profileId}")
//    public List<Plant> plantsByProfile(@PathVariable String profileID) {
//        return plantRepository.findByProfileId(profileID);
//    }


    @GetMapping("/userId/{userId}")
    public List<Profile> getUserId(@PathVariable String userId) {
        return profileRepository.findByUserId(userId);
    }


    @GetMapping("/email/{email}")
    public List<Profile> getEmail(@PathVariable String email) {
        return profileRepository.findByEmail(email);

    }

    @GetMapping("/phoneNumber/{phoneNumber}")
    public List<Profile> getPhoneNumber(@PathVariable String phoneNumber) {
        return profileRepository.findByPhoneNumber(phoneNumber);
    }


//    get profile

    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable int id) {
        Profile profile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );
        return ResponseEntity.ok(profile);
    }


    //    create Profile
    @PostMapping("/create")
    public Profile createProfile(@RequestBody Profile profile ) {
        return profileRepository.save(profile);
    }




    //    update Profile
    @PutMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable int id,
                                                   @RequestBody Profile profileDetails) {
        Profile updateProfile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );
        updateProfile.setUserId(profileDetails.getUserId());
        updateProfile.setEmail(profileDetails.getEmail());
        updateProfile.setPhoneNumber(profileDetails.getPhoneNumber());
        updateProfile.setImageURL(profileDetails.getImageURL());

        profileRepository.save(updateProfile);
        return ResponseEntity.ok(updateProfile);
    }


    //    update single value
    @PatchMapping("/{id}")
    public ResponseEntity<Profile> patchProfile(@PathVariable int id,
                                                  @RequestBody Profile profileDetails) {
        Profile updateProfile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );
        updateProfile.setUserId(profileDetails.getUserId());
        updateProfile.setEmail(profileDetails.getEmail());
        updateProfile.setPhoneNumber(profileDetails.getPhoneNumber());
        updateProfile.setImageURL(profileDetails.getImageURL());

        profileRepository.save(updateProfile);
        return ResponseEntity.ok(updateProfile);
    }



//    delete profile
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProfile(@PathVariable int id) {
        Profile profile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );

        profileRepository.delete(profile);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
