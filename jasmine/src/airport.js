'use strict';

function Airport(weatherStation) {
  this._hangar = [];
  this._weatherStation = weatherStation;
  this._CAPACITY = 10;
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
    this._hangar.pop(plane);
  };
};
