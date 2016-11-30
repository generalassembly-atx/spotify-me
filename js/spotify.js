// API Docs at:
// https://developer.spotify.com/web-api/search-item/
var userInput = $("#search-keyword");
var form = $("#search");
var results = $('#results');


// function searchByArtist(keyword) {
//   var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
// }
//
//
// function searchByTrack(keyword) {
//   var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
// }
form.on('submit', function(event){
  event.preventDefault();

  var searchType = $('#search-type').val();
  var formInput = userInput.val();
  $.ajax ({
      url: 'https://api.spotify.com/v1/search?q=' + formInput + '&type=' + searchType,

      success: function( response) {
        console.log(response)
        console.log(response.items)

        plural = searchType + 's';
        console.log(plural)


        response[plural].items.forEach( function(item){
          listItem = $("<li>"+ item.name  + "</li>");
          console.log(listItem);

          results.append(listItem);
          console.log(results);
          $('#totalResults').text(results.length);

        })
    }
  })
});
