describe('Plane', function() {

  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  describe('plane is flying', function() {
    it('lands', function() {
      plane.land();
      expect(plane.isFlying).toEqual(false);
    });

    it('errors if told to take off', function() {
      var error =  new Error("Cannot take off, plane is already flying");
      expect(function(){ plane.takeOff(); }).toThrow(error);
    });
  });

  describe('plane is grounded', function() {
    it('takes off', function() {
      plane.land();
      plane.takeOff();
      expect(plane.isFlying).toEqual(true);
    });
  });
});
