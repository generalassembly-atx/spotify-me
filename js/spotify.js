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

		if (type === 'artist'){

		 	request.done(function(response){

		 		var results = response.artists.items;
		 		console.log(results);
		 		for (var i=0, x=results.length; i<x; i++){
		 			var list = results[i];}
		 			console.log('results:', list);
		 		
		 			results.forEach(function(data) {
        			$('#results').append("<li>" + data.name + "</li>")
        			});
		 		});

		
		} else { 
		 	request.done(function(response){

		 		var results = response.tracks.items;
		 		console.log(results);
		 		for (var i=0, x=results.length; i<x; i++){
		 			var list = results[i];}
		 			console.log('results:', list);
		 		
		 			results.forEach(function(data) {
        			$('#results').append("<li>" + data.name + "</li>")
        			});
		 		});
		  
			}
			  
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