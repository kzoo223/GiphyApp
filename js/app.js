$(document).ready(function () {

 // Initial array
  var searchTerms = ['Rugrats', 'Hey Arnold', 'Rocket Power', 'Spongebob'];

// function for displaying buttons. 
  function renderButtons(){ 

    // Deletes previous items before adding new items
    $('#buttons').empty();

    // Loops through array 
    for (var i = 0; i < searchTerms.length; i++){

      

      
        var a = $('<button>')
        a.addClass('searchTerm'); // Added a class 
        a.attr('data-name', searchTerms[i]); // Added a data-attribute
        a.text(searchTerms[i]); // Provide button text
        $('#buttons').append(a); // Add the button to the HTML
    }
  }


  //function to pull data from API
  function gifSearchDisplay(){
    $("#gifArea").empty();
    var type = ($(this).data("name"))
        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+type+"&limit=10&api_key=dc6zaTOxFJmzC";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
          
          console.log(response)

          result = response.data

          for(i=0; result.length; i++){
          
          var itemDiv = $("<div>")
          var gifItem = $("<img>")
          gifItem.attr("src", response.data[i].images.fixed_height.url)
          gifItem.attr("data-state", "animate")
          gifItem.attr("data-still", response.data[i].images.fixed_height_still.url)
          gifItem.attr("data-animate", response.data[i].images.fixed_height.url)
          gifItem.attr("class", "giphy")

          var rating = $("<p>")
          rating.text("Rating: " + response.data[i].rating)

          itemDiv.append(rating)
          itemDiv.append(gifItem)

          $("#gifArea").append(itemDiv)
          

          }
    });
  }



renderButtons();

})