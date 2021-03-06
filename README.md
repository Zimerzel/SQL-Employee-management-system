![project 12](https://user-images.githubusercontent.com/79726069/121832740-63ffd680-cc90-11eb-8e9a-ca331cb6b39e.PNG)

# SQL-Employee-management-system

## User Story
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Acceptence criteria
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Table of Contents

* [User Story](#user-story)
* [Acceptence Criteria](#acceptence-criteria)
* [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [Video Link](#video-link)

## Installation

* npm init
* npm install inquirer
* npm install mysql2
* npm install console-table

## Usage
Run the following command at the root of your project:
* node server.js

    or

* npm start

## Credits
* Zach Imerzel

## Questions
Contact me with any questions: 

Email : Zach.imerzel@gmail.com
Github : https://github.com/Zimerzel

## Video Link
* This video is a sample due to the project not being in a fully developed state:
https://drive.google.com/file/d/1SHHvgsSGIl3FMdxYq8PTlDKvs96uYbgv/view
