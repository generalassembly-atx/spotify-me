// API Docs at:
// https://developer.spotify.com/web-api/search-item/


function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}


$(document).ready(function(){
// console.log ('spotify loaded');

$('#search').on('submit', function(e){
  event.preventDefault();

$('#results').empty();

    var searchKeyword = $('#search-keyword').val();

    console.log('Search keyword', searchKeyword);

  //search by artists
    function searchByArtist(artistRequest) {
      var request = $.ajax({
        url:'https://api.spotify.com/v1/search',
        data: {
          q: artistRequest,
          type: 'artist'



      })
    }
})
