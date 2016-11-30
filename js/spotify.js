// API Docs at:
// https://developer.spotify.com/web-api/search-item/
var request;

$(function(){
  //ASK tried to make a variable, but it wouldn't update variable when different type was selected
  // var searchTerm = $('#search-type').val();

  $('#search').on('submit', function(e) {
      console.log('User submitted form');
      // Stop the form from submitting
      e.preventDefault();

      //clears results upon next search
      $('#results').empty();

      //this could be a function
      //if statement to determine if keyword is artist or track
      if ($('#search-type').val() === "track"){
        console.log('searchTerm is :', $('#search-type').val());
        searchByArtist($('#search-type').val());
      } else {
        console.log('your searchTerm is :', $('#search-type').val());
        searchByTrack($('#search-type').val());
      }

      request.done(function(data){
        var searchResults = data.Search;
        for (var i=0, x=searchResults.length; i<x; i++) {
        console.log('Result: ', searchResults[i]);
        var song = searchResults[i];
        // var elements = ['<li>',
        //                   '<div class="row">',
        //                     '<div class="col-md-4">',
        //                       '<img src="' + X + '" height="250" alt="" />',
        //                     '</div>',
        //                     '<div class="col-md-8">',
        //                       '<h2>' + songTitle + '</h2>',
        //                     '</div>',
        //                   '</div>',
        //                 '</li>'
        //                ].join('');
        // $('#results').append(elements);
      })
  })

  function searchByArtist(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
    request = $.ajax({
      url: url;
      data:
    })
  }


  function searchByTrack(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
    request = $.ajax({
      url: url;
      data:
    })
  }

});
