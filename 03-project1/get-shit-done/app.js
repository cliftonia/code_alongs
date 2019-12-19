// var firstItem = document.querySelector('.todo-item')

// firstItem.addEventListener('click', function () {
//   firstItem.style.textDecoration = "line-through"
// })

// for (var i = 0; i < todoItems.length; i++) { // for loop lower level
//   console.log(todoItems[i].textContent)
// }

var todoItems = document.querySelectorAll('.todo-item')
var addBtn = document.querySelector('.add-btn')
var shitInput = document.querySelector('.shit-input')

var tally = document.querySelector('.tally')

var resetBtn = document.querySelector('.reset-Btn')

var markAsDone = function (event) {
  // event is an object of wealthy information
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed')
    // tally.textContent = Number(tally.textContent) - 1
  } else {
    event.target.classList.add('completed')
    // tally.textContent = Number(tally.textContent) + 1
  }
  tally.textContent = document.querySelectorAll('.completed').length
}

var addShit = function (event) {
                          // stopping default behaviour of a form
  event.preventDefault() // don't send stuff to server and refresh
  console.log(shitInput.value)
  // shitInput.value += document.querySelector('.todo-item')
}

var resetBtn = function (event) {
  event.preventDefault()
  var items = document.querySelectorAll('.todo-item.completed')
  items.forEach( function (item) {
    item.classList.remove('completed')
  })
  // for (var i = 0; i < arr.length; i++) {
  //   arr[i].classList.remove('completed')
  // }
  tally.textContent = document.querySelectorAll('.completed').length
}

todoItems.forEach( function (todoItem) { // higher level stuff
  todoItem.addEventListener('click', markAsDone)
})

addBtn.addEventListener('click', addShit)

// var addItem = function (event) {
//   event.preventDefault()
//   let ul = document.querySelectorAll('.todo-list')[0];
//   let li = document.createElement('li');
//   li = document.querySelector('li').className = "todo-item";
//   li.textContent = shitInput.value;
//   ul.appendChild(li);
//   shitInput.value = '';
// }

addBtn.addEventListener('click', addItem)

resetBtn.addEventListener('click', resetBtn)


// var items = ['tep', 'jeep', 'lasagne']
// for (var i = 0; i < items.length; i++) {
//   console.log(items[i]) 
// } 

// var items = ['tep', 'jeep', 'lasagne']

// items.forEach( function (item) {
//   console.log(item)
// })

//  items.forEach( function (item)) {
//     console.log(item)
//   }

var cheeses = ['chedder', 'mozarella', 'tasty']

cheeses.forEach( function (cheese) {
  console.log('I love ' + cheese)
})

var teamNumbers = [12,18,24,56]

teamNumbers.forEach( function (teamNumber) {
  console.log(teamNumber *= 2)
})