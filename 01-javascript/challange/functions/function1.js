// # Which number's bigger?

// Write a function named greaterNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (higher) number.
// - Call that function 2 times with different number pairs, and log the output to make sure it works
// -(e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function(number1, number2) {
  var first = number1;
  var second = number2;
  if (first > second) {
    console.log(
      "The greater number of " + number1 + " and " + number2 + " is " + number1
    );
  } else if (second > first) {
    console.log(
      "The greater number of " + number1 + " and " + number2 + " is " + number2
    );
  }
};

greaterNum(4, 20);

max(4, 5);

// # The World Translator

// Write a function named helloWorld that:
// - takes 1 argument, a language code (e.g. "es", "de", "en")
// - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// - Call that function for each of the supported languages and log the result to make sure it works.

var helloWorld = function(language) {
  var spanish = "Hola Mundo";
  var german = "Hallo Welt";
  var english = "Hello World";
  if (language == "es") {
    console.log(spanish);
  } else if (language == "de") {
    console.log(german);
  } else if (language == "en") {
    console.log(english);
  }
};

helloWorld("es");

// # The Grade Assigner

// Write a function named assignGrade that:
// - takes 1 argument, a number score.
// - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that function for a few different scores and log the result to make sure it works.

var assignGrade = function(numberScore) {
  if (numberScore >= 45) {
    console.log("you got an A");
  } else if (numberScore >= 40) {
    console.log("you got an B");
  } else if (numberScore >= 30) {
    console.log("you got an C");
  } else if (numberScore >= 20) {
    console.log("you got an D");
  } else if (numberScore >= 10) {
    console.log("you got an E");
  }
};

assignGrade(34);

// # The Pluralizer

// Write a function named pluralize that:
// - takes 2 arguments, a noun and a number.
// - returns the number and pluralized form, like "5 cats" or "1 dog".
// - Call that function for a few different scores and log the result to make sure it works.
// - Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var pluralize = function(number, noun1, noun2) {
  if (number === 1) {
    console.log(number + " " + noun1 + " and " + noun2);
  } else {
    console.log(number + " " + noun1 + "s and " + noun2 + "s");
  }
};

pluralize(5, "cats", "dogs");

var table = {
  en: "Hello World",
  es: "salute mondo",
  de: "hallo welt"
};

var hashTag = function(grid) {
  console.log(
    grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      "\n" +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      "\n" +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      "\n" +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      "\n" +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      "\n" +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      "\n" +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      "\n" +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid +
      " " +
      grid
  );
};

var board = parseInt(prompt("Choose a board size from 8 or 16"));

if (board === 8) {
  for (let index = 0; index < 32; board++) {
    console.log("# "[index]);
  }
} else if (board === 32) {
  for (let index = 0; index < 62; board++) {
    console.log("# "[index]);
  }
}

for (let index = 0; index < 32; index++) {
  console.log("# ");
  if ("#" % 5 == 0) {
    console.log("\n");
  }
}

function hashDisplay() {
  var display = "";
  for (var i = 0; i < 4; i++) {
    display += " # # # #\n# # # # \n";
  }
  console.log(display);
}
hashDisplay();

function hashDisplay2(width, height) {
  var firstLine = "";
  var secondLine = "";
  var display = "";
  for (var i = 0; i < width; i++) {
    firstLine += "# ";
  }
  console.log(firstLine);
  for (var i = 0; i < width; i++) {
    secondLine += " #";
  }
  console.log(secondLine);
  for (var i = 0; i < height / 2; i++) {
    display += firstLine + "\n" + secondLine + "\n";
  }
  console.log(display);
}
hashDisplay2(4, 4);
hashDisplay2(8, 8);
hashDisplay2(16, 16);

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

for (var i = 0; i < 20; i++) {
  if (isEven(i)) {
    console.log(i);
  }
}

const vowelCount = word => {
  word = word.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  vowels.forEach(v => {
    word.forEach(w => {
      if (v === w) {
        count += 1;
      }
    });
  });

  return count;
};

var word = "stealing";
var vowels = ["a", "e", "i", "o", "u"];
var count = 0;
// go through each letter in word
for (var i = 0; i < word.length; i++) {
  // go through each vowel in the array
  for (var j = 0; j < vowels.length; j++) {
    //a         //s
    if (vowels[j] === word[i]) {
      console.log("its a vowel");
      count++;
    }
  }
}

var word = "stealing";
var vowels = ["a", "e", "i", "o", "u"];
var count = 0;
// go through each letter in word
for (var i = 0; i < word.length; i++) {
  // go through each vowel in the array
  if (vowels.indexOf(word[i]) !== -1) {
    console.log("its a vowel");
    count++;
  }
}
console.log(count);

vowels.indexOf(j);

words.indexOf(vowels.indexOf(j)) !== -1;
