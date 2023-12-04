package com.lab3.zad1.loder;

import com.lab3.zad1.dao.Person;
import com.lab3.zad1.repository.PersonsRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {
    private static final Logger log = LoggerFactory.getLogger(DataLoader.class);
    @Bean
    public CommandLineRunner loadTestData(PersonsRepository repository) {
        return args -> {
            // Zapisz kilka przykładowych osób
            repository.save(new Person("John", "Doe", "IT"));
            repository.save(new Person("John", "Smith", "Tester"));

            // Pobierz wszystkie osoby i wyświetl w logach
            log.info("Persons found with findAll():");
            log.info("-------------------------------");
            repository.findAll().forEach(person -> {
                log.info(person.toString());
            });
        };
    }
}
