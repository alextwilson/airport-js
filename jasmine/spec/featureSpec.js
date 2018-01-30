describe('Airport', function() {

  var airport;
  var plane;
  var station;

  beforeEach(function(){
    station = new WeatherStation();
    airport = new Airport(station);
    plane = new Plane();
  });

  describe('instruct plane to land', function(){
    it('lands', function() {
      spyOn(airport._weatherStation, 'isStormy').and.returnValue(false);
      airport.land(plane)
      expect(airport._hangar).toContain(plane)
    });
  });

  describe('instruct plane to take off', function(){
    it('takes off', function() {
      spyOn(airport._weatherStation, 'isStormy').and.returnValue(false);
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport._hangar).not.toContain(plane)
    });
  });

  describe('if weather is stormy does not let plane', function() {
    it('land', function() {
      spyOn(airport._weatherStation, 'isStormy').and.returnValue(true);
      var error =  new Error("Too stormy to land");
      expect(function(){ airport.land(plane); }).toThrow(error);
      airport._weatherStation.isStormy.calls.reset();
    });

    it('take off', function() {
      airport.land(plane);
      spyOn(airport._weatherStation, 'isStormy').and.returnValue(true);
      var error =  new Error("Too stormy to take off");
      expect(function(){ airport.takeOff(plane); }).toThrow(error);
    });
  });
});
