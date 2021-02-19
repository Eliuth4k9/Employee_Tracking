DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR (100) NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR (100) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    CONSTRAINT fkey_dept FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE 
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (100) NOT NULL,
    last_name  VARCHAR (100) NOT NULL,
    role_id INT (10) NOT NULL,
    CONSTRAINT fkey_roles FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    manager_id INT,
    CONSTRAINT fkey_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;