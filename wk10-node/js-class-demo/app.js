// "this keyword" - != ruby self but sometimes it does 

// template / blueprint/ factory / fish god 
class Fish {

  constructor(name) {
    this.health = 10
    this.name = name
  }

  shout() {
    console.log('arrrrggghhh')
  }

}

var f1 = new Fish('nemo')

console.log(f1)
f1.shout()

let f2 = new Fish('dory')

console.log(f2)
f2.shout()

function getDish() {
  return { title: 'cake', rating: 5, reviews: [1,2]}
}

// var dish = getDish()

// console.log(dish.rating)
// console.log(dish.title)

// destructuring - poor person pattern matching 

var { title, rating, reviews } = getDish()
console.log(title)
console.log(rating)
console.log(reviews)

function getColors() {
  return ['mistyrose', 'red', 'pink', 'purple']
}

var colors = getColors()
var bestColor = colors[0]

// rest/spread - rest of the array
var [bestcolor, ...mehColors] = getColors()

