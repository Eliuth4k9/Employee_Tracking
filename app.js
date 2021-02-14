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
    }])
);
menu();