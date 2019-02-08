'use strict'

function Thermostat() {
  this._temp = 20;
  this._minTemp = 10;
  this._maxTemp = 25;
  this._powerSaving = true;
};

Thermostat.prototype.showTemp = function() {
  return this._temp;
};

Thermostat.prototype.increaseTemp = function() {
  if (this._temp >= this._maxTemp){
  throw new Error("Already set to maximum temperature");
}
  else {
  this._temp += 1
}
};

Thermostat.prototype.decreaseTemp = function() {
  if (this._temp <= this._minTemp){
  throw new Error("Already set to minimum temperature");
}
  else {
  this._temp -= 1
}
};

Thermostat.prototype.showMinTemp = function() {
  return this._minTemp;
};

Thermostat.prototype.showPowerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.togglePowerSaving = function() {
  (this._powerSaving === true) ? this._powerSaving = false : this._powerSaving = true;
  this.setMaxTemp();
  if (this._temp > this._maxTemp){
    this._temp = this._maxTemp
  }
};

Thermostat.prototype.showMaxTemp = function() {
  return this._maxTemp;
};

Thermostat.prototype.setMaxTemp = function() {
  if (this._powerSaving) {
    this._maxTemp = 25;
  }
  else {
    this._maxTemp = 32;
  }
};

Thermostat.prototype.resetTemp = function() {
  this._temp = 20;
};

Thermostat.prototype.currentEnergyUsage = function() {
  if (this._temp < 18) {
    return "low-usage";
  }
  else if (this._temp > 25) {
    return "high-usage";
  }
  else {
    return "medium-usage";
  }
};
