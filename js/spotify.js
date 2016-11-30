// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(function(){
  //ASK tried to make a variable, but it wouldn't update variable when different type was selected
  // var searchTerm = $('#search-type').val();

  $('#search').on('submit', function(e) {
      console.log('User submitted form');
      // Stop the form from submitting
      e.preventDefault();

      //clears results upon next search
      $('#results').empty();

      //if statement to determine if keyword is artist or track
      if ($('#search-type').val() === "track"){
        console.log('searchTerm is :', $('#search-type').val());
        searchByArtist($('#search-type').val());
      } else {
        console.log('your searchTerm is :', $('#search-type').val());
        searchByTrack($('#search-type').val());
      }
  })

  function searchByArtist(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  }


  function searchByTrack(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
  }
});
