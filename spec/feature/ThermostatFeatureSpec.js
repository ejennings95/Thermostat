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

  it("should set max temperature to 32 degrees if power saving mode is off", function() {
    thermostat.togglePowerSaving();
    expect(thermostat.showMaxTemp()).toEqual(32);
  });


});
