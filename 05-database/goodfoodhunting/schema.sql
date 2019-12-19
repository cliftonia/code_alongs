CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  image_url TEXT
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT,
  dish_id INTEGER
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(300),
  password_digest VARCHAR(400)
);

INSERT INTO dishes (title, image_url) VALUES ('pudding', 'https://spicysouthernkitchen.com/wp-content/uploads/Rice-Pudding-2.jpg');

INSERT INTO dishes (title, image_url) VALUES ('cake', 'https://www.abc.net.au/cm/rimage/11003824-1x1-xlarge.jpg?v=2');

INSERT INTO comments (body, dish_id) VALUES ('yucky', 19);