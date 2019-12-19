const {isPalindrome} = require('./palindrome')

test('bob is a palindrome', () => {
  expect(isPalindrome('bob')).toEqual(true)
})

// test('cake is not a palindrome'. () => {
//   expect(isPalindrome('cake')).toEqual(false)
// })

// test('I want misty rose to be the best color', () => {
//   expect(getBestColor()).toEqual('mistyrose')
// })