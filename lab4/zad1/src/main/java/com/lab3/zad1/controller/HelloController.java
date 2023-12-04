package com.lab3.zad1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    // Publiczna funkcja zwracająca string i przyjmująca jeden argument name
    @GetMapping("/hello")
    public String sayHello(@RequestParam(name = "name", defaultValue = "Guest") String name) {
        return "Cześć, " + name + "!";
    }
}
