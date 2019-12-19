const {mask, unMask} = require('./mask')

test('mask credit card numbers except for the last 4 digits', () => {

  expect(
    mask("1234123412341234")
  ).toEqual(
    "############1234"
  )

})

test('unmask my credit card numbers', () => {

  expect(
    unMask("############1234")
  ).toEqual(
    "1234123412341234"
  )

})