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

function addEmployee() {
    connection.query('SELECT * FROM roles', function(err, res){
        if(err) throw err;
        inquirer
        .prompt([
            {
                name:'first_name',
                type: 'input',
                message: 'Please enter your first name'
            },
            {
                name:'last_name',
                type: 'input',
                message: 'Please enter your last name'
            },
            {
                name:'last_name',
                type: 'input',
                message: 'Please enter your last name'
            },
            {
                name:'manager_id',
                type: 'input',
                message: 'What is the id for your manager?'
            },
            {
                name:'roles',
                type:'list',
                choices: function() {
                    var roleArr = [];
                    for(let i = 0; i < res.length; i++) {
                        roleArr.push(res[i].title);
                    }
                    return roleArr;
                },
                message:'What is your role?'
            }
        ]).then(function(kite) {
            let roleID;
            for(let i = 0; i < res.length; i++){
                if(res[i].title == answer.roles){
                    roleID = res[i].id;
                    console.log(roleID)
                }
            }
            connection.query(
                "INSERT INTO employees SET ?",
                {
                    first_name: kite.first_name,
                    last_name: kite.last_name,
                    manager_id: kite.manager_id,
                    role_id: roleID,

                },
                function(err) {
                    if(err) throw err;
                    console.log('test test test added employee');
                    menu();
                }
            )
        })
    })
}