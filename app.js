$(function() {

	var url = 'https://api.darksky.net/forecast/';
	var key = '9e7aa9d7caff4b048f8eb545e8665927/';
	var coords = { //latitud, longitud
		scl: '-33.4488897,-70.6692655',
		ccp: '-36.8201352,-73.0443904'
	}

	$('#select').on('change', function(){
		$.ajax ({
		url: url + key + coords[$(this).val()],
		method: 'GET'
		}).then(function(data){
			console.log(data);
		});
	});	
});