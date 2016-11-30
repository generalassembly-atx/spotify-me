$(function(){
	console.log('fartbox');
	$('#search').on('submit', function(e) {

    // Stop the form from submitting
    e.preventDefault();

		$('#results').empty();
		var keyword = $('#search_keyword').val(),
				type = $('#search-type').val(),
				url = 'https://api.spotify.com/v1/search?q='+keyword+'&type='+type,
				request = $.ajax({
								url: url
	});



	if (type === 'artist'){

		request.done(function(response) {
      var results = response.artists.items;
      console.log(results);

      for (var i=0, x=results.length; i<x; i++) {
        console.log('Artist: ', results[i]);
        var list = results[i];}

			results.forEach(function(data){
        $('#results').append("<li>" + data.name + "</li>");
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
