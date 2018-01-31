'use strict';

function Plane() {
  this.isFlying = true;
};

Plane.prototype.land = function() {
  this.isFlying = false;
};

Plane.prototype.takeOff = function() {
  if (this.isFlying) {
    throw new Error("Cannot take off, plane is already flying");
  } else {
    this.isFlying = true;
  };
};
