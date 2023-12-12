package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Favorite;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {


    public List<Favorite> findByName(String name);
    public List<Favorite> findByUserId(String userId);


}
