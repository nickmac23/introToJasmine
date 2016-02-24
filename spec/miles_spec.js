var miles = require('../lib/miles.js')

describe('miles', function () {
  it('determines if a car has enough gas to travel route', function () {
      var car = {
        milesPerGallon: 20,
        gallonsInTank: 3
      };

      var route = {
        miles: 200,
        destination: "Boulder",
        location: "Fancy Land"
      };

    expect(miles.hasEnoughGas(car, route)).toEqual(false)
    car.gallonsInTank += 20
    expect(miles.hasEnoughGas(car, route)).toEqual(true)
  })
});
