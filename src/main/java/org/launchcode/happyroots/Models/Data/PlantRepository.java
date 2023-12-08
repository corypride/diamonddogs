package org.launchcode.happyroots.Models.Data;

import org.launchcode.happyroots.Models.Plant;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlantRepository extends CrudRepository<Plant, Integer> {
}
