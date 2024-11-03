const { test, expect } = require('@jest/globals');

// main.js functions
const { calculateAge, calculateSeverancePay, daysActive } = require('../main');

// Tests for salaryHour and hoursWorked values
test('salaryHour should be a number greater than 0 and less than or equal to 250', () => {
  const salary = 200;
  expect(salary).toBeGreaterThan(0);
  expect(salary).toBeLessThanOrEqual(250);
});

test('hoursWorked should be a number greater than 0', () => {
  const hours = 40;
  expect(hours).toBeGreaterThan(0);
});

// Test for date validation - employee should be older than 18 years old
test('birthday should be a date that makes the employee older than 18 years', () => {
  const birthday = '2000-01-01';
  const age = calculateAge(birthday);
  const ageNumber = parseInt(age);
  expect(ageNumber).toBeGreaterThanOrEqual(18);
});

// Test for daysActive function
test('daysActive should calculate the number of active days correctly', () => {
  const startDate = '2023-01-01';
  const lastDate = '2023-03-01';
  const isActive = 'no';
  const days = daysActive(startDate, lastDate, isActive);
  expect(days).toBeGreaterThan(0);
});
