const inquirer = require('inquirer');
const mysql = require("mysql");
const table = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "$",
    database: "employee_db"
})
connection.connect(function(err){
    if ('I am online', err) throw err;
    menu();
})

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
        ]
    }).then(function(picked) {
        console.log(picked);
        switch (picked.action) {
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
            default:
                break;
        }
    })
}

function viewDepartments() {
    var query = 'SELECT * FROM departments';
    connection.query(query, function(err, res) {
    if(err)throw err;
    console.table('View Departments:', res);
    menu();
    })
}

function viewEmployees() {
    var query = 'SELECT * FROM employees';
    connection.query(query, function(err, res) {
    if (err) throw err;
    console.log(res.length + 'employee data is here!');
    console.table('View employees:', res); 
    menu();
    })
}

function viewRoles() {
    var query = 'SELECT * FROM roles';
    connection.query(query, function(err, res){
        if(err) throw err;
        console.table('View roles', res);
        menu();
    })
}