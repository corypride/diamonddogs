package org.launchcode.happyroots.Service;


import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Repositories.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class FavoriteService implements FavoriteServiceInterface {

    public static final int SEARCH_RESULT_PER_PAGE = 10;

    @Autowired
    FavoriteRepository favoriteRepository;


//        public Page<Favorite> search(String keyword, int pageNum) {
//            Pageable pageable = PageRequest.of(pageNum - 1, SEARCH_RESULT_PER_PAGE);
//            return favoriteRepository.search(keyword, pageable);
//        }





    @Override
    public String addFavorite(Favorite favorite) {
        Favorite result = favoriteRepository.save(favorite);
        return "Successful";
    }

    @Override
    public List<Favorite> findAllFavorites() {
        return (List<Favorite>) favoriteRepository.findAll();
//        return (List<Favorite>) favoriteRepository.findAll();
    }

//    public Optional<Favorite> findByUserId(String userID) {
//        return favoriteRepository.findById(userID);
//    }


//
//    @Override
//    public List<Student> findAllStudent() {
//        return studentRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
//    }

//    public String findById(@PathVariable String userId) {
//        return String.valueOf(favoriteRepository.findById(Integer.valueOf(userId)));
//    }








//    @Override
//    public List<Student> findAllStudent() {
//        return studentRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
//    }
}
