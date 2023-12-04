package com.lab3.zad1.service;

import com.lab3.zad1.dao.Person;

import java.util.List;

public interface PersonService {
    List<Person> getPersons();
    Person getPerson(String surname);
    Person create(Person person);
    Person getPerson(Long id);
}