

// es6 - the binding is constant 
const secret = 402
const languages = ['ruby', 'ecmascript', 'css']
const student = {
  name: 'clifton'
}

// concurrency - comp sci. 

const doWork = function() {
  console.log("before looping")
  for (var i = 0; i < 1000; i++) {

  }
  console.log("after looping")
}

console.log('before doing work')

doWork()

console.log('after doing work')

const reminder = () => {
  console.log("winner winner checking dinner")
}

setTimeout(reminder, 0)

console.log('me first???')

// bloody js
  // $.ajax()
  // addEventListener()
  // setTimeout()