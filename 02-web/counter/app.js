

var counterDiv = document.querySelector('div')
var incrementButton = document.querySelector('.increment')
var dtModeButton = document.querySelector('button')
var dtModeButtonReset = document.querySelector('.reset')

var changeBackground = function () {
  document.body.style.backgroundColor = 'mistyrose'
}

var increment = function () {
  counterDiv.textContent = Number(counterDiv.textContent) + 1
}

var resetBackground = function () {
  document.body.style.backgroundColor = 'white'
}

incrementButton.addEventListener('click',increment);
dtModeButton.addEventListener('click', changeBackground)
dtModeButtonReset.addEventListener('click', resetBackground)
