package org.launchcode.happyroots.Repositories;


import jakarta.persistence.criteria.CriteriaBuilder;
import org.launchcode.happyroots.Models.Data.DataItem;
import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Models.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository <Favorite, Integer> {

//    public List<Favorite> findByName(String name);

    public List<Favorite> findByUserId(String userId);

    public List<Favorite> findByPlantId(String plantId);

    public List<Favorite> findBySpeciesId(int speciesId);

//    Favorite findSpeciesId(int speciesId);

    public List<Plant> findPlantByUserId(String userId);

    @Query("SELECT u from Favorite u WHERE userId = ?1")
    public List<Favorite> findUserId(String userId);

    @Query("SELECT speciesId from Favorite u WHERE userId = ?1")
    public List<Integer> findSpeciesIdList(String userId);



//    @Query("SELECT u from Plant u WHERE speciesId = ?1")
//    public List<Plant> queryPlant(int speciesId);




}
