USE employee_db;

INSERT INTO departments(department_name)
VALUES ('Twitch Streamer');

INSERT INTO departments(department_name)
VALUES ('ForEx Trader');

INSERT INTO departments(department_name)
VALUES ('Sales');

--sales
INSERT INTO roles(role_title, salary, department_id)
VALUES ('Sales expert', 120000, 1);

INSERT INTO roles(role_title, salary, department_id)
VALUES ('Sales person', 45000, 1);

--ForEx
INSERT INTO roles(role_title, salary, department_id)
VALUES ('ForEx expert', 4200000, 2);

INSERT INTO roles(role_title, salary, department_id)
VALUES ('ForEx beginner', 40000, 2);

--Twitch
INSERT INTO roles(role_title, salary, department_id)
VALUES ('Day streamer', 150000, 3);

INSERT INTO roles(role_title, salary, department_id)
VALUES ('Night streamer', 1800000, 3);

--emp seeds 

--sales
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Kevin', 'From sales', 1, NULL);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Ryu', 'From the streets', 2, 1);

--Forex
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Cue', 'Banks', 3, NULL);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Walter', 'Uphoi', 4, 2);

--Twitch
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Khashi', 5, NULL);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('Myron', 'Gains', 6, 3);