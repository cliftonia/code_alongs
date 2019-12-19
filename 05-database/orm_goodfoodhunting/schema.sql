CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  image_url TEXT,
  category_id INTEGER,
  user_id INTEGER,
  created_at TIMESTAMP,
  updated_at  TIMESTAMP
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  body TEXT,
  dish_id INTEGER,
  user_id INTEGER
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(300),
  password_digest VARCHAR(400)
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  dish_id INTEGER
);

INSERT INTO dishes (title, image_url) VALUES ('pudding', 'https://spicysouthernkitchen.com/wp-content/uploads/Rice-Pudding-2.jpg');

INSERT INTO dishes (title, image_url) VALUES ('cake', 'https://www.abc.net.au/cm/rimage/11003824-1x1-xlarge.jpg?v=2');

INSERT INTO comments (body, dish_id) VALUES ('yucky', 19);
