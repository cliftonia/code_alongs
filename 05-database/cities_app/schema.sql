CREATE DATABASE cities_app;

CREATE TABLE cities (
  id  SERIAL PRIMARY KEY,
  name VARCHAR(300),
  population INTEGER
);

INSERT INTO cities (name, population) VALUES ('melbourne', 4443000);
INSERT INTO cities (name, population) VALUES ('houston', 2313000);

ALTER TABLE cities ADD COLUMN country VARCHAR(300);