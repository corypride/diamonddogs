package org.launchcode.happyroots.Repositories;

import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToOne;
import org.launchcode.happyroots.Models.CareInformation;
import org.launchcode.happyroots.Models.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Integer> {


    public Plant findBySpeciesId (int speciesId);
    public Plant findByCommonName (String commonName);
    public CareInformation findByCareInformation(CareInformation careInformation);
    public Plant findByThumbnail (String thumbnail);
    public Plant findByOriginalUrl (String originalUrl);
    public Plant findByCycle (String cycle);



    @Query("SELECT u From Plant u WHERE speciesId = ?1")
    public List<Plant> querySpeciesId(int speciesId);


    @Query("SELECT u FROM Plant u WHERE commonName = ?1")
    public List<Plant> queryCommonName(String commonName);

}
