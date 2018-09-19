import TemperatureCalculations from "./Calculations"

const assert = require('assert');

it('calculates Farhenheit correctly', () => {
  const calc = new TemperatureCalculations;

  const expectedF = 32
  const actualF = calc.toFahrenheit(0);

  assert.equal(actualF, expectedF);
});

it('calculates Celsius correctly', () => {
  const calc = new TemperatureCalculations;

  const expectedC = 100
  const actualC = calc.toCelsius(212);

  assert.equal(actualC, expectedC);
});

it('calculates Kelvin correctly', () => {
  const calc = new TemperatureCalculations;

  const expectedK = 273;
  const actualF = calc.toKelvin(0);

  assert.equal(actualK, expectedK);
});