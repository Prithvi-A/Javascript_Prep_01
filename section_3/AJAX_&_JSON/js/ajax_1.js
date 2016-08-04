$(document).ready(function() {
	// $.ajax({
	//   method: 'GET',
	//   url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e',
	//   success: function(weather_data){
	//     console.log(weather_data)
	//   }
	// });

	// var to_be_run_on_server_response = function(weather_data) {
	// 	$('#container').append('<p>' + weather_data.main.temp + '</p>');
	// 	$('#container').append('<p>' +weather_data.main.temp_max + '</p>');
	// 	$('#container').append('<p>' +weather_data.main.temp_min + '</p>');
	// 	$('#container').append('<p>' +weather_data.weather[0].description + '</p>');
	// 	$('#container').append('<p>' +weather_data.wind.speed + '</p>');
	// 	$('#container').append('<p>' +weather_data.sys.sunrise + '</p>');
	// 	$('#container').append('<p>' +weather_data.sys.sunset + '</p>');

	// };
	// $.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e').success(to_be_run_on_server_response);


	$.ajax({
	  method: 'GET',
	  url: 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e',
	  success: function(chicago_weather_data){
	    console.log(chicago_weather_data)
	  }
	});

	var server_response = function(chicago_weather_data){
		$('#Chicago').click(function(){
			event.preventDefault();
			$('#container').empty();
			$('#container').append('<p>' + chicago_weather_data.main.temp + '</p>');
			$('#container').append('<p>' + chicago_weather_data.main.temp_max + '</p>');
			$('#container').append('<p>' + chicago_weather_data.main.temp_min + '</p>');
			$('#container').append('<p>' + chicago_weather_data.weather[0].description + '</p>');
			$('#container').append('<p>' + chicago_weather_data.wind.speed + '</p>');
			$('#container').append('<p>' + chicago_weather_data.sys.sunrise + '</p>');
			$('#container').append('<p>' + chicago_weather_data.sys.sunset + '</p>');
		});
	};
	$.get('http://api.openweathermap.org/data/2.5/weather?q=Chicago&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e').success(server_response);

});