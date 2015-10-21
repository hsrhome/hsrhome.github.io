// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Rhodesdale, MD',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i><a href="http://www.weather.com/weather/today/l/Rhodesdale+MD+21659"><font color="black"> '+weather.temp+'&deg;'+weather.units.temp+'</font></a></h2>';
      html += '<ul><a href="http://www.weather.com/weather/today/l/Rhodesdale+MD+21659"><font color="black"><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></font></a></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});