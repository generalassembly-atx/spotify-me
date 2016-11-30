// API Docs at:
// https://developer.spotify.com/web-api/search-item/


function searchByArtist(keyword) {
  console.log('input is" ',keyword);
  $.get('https://api.spotify.com/v1/search?q='+keyword+'&type=artist',function(e){
    $('#results').empty();
    var artists = e.artists.items;
    console.log(artists);
    for(i=0; i<artists.length; i++){
      $('#results').append('<li>'+artists[i].name+'</li>')
    }
  });
}


function searchByTrack(keyword) {
  $.get('https://api.spotify.com/v1/search?q='+keyword+'&type=track',function(e){
    $('#results').empty();
    var tracks = e.tracks.items;
    console.log('tracks: ',tracks);
    var total = tracks.length;
    var page_max = 10;
    for(i=0; i<total; i++){
      $('#results').append('<li>'+tracks[i].name+' by '+tracks[i].artists[0].name+'</li>');
    }
  });
}


$('form').on('submit',function(e){
  e.preventDefault();
  var input = $('#search-keyword').val();
  if($('#search-type option:selected').attr('value')==="artist"){
    searchByArtist(input);
  }else{
    searchByTrack(input);
  }
});
