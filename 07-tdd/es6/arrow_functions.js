console.log("ecmascript")

// // function expression
// var add = function (num1, num2) {
//   var result = num1 + num2; 
//   return result; // result of processing 
// }

// // function decleration 
// function add(num1, num2) {
//   var result = num1 + num2 
//   return result
// }

// arrow function 
var add = (num1,num2) => {
  var result = num1 + num2; 
  return result;
}

// var sayHi = () => {
//   return "Hi CB"
// }

var sayHi1 = () => "Hi CB" // will only work if the return is on the first line 

var sayHi2 = function(name) {
  return "hi " + name 
}

var sayHi3 = name => "hi " + name //if there is one argument you can remove the the parantesis

var sayHi4 = (first, last) => "hi " + first + " " + last