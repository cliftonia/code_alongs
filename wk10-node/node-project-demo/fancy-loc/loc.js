// use color module 

// $ node loc.js filename 
// $ total lines: 12 
// blank lines: 4 
// $ comment lines: 3

var _ = require('lodash');
var colors = require('colors');
var fs = require('fs');
var lib = require('./lib.js')

// mudule system

var file = fs.readFileSync(process.argv[2], 'utf8')

console.log(`total lines: ${lib.loc(file)}`)

console.log(`commented lines: ${lib.commentCount(file)}`)

console.log(`blank lines: ${lib.blankCounter(file)}`)

console.log(`aster lines: ${lib.asterixComment(file)}`)