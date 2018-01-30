'use strict';

function Airport() {
  this._hangar = [];
};

Airport.prototype.land = function(plane) {
  this._hangar.push(plane);
  console.log("land plane", plane);
  console.log(this._hangar);
};

Airport.prototype.take_off = function(plane) {
  this._hangar.pop(plane);
  console.log("Take off plane", plane);
  console.log(this._hangar);
};
