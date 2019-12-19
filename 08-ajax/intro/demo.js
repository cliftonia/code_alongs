console.log("making requests with javascript")

var button = document.querySelector('button')
var searchResultsList = document.querySelector('.search-results')
var input = document.querySelector('input')

var ul = document.querySelector('ul')
var elem = document.createElement('li')

var handleClick = function(event) {
  event.preventDefault()
  console.log('requesting movies')

  // make an ajax request - making requests using js
  var options = {
    url: `http://www.omdbapi.com/?s=${input.value}&apikey=2f6435d9`
  }

  


  //async
  //making a request with the above settings 
  $.ajax(options).done(function(resp) {
    // the response is json which made it easy for jquery to turn it into js objects
    // extract array of movies from response
    var movies = resp.Search
    
    console.log(resp) // server response from omdpx
    movies.forEach(function(movie) {
      var newListItem = document.createElement('li')
      newListItem.textContent = movie.Title
      searchResultsList.appendChild(newListItem)
    })
  })
}

button.addEventListener('click', handleClick)


// searchResultsList.remove()