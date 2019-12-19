var fs = require('fs')

//async is the norm
// async code is a bit harder to reason with
fs.readFile(process.argv[2], function(err, data) {
  console.log(data.toString())
})

console.log('still_reading')