package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends JpaRepository<Plant, Integer> {

//    public List<Plant> findBySpeciesId(String speciesId);


}
