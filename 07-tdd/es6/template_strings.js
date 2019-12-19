var sayHi4 = (first, last) => {
  // return "hi " + first + " " + last
  return `hi ${first} ${last}`
}

// interpolation - ruby
// js - string templates or template strings

var dishes = ['cake', 'tomate', 'banana']

dishes.forEach( function(dish) {
  console.log(dish)
})

dishes.forEach( dish => console.log(`I love ${dish}`))

var greetings = function() {
  return "hi"
}

//default arguments
var greetings = (name = 'dt') => `hi ${name}`
