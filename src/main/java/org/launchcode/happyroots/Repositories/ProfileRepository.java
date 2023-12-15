package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Integer> {

    public List<Profile> findByUserId(String userId);
    public List<Profile> findByEmail(String email);
    public List<Profile> findByPhoneNumber(String phoneNumber);


}
