package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Models.Plant;
import org.launchcode.happyroots.Models.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Integer> {

    public List<Plant> findBySpeciesId(String speciesId);


}
