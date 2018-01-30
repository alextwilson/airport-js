describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
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
      airport.take_off(plane)
      expect(airport._hangar).not.toContain(plane)
    });
  });
});
