// API Docs at:
// https://developer.spotify.com/web-api/search-item/
// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(function(){

  $('#search').on('submit', function(e){
      console.log('user submitted form');
      e.preventDefault();

        var keyword = $('#search-keyword').val();
          console.log('search keyword', keyword);
        // if ($('search-type').val() === 'artist'){
          // function (searchByArtist(keyword){
          var request = $.ajax({
            url: 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist'

          });
        request.done(function(artistData) {
          var artistResults = artistData.artists //then what???
          console.log('Artist data', artistData)
        });
      // })
      request.fail(function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', textStatus, errorThrown);
      })
  });
});
//======for track search====/////////
        // if ($('search-type').val() === 'artist'){
          // function (searchByArtist(keyword){
  //         var request = $.ajax({
  //           url: 'https://api.spotify.com/v1/search?q='+keyword+'&type=track'
  //
  //         });
  //         request.done(function(trackData) {
  //           var trackResults = trackData //then what???
  //           console.log('Track data', trackResults)
  //           // })
  //         });
  //
  // });



// ========provided code


function searchByArtist(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
}


function searchByTrack(keyword) {
  var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
}
