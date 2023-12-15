package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Profile;
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




    @GetMapping
    public Collection<Profile> findALlProfiles () {
        return profileRepository.findAll();
    }


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

    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable int id) {
        Profile Profile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );
        return ResponseEntity.ok(Profile);
    }


    //    create Profile
    @PostMapping("/create")
    public Profile Profile(@RequestBody Profile Profile ) {
        return profileRepository.save(Profile);
    }




    //    update Profile
    @PutMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable int id,
                                                   @RequestBody Profile ProfileDetails) {
        Profile updateProfile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );
        updateProfile.setUserId(ProfileDetails.getUserId());
        updateProfile.setEmail(ProfileDetails.getEmail());
        updateProfile.setPhoneNumber(ProfileDetails.getPhoneNumber());
        updateProfile.setImageURL(ProfileDetails.getImageURL());

        profileRepository.save(updateProfile);
        return ResponseEntity.ok(updateProfile);
    }


    //    update single value
    @PatchMapping("/{id}")
    public ResponseEntity<Profile> patchProfile(@PathVariable int id,
                                                  @RequestBody Profile ProfileDetails) {
        Profile updateProfile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );
        updateProfile.setUserId(ProfileDetails.getUserId());
        updateProfile.setEmail(ProfileDetails.getEmail());
        updateProfile.setPhoneNumber(ProfileDetails.getPhoneNumber());
        updateProfile.setImageURL(ProfileDetails.getImageURL());

        profileRepository.save(updateProfile);
        return ResponseEntity.ok(updateProfile);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProfile(@PathVariable int id) {
        Profile Profile =
                profileRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "Profile does not exist with id: " + id) );

        profileRepository.delete(Profile);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }








    @PostMapping("/")
    public String saveToDB () {
        return "please route me for posting";
    }


    @PostMapping("/huh")
    public String postTest(Profile Profile) {
        return "success";
    }

}
