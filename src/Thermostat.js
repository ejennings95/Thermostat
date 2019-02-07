function Thermostat() {
  this._temp = 20;
};

Thermostat.prototype.showTemp = function() {
  return this._temp;
};
