// API Docs at:
// https://developer.spotify.com/web-api/search-item/


// function searchByArtist(keyword) {
//   var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
// }


// function searchByTrack(keyword) {
//   var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
// }


$(function(){

  $('#submit').on('click', function(e){
    // console.log("submit!");
    e.preventDefault();

    $('#results').empty();

    var artistName = $('#search-keyword').val();


    // console.log(artist);
    var request = $.get('https://api.spotify.com/v1/search?q='+artistName+'&type=artist');

    request.done(function(request){
      var artistName = request;
      // console.log(artistName.artists);



      var x = artistName.artists;

      var y = x.items;

      // console.log(y);




      // var searchResults = request.Search;
      // console.log(artistName);


    // request.done(function(artistName){
    //   var searchResults = artistName.Search;
    //
    //   console.log(searchResults);
    // });


      for(var i=0; i<y.length; i++){
        var artist = y[i];

        // console.log(artist);

        var elements = ['<li>','<h2>'+ artist.name + '</h2>','</li>'].join('');

        $('#results').append(elements);

      }

    });


  });

});
