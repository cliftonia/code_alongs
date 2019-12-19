console.log('functions2')

var number = 2

var anotherNumber = number

number = 3

var name = 'dt'

var anotherName = name

name = 'td'

var arr = [1,2,3]

var anotherArr = arr

arr = [1]

// Content Rules 
// Primitives you get a copy 
// complex objects you don't 

//  CSS Selectors

var dearH1 = document.querySelector('h1')

var justLogHi = function () {
  console.log('Hi')
}

dearH1.addEventListener('click', justLogHi)

var doSomething = function (fn) {
  fn()
} 

// doSomething(justLogHi)

// for (var i = 0; i < 5; i++) {
//   console.log(i)
// }

// for (var i = 0; i < 5; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

// for (var i = 0; i < 5; i++) {
//   if (i % 2 === 1) {
//     console.log(i)
//   }
// }

var arr = ['ban', 'apple', 'kiwi']
var arr2 = [1,2,3]
var students = ['sam','billy','pam']

var upper = function (str) {
  return str.toUpperCase()
}

var exclaim = function (str) {
  return str + '!'
}



var forEachElement = function (list, fn) {
  for (var i = 0; i < list.length; i++) {
    console.log(fn(list[i]))
  }
}

forEachElement(students, upper)


var justLog = function (elem) {
  console.log(elem)
}


numbers.forEach(function (elem) {
  if (elem % 2 === 0) {
    console.log(elem)
  }
})

var numbers = [2,5,7,8,9,10]
var numbers2 = [1,4,5,6,3,6,6,]
var total = 0;

numbers2.forEach( function (num) {
  if (num % 2 === 0) {
    console.log(num)
  }
})

numbers2.forEach(function (num) {
  if (num % 2 === 1) {
    console.log(num)
  }
})

var people = ['clifton', 'tony', 'peter', 'parker']

people.forEach(function (elem) {
  console.log('happy camping ' + elem)
})

numbers2.forEach(function (num) {
total = total + num
})

// for (var i = 0; i < numbers.length; i++) {
//   total = total + numbers[i] 
// }

numbers.forEach(function (num) {
  total = total + num
})

var snackLocker = {
  clifton: {
      snacks: ["nuts","obligatory sugar thing"]
  },
  chris: {
      snacks: ["caffeine","caffeine","javascript"]
  },
  yuAnn: {
      snacks: ["none"]
  }
};


snackLocker.clifton.snacks.forEach(function (str) {
  console.log(str)
})