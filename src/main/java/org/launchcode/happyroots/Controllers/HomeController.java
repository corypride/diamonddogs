package org.launchcode.happyroots.Controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/auth")
public class HomeController {

    @GetMapping("/")
    public String getAll() {
        return "Hello world from public";
    }

    @GetMapping("/test")
    public String test() {
        return "Hello from secured";
    }
}
