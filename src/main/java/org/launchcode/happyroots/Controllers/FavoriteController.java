package org.launchcode.happyroots.Controllers;


import org.launchcode.happyroots.Exception.ResourceNotFoundException;
import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Repositories.FavoriteRepository;
import org.launchcode.happyroots.Service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/favorites")
public class FavoriteController {



    @Autowired
    FavoriteService favoriteService;

    @Autowired
    FavoriteRepository favoriteRepository;




//    @Query("SELECT id FROM favorite WHERE name = 'ryan'")
//@ResponseBody
//@GetMapping("/test")
//public Collection<Favorite> getAllRyan() {
//    return favoriteRepository.findAllActiveRyans();
//}



//    @GetMapping("/search/{keyword}")
//    @ResponseBody
//    public Query searchTable(@PathVariable String keyword) {
//        return (Query) favoriteRepository.findByName(keyword);
//    }




//    @GetMapping("/search")
//    public String search(String keyword, Model model) {
//        return searchByPage(keyword, model, 1);
//    }
//
//    @GetMapping("/search/page/{pageNum}")
//    public String searchByPage(String keyword, Model model,
//                               @PathVariable(name = "pageNum") int pageNum) {
//
//        Page<Favorite> result = favoriteService.search(keyword, pageNum);
//
//        List<Favorite> listResult = result.getContent();
//
//        model.addAttribute("totalPages", result.getTotalPages());
//        model.addAttribute("totalItems", result.getTotalElements());
//        model.addAttribute("currentPage", pageNum);
//
//        long startCount = (pageNum - 1) * FavoriteService.SEARCH_RESULT_PER_PAGE + 1;
//        model.addAttribute("startCount", startCount);
//
//        long endCount = startCount + FavoriteService.SEARCH_RESULT_PER_PAGE - 1;
//        if (endCount > result.getTotalElements()) {
//            endCount = result.getTotalElements();
//        }
//
//        model.addAttribute("endCount", endCount);
//        model.addAttribute("listResult", listResult);
//        model.addAttribute("keyword", keyword);
//
//        return "search_result";
//    }







//    @ResponseBody
//    @GetMapping("/name/{name}")
//    public ResponseEntity<Favorite> findByName(@RequestParam String name) {
//        Favorite favorite = (Favorite) favoriteRepository.findByName(name);
////        return (ResponseEntity<Favorite>) favoriteRepository.findByName(name);
//        return ResponseEntity.ok(favorite);
//
//    }



//    @GetMapping("/getUser") public String getUser(@RequestParam(name = "name") String name)
//    { return "It seems we have a record for email " + favoriteRepository.findByName(name); }




    @GetMapping
    @ResponseBody
    public List<Favorite> findALlFavorites () {
//        return favoriteService.findAllFavorites();
        return (List<Favorite>) favoriteRepository.findAll();
    }




    @GetMapping("/userId/{userId}")
    public String getUserId(@PathVariable String userId) {
        return userId;

    }


//    @GetMapping
//    @ResponseBody
//    public List<Favorite> findALlFavoritesSorted () {
//        return (List<Favorite>) favoriteRepository.findAll(Sort.by(Sort.Direction.ASC,
//                "name"));
//    }

















//    @GetMapping
//    public List<Favorite> sortFavorites() {
//        return (List<Favorite>) favoriteRepository.findAll(Sort.by(Sort.Direction.ASC, "name"));
//    }
//
//
//    @Query("SELECT u FROM User u WHERE u.status = 1")
//    Collection<User> findAllActiveUsers();

//    @GetMapping
//    public Favorite searchFavorite(@Query("SElECT u FROM u Favorite WHERE ")) {
//
//    }

//    create favorite
//    @PostMapping("/addFave")
//    public Favorite createFavorite(@RequestBody Favorite favorite){
////        return favoriteService.addFavorite(favorite);
//        return favoriteRepository.save(favorite);
//    }



    @GetMapping("/{id}")
    public ResponseEntity<Favorite> getFavoriteById(@PathVariable int id) {
        Favorite favorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );
        return ResponseEntity.ok(favorite);
    }


//    create favorite
    @PostMapping("/create")
    public Favorite favorite(@RequestBody Favorite favorite ) {
        return favoriteRepository.save(favorite);
    }




    //    update favorite
    @PutMapping("/{id}")
    public ResponseEntity<Favorite> updateFavorite(@PathVariable int id,
                                                   @RequestBody Favorite favoriteDetails) {
        Favorite updateFavorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );
        updateFavorite.setName(favoriteDetails.getName());
        updateFavorite.setUserId(favoriteDetails.getUserId());
        updateFavorite.setPlantId(favoriteDetails.getPlantId());

        favoriteRepository.save(updateFavorite);
        return ResponseEntity.ok(updateFavorite);
    }


//    update single value
    @PatchMapping("/{id}")
    public ResponseEntity<Favorite> patchFavorite(@PathVariable int id,
                                                   @RequestBody Favorite favoriteDetails) {
        Favorite updateFavorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );
        updateFavorite.setName(favoriteDetails.getName());
        updateFavorite.setUserId(favoriteDetails.getUserId());
        updateFavorite.setPlantId(favoriteDetails.getPlantId());

        favoriteRepository.save(updateFavorite);
        return ResponseEntity.ok(updateFavorite);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteFavorite(@PathVariable int id) {
        Favorite favorite =
                favoriteRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(
                        "favorite does not exist with id: " + id) );


        favoriteRepository.delete(favorite);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




//    @GetMapping("/findId")
//    public Optional<Favorite> getFavoriteById(Integer id) {
////        Optional<Favorite> favorite = favoriteRepository.findById(id);
//        return favoriteRepository.findById(id);
//    }




    @PostMapping("/")
    public String saveToDB () {
        return "please route me for posting";
    }


    @PostMapping("/huh")
    public String postTest(Favorite favorite) {
        return "success";
    }


//    @GetMapping("/")
//    public String getAll() {
//        return favoriteService.findAllFavorites().toString();
////        return "favorites get";
//    }


//    @ResponseBody
//    @GetMapping("/{id}")
//    public String getUserById(@RequestBody String id ) {
////        return favoriteRepository.findById(Integer.valueOf(id));
//        return id;
//    }


//    return info from generated id
    @ResponseBody
    @GetMapping("/id")
    public Optional<Favorite> getUserFavorites(@RequestBody int id) {
        return favoriteRepository.findById(id);
    }

//    @ResponseBody
//    @GetMapping("/userID")
//    public Optional<Favorite> getUserId(@RequestBody int id)  {
//        Optional<Favorite> userId = favoriteRepository.findById(String.valueOf(id));
//        return userId;
//    }

//    @ResponseBody
//    @GetMapping("/name")
//    public List<Favorite> findByName(@RequestBody String name) {
//
//        return favoriteRepository.findByName(name);
//    }

//    @ResponseBody
//    @GetMapping("/userId")
//    public List<Favorite> getUserId(@RequestBody String userId) {
//        return favoriteRepository.findByUserId(userId);
//    }


//    posting name and userId(from firebase)



//    @ResponseBody
//    @GetMapping("/userId")
//    public Optional<Favorite> getUserFavorites(@RequestBody String userId) {
//        return favoriteRepository.findById(id);
//    }


//    @GetMapping("/find")
//    public String getName (Model model, @RequestParam String name) {
//        model.addAttribute(favoriteService.findByName(name));
//        return ;
//
//    }




//    @GetMapping(path="/allfavorites")
//    public @ResponseBody Iterable<Favorite> getAllFavorites() {
//        // This returns a JSON or XML with the users
//        return favoriteService.findAllFavorites();
//    }


    @GetMapping(path="/all")
    public @ResponseBody Iterable<Favorite> findAll() {
        // This returns a JSON or XML with the users
        return favoriteRepository.findAll();
    }




//    @PostMapping("/add")
//    public String addFavorite(Model model, Favorite newFavorite, @RequestParam String name,
//                              @RequestParam String userId){
//        favoriteService.addFavorite(newFavorite);
////        model.addAttribute(new Favorite());
//        model.addAttribute("name", name);
//        model.addAttribute("userId", userId);
////        favoriteRepository.save();
////        return favoriteService.addFavorite(favorite);
//        return "added";
//    }








//    @PostMapping("/add")
//    public @ResponseBody String addFavorite (@RequestParam String name,
//                                             @RequestParam String userId) {
//        Favorite n = new Favorite();
//        n.setName(name);
//        n.setUserId(userId);
//        favoriteRepository.save(n);
//        return "Saved";
//    }

    //    @PostMapping(path="/add") // Map ONLY POST Requests
//    public @ResponseBody String addNewUser (@RequestParam String name
//            , @RequestParam String email) {
//        // @ResponseBody means the returned String is the response, not a view name
//        // @RequestParam means it is a parameter from the GET or POST request
//
//        User n = new User();
//        n.setName(name);
//        n.setEmail(email);
//        userRepository.save(n);
//        return "Saved";
//    }

//    public String processAddEmployerForm(@ModelAttribute @Valid Favorite newFavorite,
//                                         Errors errors, Model model) {
//
//        favoriteRepository.save(newFavorite);
//        return favoriteService.findAllFavorites().toString();
//    }


}


//
//@Controller // This means that this class is a Controller
//@RequestMapping(path="/demo") // This means URL's start with /demo (after Application path)
//public class MainController {
//    @Autowired // This means to get the bean called userRepository
//    // Which is auto-generated by Spring, we will use it to handle the data
//    private UserRepository userRepository;
//
//    @PostMapping(path="/add") // Map ONLY POST Requests
//    public @ResponseBody String addNewUser (@RequestParam String name
//            , @RequestParam String email) {
//        // @ResponseBody means the returned String is the response, not a view name
//        // @RequestParam means it is a parameter from the GET or POST request
//
//        User n = new User();
//        n.setName(name);
//        n.setEmail(email);
//        userRepository.save(n);
//        return "Saved";
//    }
//
//    @GetMapping(path="/all")
//    public @ResponseBody Iterable<User> getAllUsers() {
//        // This returns a JSON or XML with the users
//        return userRepository.findAll();
//    }
//}