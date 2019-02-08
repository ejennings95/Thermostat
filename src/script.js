$(document).ready(function(){

var thermostat = new Thermostat();

$("#temperature").text(thermostat.showTemp());

$("#minTemp").text(thermostat._minTemp);

$("#maxTemp").text(thermostat._maxTemp);

$("#increaseTemp").click(function(){
  thermostat.increaseTemp();
  $("#temperature").text(thermostat.showTemp());
});

$("#decreaseTemp").click(function(){
  thermostat.decreaseTemp();
  $("#temperature").text(thermostat.showTemp());
});

$("#resetTemp").click(function(){
  thermostat.resetTemp();
  $("#temperature").text(thermostat.showTemp());
});

$("#powerSavingOn").on("change", function(){
  thermostat.togglePowerSaving();
  $("#maxTemp").text(thermostat._maxTemp);
  $("#temperature").text(thermostat.showTemp());
});

$("#powerSavingOff").on("change", function(){
  thermostat.togglePowerSaving();
  $("#maxTemp").text(thermostat._maxTemp);
  $("#temperature").text(thermostat.showTemp());
});
});
