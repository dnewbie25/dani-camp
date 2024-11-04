import { expect, it } from 'vitest'
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
