package org.launchcode.happyroots.Repositories;


import org.launchcode.happyroots.Models.Favorite;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Repository
public interface FavoriteRepository extends CrudRepository <Favorite, Integer> {
//    public interface ProductRepository extends PagingAndSortingRepository<Product, Integer> {
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



    public List<Favorite> findByName(String name);
    public List<Favorite> findByUserId(String userId);
//
//
    Object findAll(Sort name);
//
//    Object findAll(String query);
}
