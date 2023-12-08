package org.launchcode.happyroots.Controllers;


import jakarta.validation.Valid;
import org.launchcode.happyroots.Models.Data.FavoriteRepository;
import org.launchcode.happyroots.Models.Favorite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @GetMapping("/")
    public String getAll() {
        return "testing favorites";
    }

    @RequestMapping("")
    public String index(Model model) {
        model.addAttribute("favorites", favoriteRepository.findAll());
        return "index";
    }

//    @GetMapping("add")
//    public String displayAddFavorite(Model model) {
//        model.addAttribute(new Favorite());
//        return "add";
//    }

//    @PostMapping("add")
//    public String processAddFavorite(@ModelAttribute @Valid Favorite newFavorite,
//                                    Errors errors) {
//
//        if (errors.hasErrors()) {
//            return "add";
//        }
//
//        FavoriteRepository.save();
//        return "redirect:";
//    }


}
