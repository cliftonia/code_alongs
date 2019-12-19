console.log('yay')

var account = {
  balance: 0,
  type: 'savings',
  deposit: function(amount) {
    // this - context 
    this.balance = this.balance + amount

    // [1,2].forEach()) => {

    // }
  }
}

console.log(account.balance)

account.deposit(200)

console.log(account.balance)


// this - every function will have access to the shortcut this keyword 
// context - every function has a context 

var numbers = [1,2,3]

var newNumbers = numbers // not copies - you have 2 names referring to the same collection - complex objects 

 // binding 
var stuff = account.balance // copied - primitive 

var putMoneyInBank = account.deposit // does not work because the context has changed 

// rules of working the context
// from the call site - how the function is being called 

// 1. default binding 

function pudding() {
  // every function has access to the shortcut this/context 
  console.log(this) // binding to window / global 
}

pudding() // this is binded to window / global 

// 2. implicit binding 

account.deposit(20) // the context is binding to the account object 

// 3. explicit binding 

var clifton = {
  balance: 10
}

account.deposit.call(clifton) // context is the clifton object 
// account.deposit.apply(clifton)
account.deposit(10) // account

var blah = account.deposit
blah() // window

// 4. hard binding 

var billy = {
  balance: 20
}

var newDeposit = account.deposit.bind(billy)
newDeposit(10)
// account.deposit.call(billy)


var stuff = {}

stuff.newDeposit = newDeposit

stuff.newDeposit(5)

// 5. puff magic rule - constructor binding 

class Car {

  constructor(newColor) {
    this.color = newColor
  }


}

var c1 = new Car('red')
var c2 = new Car('blue')

