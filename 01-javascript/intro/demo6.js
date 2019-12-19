// var counter = 1;

// while (counter <= 10) {
//   console.log(counter);
//   counter += 1;
// }

// for (let counter = 1; counter <= 10; counter ++) {
//   console.log(counter);
// }

// while (counter <= 20) {
//   console.log(counter);
//   counter += 2;
// }

for (let counter = 0; counter <= 20; counter++) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
}

for (let counter = 1; counter <= 20; counter += 2) {
  console.log(counter);
}

// # The Vegan Test

// *On the menu tonight: Steak, fruit salad, tofurkey, pork chops.*

// prompts the user for their menu choice and assign it to a variable.

//  - If a vegan can eat it, return "This cuisine is vegan friendly."
//  - Otherwise, return "Vegans beware!"
//  - For the sake of this exercise. Tofurkey is definitely vegan friendly.

// **Hint**: Two identical strings are considered to be equal to each other.

var haveOrdered = false;
var menu = ["STEAK", "PORK CHOPS", "TOFURKEY", "FRUIT SALAD"];

while (!haveOrdered) {
  var foodChoice = prompt(
    "what would you like to eat: Steak, fruit salad, tofurkey, pork chops"
  ).toUpperCase();

  if (foodChoice === "FRUIT SALAD" || foodChoice === "TOFURKEY") {
    console.log("vegan friendly");
    haveOrdered = true;
  } else if (foodChoice === "STEAK" || foodChoice === "PORK CHOPS") {
    console.log("vegans beware");
    haveOrdered = true;
  } else {
    alert("we dont have that");
  }
}
