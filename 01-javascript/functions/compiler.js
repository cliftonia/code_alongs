var sydney = function() {
  console.log('hi sydney')
  melbourne()
  console.log('bye sydney')
}

var melbourne = function() {
  console.log('hi melbourne')
  console.log('bye melbourne')
}

var perth = function() {
  var secret = 5;
  console.log('hi perth')
  sydney()
  console.log('bye perth')  
}

perth()