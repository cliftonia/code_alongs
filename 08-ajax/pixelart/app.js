var colorInput = document.querySelector('.color-input')
var colorButton = document.querySelector('.color-button')

var brushBox = document.querySelector('.brush-box')
var squares = document.querySelectorAll('.square')



var brushColor = function(event) {
  event.preventDefault()
  console.log("working")
  brushBox.style.backgroundColor = colorInput.value 
}

var turnSquareGreen = function(event) {
  console.log("working")
  event.target.style.backgroundColor = colorInput.value 
}

squares.forEach( function(square) {
  square.addEventListener('mouseover', turnSquareGreen)
})

colorButton.addEventListener('click', brushColor)

///////

var posterButton = document.querySelector('.poster-button')
var posterInput = document.querySelector(".poster-input")


var handleClick = function(event) {
  event.preventDefault()
  console.log("requesting movies")

  var options = {
    url: `http://www.omdbapi.com/?t=${posterInput.value}&apikey=2f6435d9`
  }

  $.ajax(options).done(function(resp) {
    var movie = resp.Poster
    debugger
    document.querySelector(".box-flex").style.backgroundImage = `url(${movie})`
    console.log(resp) // server response from omdpx
  })

}

posterButton.addEventListener('click', handleClick)


// document.querySelector('body').style.backgroundImage = "url(https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg)"