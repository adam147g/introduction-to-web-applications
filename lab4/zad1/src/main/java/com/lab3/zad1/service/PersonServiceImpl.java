package com.lab3.zad1.service;

import com.lab3.zad1.dao.Person;
import com.lab3.zad1.repository.PersonsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonsRepository personsRepository;

    @Override
    public List<Person> getPersons() {
        return personsRepository.findAll();
    }

    @Override
    public Person getPerson(String surname) {
        return personsRepository.findBySurname(surname);
    }

    @Override
    public Person create(Person person) {
        return (Person) personsRepository.save(person);
    }

    @Override
    public Person getPerson(Long id) {
        return (Person) personsRepository.findById(id).orElse(null);
    }
}
