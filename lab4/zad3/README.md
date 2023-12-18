# Getting Started with SQLite3 Express Database in This Project

To start the SQLite3 database, follow these steps:

1. Open the command line in the project directory.
   ```bash
   cd path/to/your/project
   ```
2. Start the application.
    ```bash
    npm start
    ```
3. To test the database using Postman:<br>
    3.1 For a GET request to retrieve all persons:<br>
        ```http://localhost:3000/persons/
        ```<br>
    3.2 For a GET request to retrieve a specific person (e.g., person with ID 1):<br>
        ```http://localhost:3000/persons/1
        ```<br>
    3.3 For a POST request to add a new person with parameters (name, surname, job):<br>
        ```http://localhost:3000/persons/add?name=Jan&surname=Kowalski&job=Dev
        ```<br>
    3.4 Check if the person has been added by making another GET request:<br>
        ```http://localhost:3000/persons/
        ```