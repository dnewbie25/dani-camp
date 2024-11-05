import { expect, it, test } from 'vitest'
import { add } from './math'

it('should return the total sum of numbers in an array', () => {
  // Arrange
  const numbers = [1, 2, 3, 4, 5, 6, 7]

  // Act
  const result = add(numbers)

  // Assert
  const expectedResult = numbers.reduce((sum, curr) => sum + curr, 0)
  expect(result).toBe(expectedResult)
})

test('should yield NaN if at least one invalid parameter is provided', () => {
  // Arrange
  const input = ['invalid', 1]
  // Act
  const result = add(input)
  // Assert
  expect(result).toBeNaN()
})

it('should yield a correct sum if an array of numeric string values is provided', () => {
  // Arrange
  const inputs = ['1', '2', '3', '4', '5', '6', '7']
  // Act
  const result = add(inputs)
  // Assert
  const expectedResult = inputs.reduce((sum, curr) => sum += parseInt(curr), 0)
  expect(result).toBe(expectedResult)
})

it('should yield 0 if an empty array is passed', () => {
  const input = []
  const result = add(input)
  expect(result).toBe(0)
})

it('should throw an error if no argument is passed', () => {
  // this way we can catch the returned value (an error for this particular case)
  const result = () => {
    add()
  }
  expect(result).toThrow()
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1
  const num2 = 2
  const num3 = 3
  const result = () => {
    add(num1, num2, num3)
  }
  expect(result).toThrow()
})
