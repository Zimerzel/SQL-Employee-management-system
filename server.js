const inquirer = require('inquirer');
const mysql = require('mysql2');
const { toUnicode } = require('punycode');
const { start } = require('repl');
const { throwError } = require('rxjs');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'ENV.PW
      database: 'tracker'
    },
);

//Prompts
const startQuestions = [
    {
        type:'list',
        name:'todo',
        message:'What would you like to do?',
        choices:[
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee Role",
        ]
    },
    
];


function startMenu() {
    inquirer.prompt(startQuestions).then(data => {
        console.log(data);
            const {todo} = data;
      
              if (todo === 'View All Employees') {
                  getAllEmployees();
              }
      
              if (todo === 'View All Departments') {
                getAllDepartments();
            }
      
              if (todo === 'View All Employees By Role') {
                  getAllRoles();
              }
      
              if (todo === 'Add Employee') {
                  addEmployee();
              }
      
              if (todo === 'Add Department') {
                  addDepartment();
              }
      
              if (todo === 'Update Employee Role') {
                  updateEmployeeRole();
              }
      
              if (todo === 'Update Employee Manager') {
                  updateEmployeeManager();
              }
      
              if (todo === 'View All Roles') {
                  getAllRoles();
              }
      
              if (todo === 'Add Role') {
                  addRole();
              }
      
              if (todo === 'Remove Role') {
                  removeRole();
              }
      
              if (todo === 'Add Department') {
                  addDepartment();
              }
      
              if (todo === 'View Department Budgets') {
                  viewDepartmentBudget();
              }
      
              if (todo === 'Remove Department') {
                  removeDepartment();
              }
      
              if (todo === 'Exit') {
                  connection.end();
              }
        });
}

function getAllEmployees(){
    db.query('SELECT * FROM tracker.employee',function(err,res){
        if(err)throw err;
        console.table(res);
        startMenu();
});
}

function getAllDepartments(){
    db.query('SELECT * FROM tracker.department',function(err,res){
        if(err)throw err;
        console.table(res);
        startMenu();
});
}

function getAllRoles(){
    db.query('SELECT * FROM tracker.role',function(err,res){
        if(err)throw err;
        console.table(res);
        startMenu();
});
}

addEmployee = () => {
    db.query("SELECT * FROM role", (err, result) => {
      if (err) throw err;
      const roles = result.map((role) => ({
          value: role.id,
          name: role.title,
          }));
          db.query("SELECT * FROM employee", (err, result) => {
          if (err) throw err;
          const managers = result.map((employee) => ({
              value: employee.id,
              name: employee.first_name + " " + employee.last_name,
          }));
          managers.push({ name: "None", value: null });
          inquirer
              .prompt([
              {
                  type: "input",
                  message: "New employee first name:",
                  name: 'first_name',
              },
              {
              type: "input",
              message: "New employee last name:",
              name: 'last_name'
              },
              {
              type: "list",
              message: "New employee role:",
              name: "role_id",
              choices: roles
              },
              {
                  type: "list",
                  message: "New employee manager:",
                  name: "manager_id",
                  choices: managers,
              }
              ]
              )
              .then(function (answer) {
              db.query(
                  "INSERT INTO employee SET ?",
                  answer,
                  function (err, result) {
                  if (err) {
                      throw err;
                  }
                  console.log("\nNew employee " + answer.first_name + " " + answer.last_name + "added to database.\n");
                  startMenu();
                  }
              );
              });
          });
      })
  };

addRole = () => {
    inquirer
        .prompt([
            {
            type: "input",
            message: "New role name:",
            name: "new_role"
            },
            {
            type: "number",
            message: "New role salary:",
            name: "new_salary"
            }
        ])
        .then(answer => {
            const params = [answer.new_role, answer.new_salary];
            const roleQuery = `SELECT name, id FROM department`;
            db.query(roleQuery, (err, data) => {
                if (err) throw err;
                const depts = data.map(({ name, id }) => ({ name: name, value: id}));
                inquirer.prompt([
                    {
                    type: 'list',
                    name: 'new_dept',
                    message: "New role department:",
                    choices: depts
                    }
                ])
                .then(deptChoice => {
                    const department = deptChoice.new_dept;
                    params.push(department);
                    console.log(params);
                    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
                    db.query(sql, params, (err, result) => {
                        if (err) throw err;
                    console.log("\nNew role " + answer.new_role + "added to database.\n");
                    startMenu();
                    })
                })
            })
        })
};





startMenu();
