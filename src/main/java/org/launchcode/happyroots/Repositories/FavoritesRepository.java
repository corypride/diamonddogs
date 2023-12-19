package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FavoritesRepository extends JpaRepository<Favorites, Integer> {


    public List<Favorites> findByUserId(String userId);

    public List<Favorites> findByCommonName(String commonName);

//    public List<Favorites> findBySpeciesId(Integer speciesId);
    public List<Favorites> findBySpeciesId(int speciesId);


    @Query("SELECT u from Favorites u WHERE userId = ?1")
    public List<Favorites> queryUserId(String userId);

    @Query("SELECT speciesId from Favorites u WHERE userId = ?1")
    public List<Integer> querySpeciesIdList(String userId);

    @Query("SELECT commonName from Favorites u WHERE userId = ?1")
    public List<String> queryCommonName(String userId);


}
