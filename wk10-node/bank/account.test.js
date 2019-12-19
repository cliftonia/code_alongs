const Account = require('./account')

test('new account has 0 balance', () => {
  const account = new Account('savings')
  
  expect(account.getBalance()).toEqual(0)
})  

test('new account with 50 bucks balance', () => {
  const account = new Account('savings', 50)
  expect(account.getBalance()).toEqual(50)
})

test('deposit', () => {
  const account = new Account('savings')
  account.deposit(25)

  expect(account.getBalance()).toEqual(25)
})

test('withdraw more then you have', () => {
  const account = new Account('savings', 100)
  
  expect(() => {
    account.withdraw(101)

  }).toThrowError(/insufficient funds/)
})

test('withdraw when you have enough money', () => {
  const account = new Account('savings', 100)
  account.withdraw(99)
  expect(account.getBalance()).toEqual(1)
})

test('get Transaction history', () => {
  const account = new Account('savings')
  account.deposit(10)
  account.deposit(20)
  account.deposit(15)
  expect(account.getHistory()).toEqual([
    { type: 'deposit', amount: 10 },
    { type: 'deposit', amount: 20 },
    { type: 'deposit', amount: 15 },
  ]) 
})