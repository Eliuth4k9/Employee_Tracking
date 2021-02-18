const inquirer = require('inquirer');
// const db = require('./db');

const menu = () => (
    inquirer
    .prompt([{
        name: 'action',
        type: 'list',
        message:'How can I help you?',
        choices: [
            'View departments',
            'View employees',
            'View roles',
            'Add new role',
            'Add new department',
            'Add new employee',
            'Exit',
        ],
    }]).then(function(click) {
        switch(click.choices){
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
    })
);
menu();