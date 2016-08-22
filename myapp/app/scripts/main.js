$(document).ready(function() {

    $('#submit_city').click(function() {
        var $city = $('#search_city').val(); //city, state

        $.ajax({
            url: 'http://maps.google.com/maps/api/geocode/json?address=' + $city,
            dataType: 'json',
            type: 'get',
            cache : true,
            success: function(response) {
               $(response.results).each(function(index, value) {
                    // Fetch the latitude of the city
                    var lat = value.geometry.location.lat;
                    // Fetch teh longitude of the city
                    var lng =  value.geometry.location.lng;
                    // Insert the latitude/longitude into the DOM
                    $('#lat').empty().append(lat);
                    $('#lng').empty().append(lng);
                    // Fetch the map image url of city
                    var map_url = 'https://maps.googleapis.com/maps/api/staticmap?center='+ $city + '&size=300x300';
                    // Insert the image on the HTML
                    $('.map_display').append('<img src= "'+ map_url+ '"/>');
               });
            },
            error: function(){
                alert("Did not work!");
            }
        });
    });
    
});