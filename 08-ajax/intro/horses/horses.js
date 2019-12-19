var horses = [
  {
    name: 'maythehorsebewithu',
    active: true,
    country: 'AUS',
    yearOfBirth: 2000,
    hourlyRate: 30,
    numOfHoursWorked: 2000    
  },
  {
    name: 'my wife knows everthing',
    active: true,
    country: 'USA',
    yearOfBirth: 2007,
    hourlyRate: 50,
    numOfHoursWorked: 2500    
  },
  {
    name: 'arrrrr',
    active: true,
    country: 'USA',
    yearOfBirth: 2004,
    hourlyRate: 30,
    numOfHoursWorked: 2000        
  },
  {
    name: 'hoof hearted',
    active: false,
    country: 'AUS',
    yearOfBirth: 1981,
    hourlyRate: 88,
    numOfHoursWorked: 900    
  },
  {
    name: 'pony',
    active: false,
    country: 'AUS',
    yearOfBirth: 2003,
    hourlyRate: 12,
    numOfHoursWorked: 9000    
  },
  {
    name: 'sunny boy',
    active: true,
    country: 'AUS',
    yearOfBirth: 2003,   
    hourlyRate: 42,
    numOfHoursWorked: 6450    
  }  
]

earnings = []
earningsWithTax = []

grossAusWage = []
netAuswage = []

function sum(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b
  });
}

var grossWageCalc = function(arr) {
  arr.forEach( function(horse) {
    if (horse["country"] === "AUS") {
      grossAusWage.push(horse["hourlyRate"] * horse['numOfHoursWorked'])
    }
  })
}

var netPayCalc = function(arr) {
  arr.forEach( function(earn) {
  earningsWithTax.push(earn - ((30/100) * earn))
  })
}

horses.forEach( function(horse) {
  if (horse["country"] === "AUS") {
    earnings.push(horse["hourlyRate"] * horse['numOfHoursWorked'])
  }
})

earnings.forEach( function(earn) {
  earningsWithTax.push(earn - ((30/100) * earn))
})

console.log(sum(earningsWithTax))

horses 
  select aussie horses
  each horse into earnings 
  remove tax for each horse
  reduce to a single total


var isAussie = function(horse) {
  return horse.country === 'AUS'
}

var calcEarnings = function(horse) {
  return horse.hourlyRate * horse.numOfHoursWorked * 0.7
}

var sum = function(num1, num2) {
  return num1 + num2
}

horses
  .filter(isAussie)
  .map(calcEarnings)
  .reduce(sum)

var numbers = [1,2,3,4]

numbers.reduce()