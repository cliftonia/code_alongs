/*
# Exercises: Objects

## The Recipe Card

Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

- Mole
- Serves: 2
- Ingredients:
- cinnamon
- cumin
- cocoa

## The Reading List

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

## The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// The Recipe Card

var favoriteRecipe = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

console.log("name: " + favoriteRecipe.title);
console.log("servings: " + favoriteRecipe.servings);
console.log("ingredients: " + favoriteRecipe.ingredients.toString());

for (var i = 0; i < favoriteRecipe.ingredients.length; i++) {
  console.log(favoriteRecipe.ingredients[i]);
}

// The Reading List

var totems = [
  {
    title: "Open the Door",
    author: "Tam Sullivan",
    read: true
  },
  {
    title: "Shut Up",
    author: "Manny Hand",
    read: false
  }
];

for (var index = 0; index < totems.length; index++) {
  var allTotems = totems[index];
  var totemsConcat = allTotems.title + " by " + allTotems.author;
  if (allTotems.read) {
    console.log("You have read " + totemsConcat);
  } else {
    console.log("you need to read " + totemsConcat);
  }
}

var scrolls = [
  {
    title: "Life after Death",
    author: "Pete Smith",
    read: true
  },
  {
    title: "Next Level",
    author: "Sam Catch",
    read: false
  }
];

for (var index = 0; index < scrolls.length; index++) {
  var scroll = scrolls[index];
  var scrollInfo = scroll.title + " by " + scroll.author;
  if (scroll.read) {
    console.log("you have already read " + scrollInfo);
  } else {
    console.log("you need to read " + scrollInfo);
  }
}

var movieScripts = [
  {
    title: "Magic Mountain",
    author: "Romeo",
    read: true
  },
  {
    title: "Tropical Dash",
    author: "James Spade",
    read: false
  }
];

for (let index = 0; index < movieScripts.length; index++) {
  var movieScript = movieScripts[index];
  var movieScriptInfo = movieScript.title + " by " + movieScript.author;
  if (movieScript.read) {
    console.log("you have already read " + movieScriptInfo);
  } else {
    console.log("you still need to read " + movieScriptInfo);
  }
}

var books = [
  {
    title: "The Hobbit",
    author: "J.R.R.",
    alreadyRead: true
  },
  {
    title: "Harry Potter",
    author: "JK Rowling",
    alreadyRead: false
  },
  {
    title: "The Word",
    author: "Unknown",
    alreadyRead: false
  }
];

for (let index = 0; index < books.length; index++) {
  var book = books[index];
  var bookConcat = book.title + " by " + book.author;
  if (book.alreadyRead) {
    console.log("You already read " + bookConcat);
  } else {
    console.log("You still need to read " + bookConcat);
  }
}

// The Movie Database

var movie = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: ["Puff", "Jackie", "Living Sneezes"]
};

function printFilm() {
  console.log(
    movie.title +
      " lasts for " +
      movie.duration +
      " minutes. Stars: " +
      movie.stars
  );
}
