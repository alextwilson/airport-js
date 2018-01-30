function WeatherStation() {

};

WeatherStation.prototype.isStormy = function() {
  if (Math.random() <= 0.7) {
    return true;
  } else {
    return false;
  }
};
