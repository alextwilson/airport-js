describe('Airport', function() {

  var airport;
  var plane;
  var station;

  beforeEach(function(){
    station = jasmine.createSpyObj('station', ['isStormy']);
    station.isStormy.and.returnValue(false);
    airport = new Airport(station);
    plane = jasmine.createSpy('plane');
  });

  describe('instruct plane to land', function(){
    it('lands', function() {
      airport.land(plane)
      expect(airport._hangar).toContain(plane)
    });
  });

  describe('instruct plane to take off', function(){
    it('takes off', function() {
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport._hangar).not.toContain(plane)
    });
  });

  describe('if weather is stormy does not let plane', function() {
    it('land', function() {
      station.isStormy.and.returnValue(true);
      var error =  new Error("Too stormy to land");
      expect(function(){ airport.land(plane); }).toThrow(error);
      airport._weatherStation.isStormy.calls.reset();
    });

    it('take off', function() {
      airport.land(plane);
      station.isStormy.and.returnValue(true);
      var error =  new Error("Too stormy to take off");
      expect(function(){ airport.takeOff(plane); }).toThrow(error);
    });
  });

  describe('airport capacity', function() {
    it('prevents landing when full', function() {
      for (var i = 0; i < 10; i++) {
        airport.land(plane)
      }
      var error =  new Error("The airport is full");
      expect(function(){ airport.land(plane); }).toThrow(error);
    });
  });
});
