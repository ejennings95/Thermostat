function Thermostat() {
  this._temp = 20;
  this._minTemp = 10;
  this._powerSaving = true;
};

Thermostat.prototype.showTemp = function() {
  return this._temp;
};

Thermostat.prototype.increaseTemp = function() {
  this._temp += 1
};

Thermostat.prototype.decreaseTemp = function() {
  this._temp -= 1
};

Thermostat.prototype.showMinTemp = function() {
  return this._minTemp;
};

Thermostat.prototype.showPowerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.togglePowerSaving = function() {
  (this._powerSaving === true) ? this._powerSaving = false : this._powerSaving = true;
};
  
