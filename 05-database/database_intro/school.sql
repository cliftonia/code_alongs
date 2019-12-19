CREATE DATABASE school;

\c school -- this how you connect to the database

CREATE TABLE students (
  name VARCHAR(200),
  grade INTEGER
);


-- this is how you would do a read of the database
SELECT name, grade FROM students; 
-- OR
SELECT * FROM students; -- this is shortcut to displayy all the columns 

-- this is how you add values to your table -- string is VARCHAR
INSERT INTO students (name, grade) VALUES ('james', 4);
INSERT INTO students (name, grade) VALUES ('clifton', 2);

SELECT * FROM students WHERE grade = 2;

DELETE FROM students WHERE name = 'james';

-- * Means from all columns 
-- drop table students; is how you would remove the table 