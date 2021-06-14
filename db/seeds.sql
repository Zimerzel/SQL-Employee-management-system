USE tracker
  INSERT INTO department(name)
  VALUES
  ('Accounting'),
  ('Finance'),
  ('Sales'),
  ('Legal'),
  ('Engineer');

  INSERT INTO role (title, salary, department_id)
  VALUES
  ('Accountant', 80000, 1),
  ('Finacial Advisor', 60000, 2),
  ('Salesperson', 95000, 3),
  ('Laywer',150000, 4),
  ('Enineer',110000, 5);

 INSERT INTO employee (first_name, last_name, role_id, manager_id)
 VALUES
 ('Ronald', 'Firbank', 1, NULL),
 ('Virginia', 'Woolf', 1, NULL),
 ('Piers', 'Gaveston', 2, 1 ),
 ('Charles', 'LeRoi', 2, 2),
 ('Katherine', 'Mansfield', 3, NULL),
 ('Dora', 'Carrington', 3, 2),
 ('Edward', 'Bellamy', 4, 1),
 ('Montague', 'Summers', 5, NULL),
 ('Octavia', 'Butler', 5, 3),
 ('Unica', 'Zurn', 5, NULL);