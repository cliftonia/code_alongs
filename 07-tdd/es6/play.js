console.log('back to the basics')

var dishes = ['cake', 'pudding', 'tomato', 'ribs']

var myLunch = dishes.map(dish => dish.charAt(0))

dishes.forEach(dish => {
  myLunch.push (dish[0])
})

// var myLunch = dishes[0], dishes[1], dishes[3]

// mutation
// var myLunch = dishes.splice(dishes.indexOf('tomato'), 1)
// var myLunch = dishes


// copies 
// var myLunch = []

// dishes.forEach(dish => {
//   if (dish !== 'tomato') {
//     myLunch.push(dish)
//   }
// })

// filter - filter in and return a copy - select in ruby 

// var myLunch = dishes.filter(dish => dish != "tomato")

// var myLunch = dishes.filter(function (dish) {
//   return dish !== 'tomato' && dish !== "ribs"
// })
// var myLunch = []

// dishes.forEach(dish => {
//   myLunch.push(dish.toUpperCase())
// })

// map - transform - return a new copy of transformed

// var myLunch = dishes.map(dish => dish.toUpperCase())

var myLunch = dishes.map(dish => dish.charAt(0))

dishes.forEach(dish => {
  myLunch.push (dish[0])
})
