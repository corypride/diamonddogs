package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Integer> {

    public List<Plant> findBySpeciesId(int speciesId);

    @Query("SELECT u From Plant u WHERE speciesId = ?1")
    public List<Plant> findSpecies(int speciesId);


    @Query("SELECT u FROM Plant u WHERE speciesId = ?1")
    public List<Plant> listPlants();



}
