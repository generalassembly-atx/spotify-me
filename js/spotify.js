// API Docs at: 
// https://developer.spotify.com/web-api/search-item/
$(function(){

	//console.log('spotify has loaded')

	$('#search').on('submit',function(e){
		e.preventDefault();

		$('#results').empty();


		var keyword = $('#search-keyword').val(),
			type = $('#search-type').val(),
			url = 'https://api.spotify.com/v1/search?q='+keyword+'&type='+type,
			request = $.ajax({
						url: url
				});

		


		 	request.done(function(response){
		 		if (type === 'artist'){
		 			var results = response.artists.items;	
		 		} else {
		 			var results = response.tracks.items;
		 		}
		 		//console.log(results);
		 		for (var i=0, x=results.length; i<x; i++){
		 			var list = results[i];}
		 			//console.log('results:', list);
		 		
		 			results.forEach(function(data) {
        			$('#results').append("<li>" + data.name + "</li>")
        			});
		 		});
			  });
});



			// 		function searchByArtist(keyword) {
 //		    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
 	//	  console.log('searchbyartist')			

 	//	  searchByArtist()
 	//	  console.log(url)


	//	function searchByTrack(keyword) {
	//	    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
	//		console.log('searchbytrack')
	//	}


	//--------------------another way to do this ----------------------------------------------
	// API Docs at:
// https://developer.spotify.com/web-api/search-item/

// $(function(){

//   function search(keyword,type,key){
//     var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=' + type;

//     $('#results').empty();

//     // console.log(artist);
//   $.get(url,function(response){
//       console.log(response);
//       var y = response[key].items;

//       for(var i=0; i<y.length; i++){
//         var artist = y[i];
//         // console.log(artist);
//         var elements = ['<li>','<h2>'+ artist.name + '</h2>','</li>'].join('');
//         $('#results').append(elements);

//       }
//     });
//   }

// function searchByArtist(keyword) {
//   search(keyword,'artist','artists');
// }


// function searchByTrack(keyword) {
//   search(keyword,'track','tracks');
// }



//   $('#submit').on('click', function(e){
//     e.preventDefault();
//     var searchText = $('#search-keyword').val(),
//       trackType = $('#search-type').val();

//     switch(trackType){
//       case 'artist':
//         search(searchText,'artist','artists');
//         searchByArtist(searchText);
//       break;
//       case 'track':
//         searchByTrack(searchText);
//       break;
//     }

//   });

// });