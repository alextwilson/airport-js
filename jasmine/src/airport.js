'use strict';

function Airport(weatherStation, capacity = 10) {
  this._hangar = [];
  this._weatherStation = weatherStation;
  this._CAPACITY = capacity;
};

Airport.prototype.land = function(plane) {
  if (this._weatherStation.isStormy()) {
    throw new Error("Too stormy to land");
  } else if (this._hangar.length >= 10) {
    throw new Error("The airport is full");
  } else {
    this._hangar.push(plane);
  };
};

Airport.prototype.takeOff = function(plane) {
  if (this._weatherStation.isStormy()) {
    throw new Error("Too stormy to take off");
  } else {
    this._findPlaneAndFly(plane);
  };
};

Airport.prototype._findPlaneAndFly = function(plane) {
  if (this._hangar.includes(plane)) {
    var index = this._hangar.findIndex(plane);
    this._hangar.splice(index, 1);
  } else {
    throw new Error("This aeroplane is not in this airport")
  };
};
