
// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters

// Example: 
// combineWords('dog', 'house');
// "doghouse"

var combineWords = function(word1, word2) {
	console.log(word1 + word2)
}

var result = combineWords('Cheese', 'Burger');
console.log(result);
// cakepudding

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var calculateAge = function (currentYear, birthYear) {
  console.log("You are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear -1))
}

var calculateAgeResult = calculateAge(2019, 1988);
  console.log(calculateAgeResult);

  var calculateAge = function(birthYear, currentYear) {
    var age = currentYear - birthYear
    var ageBeforeBirthday = age - 1
    console.log('you are either 100' + ageBeforeBirthday + ' or ' + age)
  }

  calculateAge(1988, 2019);

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// Example: 
// lengths(['my', 'cake', 'pudding']);
// [2,4,7]

var lengths = function (arrayOfStrings) {
  var brandNewArr = [];
  for (let index = 0; index < arrayOfStrings.length; index++) {
    brandNewArr.push(arrayOfStrings[index].length)
  }
  return brandNewArr
}

lengths(['my', 'cake', 'pudding']);


// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function (number1, number2, number3) {
  console.log((number1 * number2) * number3)
}

ab x ac = ab+c 

// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// Example: 
// wordReverse('we are good friends')
// "friends good are we"

var wordReverse = function (str) {
  console.log(str.split("").reverse().join(""))
}

wordReverse('hello');


// 6. findLongestWord
// Write a function findLongestWord that takes an array of words 
// and returns the length of the longest word in the array.

var findLongestWord = function (array) {

}

findLongestWord(['platter', 'plate', 'dishwasher']);

var findLongestWord = function (longString) {
  return Math.max.apply(null, longString.split(' ').map(w => w.length));
} 

findLongestWord(['platter', 'plate', 'dishwasher']);
