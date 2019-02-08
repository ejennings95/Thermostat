'use strict'

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.showTemp()).toEqual(20);
  });

  it("should use the increaseTemp function to increase the temp by 1", function(){
    thermostat.increaseTemp();
    expect(thermostat._temp).toEqual(21);
  });

  it("should use the decreaseTemp function to decrease the temp by 1", function(){
    thermostat.decreaseTemp();
    expect(thermostat._temp).toEqual(19);
  });

  it("should have a minimum temperature of 10 degrees", function() {
    expect(thermostat.showMinTemp()).toEqual(10);
  });

  it("should throw an error if you try to decrease temp below the minimum temperature of 10 degrees", function() {
    for (var i = 0; i < 10; i++) {
       thermostat.decreaseTemp();
     }
     expect(function() {thermostat.decreaseTemp();} ).toThrow(new Error("Already set to minimum temperature"));
  });

  it("should start with power saving on", function() {
    expect(thermostat.showPowerSaving()).toEqual(true);
  });

  it("should be possible to toggle power saving mode", function() {
    thermostat.togglePowerSaving();
    expect(thermostat.showPowerSaving()).toEqual(false);
  });

  it("should be possible to toggle power saving mode on again", function() {
    thermostat.togglePowerSaving();
    thermostat.togglePowerSaving();
    expect(thermostat.showPowerSaving()).toEqual(true);
  });

  it("should set max temperature to 25 degrees if power saving mode is on", function() {
    expect(thermostat.showMaxTemp()).toEqual(25);
  });

  it("should throw an error if you try to increase temp above the maximum temperature on power saving mode of 25 degrees", function() {
    for (var i = 0; i < 5; i++) {
       thermostat.increaseTemp();
     }
     expect(function() {thermostat.increaseTemp();} ).toThrow(new Error("Already set to maximum temperature"));
  });


  it("should change the temp to the max temp of power saving mode if above this", function() {
    thermostat.togglePowerSaving();
    for (var i = 0; i < 7; i++) {
       thermostat.increaseTemp();
     }
     thermostat.togglePowerSaving();
     expect(thermostat.showTemp()).toEqual(25);
  });

  it("should set max temperature to 32 degrees if power saving mode is off", function() {
    thermostat.togglePowerSaving();
    expect(thermostat.showMaxTemp()).toEqual(32);
  });

  it("should throw an error if you try to increase temp above the maximum temperature with power saving mode off (32 degrees)", function() {
    thermostat.togglePowerSaving();
    for (var i = 0; i < 12; i++) {
       thermostat.increaseTemp();
     }
     expect(function() {thermostat.increaseTemp();} ).toThrow(new Error("Already set to maximum temperature"));
  });

  it("should reset temperature to 20 when reset is clicked", function(){
    thermostat.resetTemp();
    expect(thermostat._temp).toEqual(20);
  });

  it("should return low-usage when the temperature is less than 18", function(){
    for (var i = 0; i < 3; i++) {
       thermostat.decreaseTemp();
     }
    expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
  });

  it("should return medium-usage when the temperature is at least 18 and less than 25", function(){
    expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
  });

  it("should return high-usage when the temperature is at least 25", function(){
    thermostat.togglePowerSaving();
    for (var i = 0; i < 6; i++) {
       thermostat.increaseTemp();
     }
    expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
  });

});
