package org.launchcode.happyroots.Models.Data;


import org.launchcode.happyroots.Models.Favorite;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {

//    static void save() {
//    }
//
}
