function Thermostat() {
  this._temp = 20;
};

Thermostat.prototype.showTemp = function() {
  return this._temp;
};

Thermostat.prototype.increaseTemp = function() {
  this._temp += 1
};
