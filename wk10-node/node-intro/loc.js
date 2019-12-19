// line of code 
// read the line of code in a file 
// print it in the console 

// $ node loc.js intro.js 
// $ 1

// $ node loc.js add.js 
// $ 25


// var buf = fs.readFileSync(process.argv[2])
// var file = buf.toString()

// let gives you block scope 

// let secret3 = 'cake pudding'

// {
//   var secret = 'pudding' // global - var - not in a function
  
//   let secret2 = 'cake' // local - block scope
// }

// use let when creating a for loop

var fs = require('fs')
var file = fs.readFileSync(process.argv[2], 'utf8')

// mudule system

var loc = require('./lib.js')

console.log(`total lines: ${loc(file)}`)