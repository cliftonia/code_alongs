var colorInput = document.querySelector(".color-input")
var colorBtn = document.querySelector(".color-btn")
var brushBox = document.querySelector(".brush-box")
var canvas = document.querySelector(".canvas")
var pixels = document.querySelectorAll(".pixel")
var movieForm = document.querySelector(".movie-form")
var movieTitleInput = document.querySelector(".move-title-input")
var selectedColor = 'white'

var setColor = event => {
  event.preventDefault()
  selectedColor = colorInput.value 
  brushBox.style.backgroundColor = selectedColor
}

var createCanvas = () => {
  for (var i = 0; i < 3000; i++) {
    var elem = document.createElement('div')
    elem.className = 'pixel'
    canvas.appendChild(elem)
  }
}

var paintPixel = event => {
  if (event.target.classList.contains('pixel')) {
    event.target.style.backgroundColor = selectedColor
  }
}

var fetchPoster = event => {
  event.preventDefault()
  var title = movieTitleInput.value
  var options = {
    url: `http://www.omdbapi.com/?t=${title}&apikey=2f6435d9`
  }

  $.ajax(options).done(resp => {
    canvas.style.background = `url(${resp.Poster})`
  })

}

createCanvas()

canvas.addEventListener('click', paintPixel)
colorBtn.addEventListener('click', setColor)
movieForm.addEventListener('submit', fetchPoster)