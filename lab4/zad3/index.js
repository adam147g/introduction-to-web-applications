const express = require('express');
const models = require("./db");
const personsRouter = require('./routes/persons');

const app = express();
const port = 3000;

// Utwórz stałe połączenie z bazą danych na starcie aplikacji
models.sequelize.sync().then(function() {
  console.log('Connected to the database');

  // Dodaj middleware do obsługi żądań
  app.use(express.json());

  // Użyj routera do obsługi ścieżki /api/persons
  app.use('/persons', personsRouter);
  
  // Startuj serwer
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch(function(err) {
  console.error('Error connecting to the database:', err);
});
