// eg. loc("hello") => 1

// local to this file 
var secret = 'pudding' //global

const loc = file => {
  let lines = file.split("\n") // function scope 
  let counter = 0
  for (let i = 0; i < lines.length; i++) {
    counter++
  }
  return counter
}

const getFavColor = () => {
  return 'mistyrose'
}

const getMagicNumber = () => 42

const iHunger = () => {
  return 'I am hungry'
}

const wordCount = sentence => sentence.split('').length

// module.exports = loc 
// module.exports = getFavColor

module.exports = {
  getFavColor: getFavColor,
  loc: loc,
  getMagicNumber: getMagicNumber,
  iHunger: iHunger,
  wordCount: wordCount
}

// object shorthand notation - es6
module.exports = {
  getFavColor,
  loc,
  getMagicNumber,
  iHunger,
  wordCount
}