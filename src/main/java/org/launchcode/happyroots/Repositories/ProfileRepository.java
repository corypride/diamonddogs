package org.launchcode.happyroots.Repositories;

import org.launchcode.happyroots.Models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProfileRepository extends JpaRepository<Profile, Integer> {


    public Profile findByUserId (String userId);
    public Profile findByName (String name);
    public Profile findByEmail(String email);
    public Profile findByPhoneNumber(String phoneNumber);
    public Profile findByImageUrl(String imageUrl);


}
