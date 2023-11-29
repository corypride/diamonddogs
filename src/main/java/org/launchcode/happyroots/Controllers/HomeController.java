package org.launchcode.happyroots.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/plants")
public class HomeController {
    @GetMapping("/")
    public String getAll() {
        return "Hello world";
    }

    @GetMapping("/test")
    public String test() {
        return "Hello from secured";
    }
}
