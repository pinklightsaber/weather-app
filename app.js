$(function() {

	var cors = 'https://cors-anywhere.herokuapp.com/'; //soy el cors inmortal
	var url = 'https://api.darksky.net/forecast/';
	var key = '9e7aa9d7caff4b048f8eb545e8665927/';
	var coords = { //latitud, longitud
		scl: '-33.4488897,-70.6692655',
		ccp: '-36.8201352,-73.0443904'
	};
	var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto'];

	var image = {
		'clear-day':'sol.jpg',
		'rain': 'nube.jpg',
		'clear-night': 'moon.png'
	}

	$('#select').on('change', function(){
		$.ajax ({
		url: cors + url + key + coords[$(this).val()] + '?'+queryParams[0]+'&'+queryParams[1] + '&' + queryParams[2],
		method: 'GET'
		}).then(function(data){
			console.log(data);
			$('#resumen').text(parseInt(data.currently.temperature)+'° ' + data.currently.summary);
			$('#sensacion').text(data.currently.apparentTemperature + '°');
			$('#probabilidad').text(data.currently.precipProbability * 100 + '%');
			$('#humedad').text(data.currently.humidity * 100 + '%');
			$('.img-responsive').attr('src',image[data.currently.icon])
		});
	});	
});