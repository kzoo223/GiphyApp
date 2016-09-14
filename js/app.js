$(document).ready(function () {

 // Initial array
  var searchTerms = ['Rugrats', 'Hey Arnold', 'Rocket Power', 'Spongebob'];

// function for displaying buttons. 
  function renderButtons(){ 

    // Deletes previous items before adding new items
    $('#buttons').empty();

    // Loops through the array of movies
    for (var i = 0; i < searchTerms.length; i++){

      // Then dynamicaly generates buttons for each movie in the array

      // Note the jQUery syntax here... 
        var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
        a.addClass('searchTerm'); // Added a class 
        a.attr('data-name', searchTerms[i]); // Added a data-attribute
        a.text(searchTerms[i]); // Provided the initial button text
        $('#buttons').append(a); // Added the button to the HTML
    }
  }

renderButtons();

})