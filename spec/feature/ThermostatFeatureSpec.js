describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.showTemp()).toEqual(20);
  });
  //
  // it("should have method increaseTemp", function(){
  //   expect(thermostat).toHaveMethod("increaseTemp")
  // });

  it("should use the increaseTemp function to increase the temp by 1", function(){
    thermostat.increaseTemp();
    expect(thermostat._temp).toEqual(21);
  });

  it("should use the decreaseTemp function to decrease the temp by 1", function(){
    thermostat.decreaseTemp();
    expect(thermostat._temp).toEqual(19);
  });

});
