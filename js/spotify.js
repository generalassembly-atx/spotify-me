// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(document).ready(function() {

  $('#search').on('submit', function(event) {
    //'submit' on forms will have a default behavior of clearing so we add event.preventDefault()
    event.preventDefault();

    //clears the results div
    $('#results').empty();

    //our search query
    var searchReq = $('#search-keyword').val();

    //checks to see which drop-down option is selected
    var searchType = $('#search-type').val();

    //calls the corresponding function based on 'searchType'
    switch (searchType) {
      case 'artist':
        search(searchReq, 'artist', 'artists');
        break;
      case 'track':
        search(searchReq, 'track', 'tracks');
        break;
    }
  })

  //Makes the AJAX request and iterates/displays the info
  function search(searchReq, type, key) {
    var request = $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: searchReq,
        type: type
      }
    });
    //on success, iterates & appends element to html
    request.done(function(data) {
      var resultsArray = data[key].items;
      resultsArray.forEach(function(val) {
        $('#results').append('<li>' + val.name + '</li>');
      })
    })
  }

})
