package org.launchcode.happyroots.Repositories;


import jakarta.persistence.criteria.CriteriaBuilder;
import org.launchcode.happyroots.Models.Favorites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoritesRepository extends JpaRepository<Favorites, Integer> {


    public List<Favorites> findByUserId(String userId);

    public List<Favorites> findByCommonName(String commonName);

//    public List<Favorites> findBySpeciesId(Integer speciesId);
    public List<Favorites> findBySpeciesId(int speciesId);

//    public Favorites findFavorite(Favorites favorite);




    @Query("SELECT u FROM Favorites u WHERE userId = ?1 AND speciesId = ?2")
    public Favorites findPair(String userId, Integer speciesId);

    @Query("SELECT u from Favorites u WHERE userId = ?1")
    public List<Favorites> queryUserId(String userId);

    @Query("SELECT speciesId from Favorites u WHERE userId = ?1")
    public List<Integer> querySpeciesIdList(String userId);

    @Query("SELECT commonName from Favorites u WHERE userId = ?1")
    public List<String> queryCommonName(String userId);

//    @Query("SELECT u FROM Favorites u WHERE userId = ?1 and speciesId = ?2")
//    public Favorites queryPair(String userId, int speciesId);


//    @Query("INSERT INTO Favorites (userId, speciesId)\n" +
//            "SELECT userId, speciesId, \n" +
//            "  FROM favorites\n" +
//            " WHERE NOT EXISTS (SELECT *\n" +
//            "                     FROM Favorites\n" +
//            "                    WHERE userId = ?1\n" +
//            "                      AND speciesId = ?2")
//    public Favorites queryTest(String userId, int speciesId);

}
