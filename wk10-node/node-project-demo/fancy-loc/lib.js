const loc = file => {
  let lines = file.split("\n") // function scope 
  let counter = 0
  for (let i = 0; i < lines.length; i++) {
    counter++
  }
  return counter
}

const commentCount = file => {
  let lines = file.split("\n")
  var commentCounter = 0 

  lines.forEach(line => {
    if (line.includes('//')) {
      commentCounter++
    }
  })
  return commentCounter
}

const blankCounter = file => {
  let lines = file.split("\n")
  var blankCounter = 0

  lines.forEach(line => {
    if (line === "") {
      blankCounter++
    }
  })
  return blankCounter
}



// module.exports = loc 
// module.exports = comment


// count number of lines 
// 

const asterixComment = file => {
  let lines = file.split("\n")
  var asterCounter = 0
  var multilineComment = false;

  lines.forEach(line => {
    if (line.includes('/*')) {
      multilineComment = true;
    }
    if (multilineComment === true) {
      asterCounter++ 
    }
    if (line.includes('*/')) {
      multilineComment = false;
    }
  })
  return asterCounter
}

module.exports = {
  loc,
  commentCount,
  blankCounter,
  asterixComment
}
// || line.includes('/*') || line.includes('*/'))