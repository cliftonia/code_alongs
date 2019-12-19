// // console.log(Number(process.argv[2]) + Number(process.argv[3]) + Number(process.argv[4]))

// var addNumbers = (num1, num2) => {
//  console.log(Number(num1) + Number(num2))
// }

// addNumbers(process.argv[2], process.argv[3])

// var numbers = [1,2,3]
// var total = 0 

// for (var i = 0; i < numbers.length; i++) {
//   total += numbers[i]
// }

console.log(
  process.argv
  .slice(2) // start from the 2 index 
  .reduce(elem => Number(elem) + Number(elem)) // then add the numbers 
)