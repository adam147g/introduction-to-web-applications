package com.lab3.zad1.controller;

import com.lab3.zad1.dao.Person;
import com.lab3.zad1.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HelloController {
    @GetMapping("/helloString")
    public String sayHelloString(@RequestParam(name = "name", defaultValue = "Guest") String name) {
        return "Cześć, " + name + "!";
    }
    private final PersonService personService;
    @Autowired
    public HelloController(PersonService personService) {
        this.personService = personService;
    }
    @GetMapping("/hello")
    public ResponseEntity<HelloResponse> sayHello(@RequestParam(name = "name", defaultValue = "Guest") String name) {
        HelloResponse response = new HelloResponse("Cześć, " + name + "!");
        return ResponseEntity.ok(response);
    }

    // Klasa reprezentująca odpowiedź w formacie JSON
    record HelloResponse(String message) {}

//    http://localhost:8080/person
    @GetMapping("/person")
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> persons = personService.getPersons();
        return ResponseEntity.ok(persons);
    }

//    http://localhost:8080/person/2
    @GetMapping("/person/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
        Person person = personService.getPerson(id);
        if (person != null) {
            return ResponseEntity.ok(person);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<HelloResponse> createPerson(@RequestParam String name,
                                                      @RequestParam String surname,
                                                      @RequestParam String job) {
        Person person = new Person();
        person.setName(name);
        person.setSurname(surname);
        person.setJob(job);

        Person savedPerson = personService.create(person);

        HelloResponse response = new HelloResponse("Person added with ID: " + savedPerson.getId());
        return ResponseEntity.ok(response);
    }
}
