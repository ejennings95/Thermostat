$(document).ready(function(){

var thermostat = new Thermostat();

$("#temperature").text(thermostat.showTemp() + " °C");

$("#minTemp").text(thermostat._minTemp + " °C");

$("#maxTemp").text(thermostat._maxTemp + " °C");

$("#increaseTemp").click(function(){
  thermostat.increaseTemp();
  $("#temperature").text(thermostat.showTemp() + " °C");
});

$("#decreaseTemp").click(function(){
  thermostat.decreaseTemp();
  $("#temperature").text(thermostat.showTemp() + " °C");
});

$("#resetTemp").click(function(){
  thermostat.resetTemp();
  $("#temperature").text(thermostat.showTemp() + " °C");
});

$("#powerSavingOn").on("change", function(){
  thermostat.togglePowerSaving();
  $("#maxTemp").text(thermostat._maxTemp + " °C");
  $("#temperature").text(thermostat.showTemp() + " °C");
});

$("#powerSavingOff").on("change", function(){
  thermostat.togglePowerSaving();
  $("#maxTemp").text(thermostat._maxTemp + " °C");
  $("#temperature").text(thermostat.showTemp() + " °C");
});

$("#getWeather").click(function() {
    event.preventDefault();
     let cityName = $("#cityName").val();
     let countryCode = $("#countryCode").val();

     $.ajax({
     type: "POST",
     url: "http://api.openweathermap.org/data/2.5/weather?q=" +
     cityName + "," + countryCode + "&APPID=45726f6be1d21e5e968ac85ffcfa5de5&units=metric",
     dataType: "json",
     success: function (result) {
       let cityWeather = result;
       $("#currentWeather").text("Temperature in " + cityName.charAt(0).toUpperCase()
       + cityName.substr(1) + " is: " + cityWeather.main.temp + " °C");
     }
     });
   });
});
