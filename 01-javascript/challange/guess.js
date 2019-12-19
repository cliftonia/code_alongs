// Math.floor((Math.random() * 10) + 1);

// Number(guess);
// Number(maximumValue);

// parseInt(guess);
// parseInt(maximumValue)

maximumValue = Number(prompt('Lets play a guessing game, create a range by choosing the highest number.'));
randomNumber = Math.floor((Math.random() * maximumValue) + 1);

guess = Number(prompt('pick a number between 1 and ' + maximumValue));

while (guess < randomNumber) {
  alert('guess higher');
  guess = Number(prompt('try again'));
}

while (guess > randomNumber) {
  alert('guess lower');
  guess = Number(prompt('try again'));
}

alert('congratulations')

// Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

var secret = 12;

var guess = prompt('guess a number');

while (guess !== secret) {
  guess = prompt('guess again')
}

alert('correct');