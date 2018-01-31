describe('Plane', function() {

  var plane;

  beforeEach(function() {
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

    beforeEach(function() {
      plane.land()
    });

    it('takes off', function() {
      plane.takeOff();
      expect(plane.isFlying).toEqual(true);
    });

    it('errors if told to land', function() {
      var error =  new Error("Cannot land, plane is already landed");
      expect(function(){ plane.land(); }).toThrow(error);
    });
  });
});
