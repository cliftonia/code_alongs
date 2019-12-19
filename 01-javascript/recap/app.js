var daysOfTheWeek = ['mon','tue','wed','thurs', 'fri', 'sat', 'sun']

var day = daysOfTheWeek.pop()
daysOfTheWeek.unshift( day )

var day = daysOfTheWeek.pop()
daysOfTheWeek.unshift( day )

var newDaysOfTheWeek = [['mon','tue','wed',], ['sat', 'sun']]

var cohort = {
  name: 'runCMD',
  number: 20,
  students: [
    {
      name: 'billy',
      favColor: 'blue'
    },
    {
      name: 'chris',
      favColor: 'black'
    }  
  ]
}