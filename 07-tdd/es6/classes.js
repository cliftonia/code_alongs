// class is for making objects
// based on some template / blueprint

// var makeCar = function () {
//   var car = {
//     make: "tesla",
//     drive: function () {
//       console.log('zoom zoom')
//     }
//   }

//   return car
// }

// var newCar = makeCar()
// newCar.drive()

class Car {

  constructor(newColor) {
    // magical keyword - but also horrible keyword
    this.color = newColor 
  }

  drive() {
    console.log("zoom zoom")
  }

}

var newCar = new Car('red')
var nerkosCar = new Car('mistyrose')

newCar.drive()