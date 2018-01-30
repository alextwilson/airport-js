describe('WeatherStation', function() {

  var station;

  beforeEach(function() {
    station = new WeatherStation();
  });

  describe('will return', function() {
    it('true when random value is less than or equal to 0.7', function() {
      spyOn(Math, "random").and.returnValue(0.7)
      expect(station.isStormy()).toEqual(true)
    });

    it('false when random value is greater than 0.7', function() {
      spyOn(Math, "random").and.returnValue(0.8)
      expect(station.isStormy()).toEqual(false)
    });
  });
});
