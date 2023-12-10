package org.launchcode.happyroots.Service;


import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Repositories.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

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
//        return favoriteRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
        return (List<Favorite>) favoriteRepository.findAll();
    }
}
