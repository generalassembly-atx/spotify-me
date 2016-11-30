// API Docs at:
// https://developer.spotify.com/web-api/search-item/


$(document).ready(function() {

  $('#search').on('submit', function(event) {
    event.preventDefault();

    $('#results').empty();

    var searchReq = $('#search-keyword').val();

    //checks to see which drop-down option is selected
    if ($('#search-type option:selected').val() === "artist") {
      searchByArtist(searchReq);
    } else if ($('#search-type option:selected').val() === "track") {
      searchByTrack(searchReq);
    }

    //Search by Artist
    function searchByArtist(artistReq) {
      var requestArtist = $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
          q: artistReq,
          type: 'artist'
        }
      })
      requestArtist.done(function(data) {
        var artistArray = data.artists.items;
        artistArray.forEach(function(val) {
          $('#results').append('<li>' + val.name + '</li>');
        })
      })
    }

    //Search by Track
    function searchByTrack(trackReq) {
      var requestTrack = $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
          q: trackReq,
          type: 'track'
        }
      })
      requestTrack.done(function(data) {
        var trackArray = data.tracks.items;
        trackArray.forEach(function(val) {
          $('#results').append('<li>' + val.name + '</li>');
        })
      })
    }
  })

})
