package com.lab3.zad1.repository;

import com.lab3.zad1.dao.Person;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonsRepository extends CrudRepository<Person, Long> {
    List<Person> findAll();
    Person findBySurname(String surname);
}
