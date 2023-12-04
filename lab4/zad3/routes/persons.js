const express = require('express');
const router = express.Router();
const models = require("../db");

// Endpoint do pobierania wszystkich osób
router.get('/', async (req, res) => {
  try {
    const persons = await models.PersonSchema.findAll();
    res.status(200).json(persons);
  } catch (error) {
    console.error('Error fetching persons:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint do pobierania osoby po ID
router.get('/:id', async (req, res) => {
  try {
    const person = await models.PersonSchema.findByPk(req.params.id);
    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }
    res.status(200).json(person);
  } catch (error) {
    console.error('Error fetching person by ID:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Endpoint do dodawania osoby za pomocą parametrów zapytania
router.post('/add', async (req, res) => {
    try {
      const { name, surname, job } = req.query;
      if (!name || !surname || !job) {
        return res.status(400).json({ message: 'Name, surname, and job are required parameters' });
      }
      const person = await models.PersonSchema.create({
        name: name,
        surname: surname,
        job: job
      });
      res.status(201).json(person);
    } catch (error) {
      console.error('Error creating person:', error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;
