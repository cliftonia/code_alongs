var accountBalance = 50;
var age = 18;
var beerPrice = 5;

// var counter = 3;

console.log("go to pub");

if (age >= 18) {
  while (accountBalance >= beerPrice) {
    console.log("have a beer");
    accountBalance -= beerPrice;
    if (accountBalance === 0) {
      console.log(
        "you have $" + accountBalance + " dollars left in your account. Go home"
      );
    }
  }
} else {
  console.log("You are underage have some nuts");
}

// console.log("you have $" + accountBalance + " dollars left in your account. Go home");

var i = 0;

while (i < 21) {
  console.log(i);
  i += 1;
}
