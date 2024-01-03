package org.launchcode.happyroots.Repositories;

import org.launchcode.happyroots.Models.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpeciesRepository extends JpaRepository<Favorites, Integer> {


}
