// console.log('callbacks')

var startBtn = document.querySelector('#start')
var timerH1 = document.querySelector('#timer')

var counter = 0;

var updateDisply = function () {
  console.log(counter)
  timerH1.textContent = counter
  counter = counter + 1 // counter++ is a shortcut for this
}

startBtn.addEventListener('click', function () {
  setInterval(updateDisply , 1000)
})

// var sayHi = function (name) {
//   console.log('hi ' + name)
// }

// sayHi('clifton')

// var doubleIt = function (num) {
//   return num * 2 
// } 

// var languages = ['js','ruby','css', 'html']
// var numbers = [1,2,3]
// var students = ['a','b','c']

// languages.forEach( function (language) {
//   console.log(language)
// })


// numbers.forEach( function(number) {})

// students.forEach( function(student) {})

// setTimeout( function () {  console.log('bam') } , 5000)

// var doSomething = function () { console.log('bam')}

// // delay the function 
// setTimeout(  doSomething , 5000)

// // function signature
// setInterval(doSomething, 3000)