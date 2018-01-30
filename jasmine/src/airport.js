'use strict';

function Airport(weatherStation) {
  this._hangar = [];
  this._weatherStation = weatherStation
};

Airport.prototype.land = function(plane) {
  if (this._weatherStation.isStormy()) {
    throw new Error("Too stormy to land");
  } else {
    this._hangar.push(plane);
  };
};

Airport.prototype.take_off = function(plane) {
  this._hangar.pop(plane);
};
