package org.launchcode.happyroots.Models.Data;


import org.launchcode.happyroots.Models.Favorites;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoritesRepository extends CrudRepository<Favorites, Integer> {
}
