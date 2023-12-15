package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository <Favorite, Integer> {

//    public List<Favorite> findByName(String name);

    public List<Favorite> findByUserId(String userId);

    public List<Favorite> findByPlantId(String plantId);




}
