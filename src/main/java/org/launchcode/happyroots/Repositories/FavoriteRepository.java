package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface FavoriteRepository extends JpaRepository <Favorite, Integer> {
//public interface FavoriteRepository extends CrudRepository <Favorite, Integer> {
//    public interface ProductRepository extends PagingAndSortingRepository<Product, Integer> {


    @Query(value = "SELECT * FROM favorite WHERE name", nativeQuery = true)
    public List<Favorite> findByName(String name);



    public Favorite findByNameIs(String name);
    public List<Favorite> findByUserId(String userId);






//
//        @Query(value = "SELECT * FROM favorite WHERE MATCH(name, plantId, " +
//                "userID) "
//                + "AGAINST (?1)", nativeQuery = true)
//        public Page<Favorite> search(String keyword, Pageable pageable);
////
////    }

//    @Query(value = "SELECT * FROM favorite WHERE MATCH(name, plantId, " +
//                "userID) "
//                + "AGAINST (?1)", nativeQuery = true)
//    @ResponseBody
//    default List<Object> getValues(String keyword) {
//        return Collections.singletonList(findAll());
//    }

//    @Query(value = "SELECT * FROM favorite WHERE name = '{keyword}'")
//    @ResponseBody
//    public default String findName(@Param("keyword")String keyword) {
//        return keyword;
//    }



//    public List<Favorite> findByName(String name);

//
//
//    Object findAll(Sort name);
//
//    Object findAll(String query);
}
