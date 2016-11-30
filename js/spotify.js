// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(function(){

    console.log('spotify has loaded')

    $('#search').on('submit',function(e){
        e.preventDefault();

        var keyword = $('#search-keyword').val();

        var type = $('#search-type').val();

        var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type='+type;

        console.log('keyword', keyword)
        console.log('type', type)
        console.log('url', url)

        function searchByArtist(keyword) {
            var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
          console.log('searchbyartist')

          searchByArtist()
          console.log(url)


       function searchByTrack(keyword) {
           var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
           console.log('searchbytrack')
       }

        console.log('spotify search click');

        var request = $.ajax({
            url: url

        });

         request.done(function(response){
             var results = response.artists;
             console.log('response', response);
             console.log(results);
             var artistsArray = results.items;
             console.log(artistsArray)
                 for (var i=0, x=artistsArray.length; i<x; i++){
                     console.log('results:', artistsArray[i]);
                     var list = artistsArray[i];
                 }

        })

});

});
