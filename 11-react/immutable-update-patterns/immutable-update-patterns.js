// arrays

const toppings = ["bun", "cheese", "tomato"];

// how to make copies
// shallow clone
console.log(toppings.slice(0));

// using es6 Array.from()
console.log(Array.from(toppings));

// using es6 spread
console.log([...toppings]);

// immutable delete
// remove bun from array
console.log(toppings.filter(topping => topping !== "bun"));

// immutable add using array spread
// add pickles to the end of the array
console.log([...toppings, "pickles"]);

// immutable update using map
// update cheese to cheeeeseeey
console.log(
  toppings.map(topping => {
    if (topping === "cheese") {
      return "cheeseeeey";
    } else {
      return topping;
    }
  })
);

console.log(
  toppings.map(topping => (topping === "cheese" ? "cheessssy" : topping))
);
