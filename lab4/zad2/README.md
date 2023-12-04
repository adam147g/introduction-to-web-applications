# Getting Started with SQLite3 Flash Database in This Project

To start the SQLite database, follow these steps:

1. Open the command line in the project directory.
   ```bash
   cd path/to/your/project
   ```
2. Activate the virtual environment if it's not activated yet.<br>
    ```bash
    venv\Scripts\activate 
  
3. Run the Flask application:<br>
    ```bash
    python app.py
4. To test the database using Postman:<br>
    4.1 For a GET request to retrieve all persons:<br>
        ```bash
        http://127.0.0.1:5000/persons
        ```<br>
    4.2 For a GET request to retrieve a specific person (e.g., person with ID 1):<br>
        ```bash 
        http://127.0.0.1:5000/persons/1
        ```<br>
    4.3 For a POST request to add a new person with parameters (name, surname, job):<br>
        ```bash
        http://127.0.0.1:5000/persons?name=Jan&surname=Kowalski&job=Dev
        ```<br>
    4.4 Check if the person has been added by making another GET request:<br>
        ```bash
        http://127.0.0.1:5000/persons/2
        ```
