var mysql = require("mysql");
const inquirer = require('inquirer');
// const connection = require('./db/connection');
require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_db"
});

connection.connect(function(err) {
    if(err) throw err;
});

const menu = () => {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'How can I help you?',
        choices: [
            'View departments',
            'View employees',
            'View roles',
            'Add new role',
            'Add new department',
            'Add new employee',
            'Exit',
        ],
    })
    .then(function(clicked) {
        console.log(clicked);
        switch (clicked.action) {
            case 'View departments':
                viewDepartments();
                break;

            case 'View employees':
                viewEmployees();
                break;

            case 'View roles':
                viewRoles();
                break;

            case 'Add new role':
                addRoles();
                break;

            case 'Add new department':
                addDepartment();
                break;

            case 'Add new department':
                addDepartment();
                break;

            case 'Add new employee':
                addEmployee();
                break;

            case 'Exit':
                endConnect();
                break;
        }
    });
};
menu(); 


function viewDepartments() {
    connection.query("SELECT * FROM department", function(err, clicked) {
      console.log("\n Departments Retrieved from Database \n");
      console.table(clicked);
    });
    menu();
  }

  function viewEmployees() {
    console.log("retrieving employess from database");
    var fancyQuery =
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id;";
    connection.query(fancyQuery, function(err, clicked) {
      console.log("\n Employees retrieved from Database \n");
      console.table(clicked);
    });
    menu();
  }
// function viewEmployees() {
//     const query = 'SELECT * FROM employee';
//     connection.query(query, function(err, res){
//         if(err) throw err;
//         console.log(res.length + 'employee here steve');
//         console.table('All Employees:', res);
//         // menu();
//     })
// };

// function viewDepartments() {
//     const query = "SELECT * FROM department";
//     connection.query(query, (err, test) => {
//         if(err) throw err;
//         console.table(test);
//         // menu();
//     })
// }