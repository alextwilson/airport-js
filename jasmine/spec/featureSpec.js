describe('Airport', function() {

  var airport = new Airport()
  var plane = new Plane()

  describe('land a plane', function(){
    it('lands', function() {
      airport.land(plane)
      expect(airport._hangar).toContain(plane)
    });
  });
});
