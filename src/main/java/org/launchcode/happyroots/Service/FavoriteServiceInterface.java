package org.launchcode.happyroots.Service;

import org.launchcode.happyroots.Models.Favorite;

import java.util.List;

public interface FavoriteServiceInterface {

    public String addFavorite(Favorite favorite);
    public List<Favorite> findAllFavorites();

}
