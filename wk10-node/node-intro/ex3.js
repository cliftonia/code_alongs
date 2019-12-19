// using built in libraries / modules / packages 
// node api 
// ruby has the same - standard library 
// modules systems 

var fs = require('fs') // file system 

var buf = fs.readFileSync('intro.js')

// node is kind of lower level 
// sync is the exception 
console.log(buf.toString())



// fs.readFile('intro.js', )