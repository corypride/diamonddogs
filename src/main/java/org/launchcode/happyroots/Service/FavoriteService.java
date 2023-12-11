package org.launchcode.happyroots.Service;


import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Repositories.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class FavoriteService implements FavoriteServiceInterface {





    @Autowired
    FavoriteRepository favoriteRepository;

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

    public String findById(@PathVariable String userId) {
        return String.valueOf(favoriteRepository.findById(Integer.valueOf(userId)));
    }
//    @Override
//    public List<Student> findAllStudent() {
//        return studentRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
//    }
}
