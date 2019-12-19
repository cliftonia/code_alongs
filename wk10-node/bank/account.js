// pure function - no side effects 

// function add (num1, num2) {
//   return num1 + num2
// }

// add(1,2)

class Account {

  constructor(type,amount = 0) {
    this.type = type
    this.amount = amount
    this.history = []
  }

  deposit(amount) {
    this.amount += amount
    this.history.push({
      type: 'deposit',
      amount
    })
  }

  getBalance() {
    return this.amount
  }

  withdraw(amount) {
    if (amount > this.amount) {
      throw new Error('insufficient funds')
    } else {
      this.amount -= amount 
      this.history.push({
        type: 'withdraw',
        amount
      })
    } 
  }
  
  getHistory() {
    return this.history
  }

}


// if current amount is less then what I want to wihdraw throw an error
module.exports = Account