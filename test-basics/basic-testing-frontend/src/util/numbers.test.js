import { expect, it, test } from 'vitest'
import { transformToNumber } from './numbers'

it('should transform a string number into a number of type number', () => {
  const input = '23'
  const result = transformToNumber(input)
  expect(result).toBeTypeOf('number')
})

it('should transform a string number into its equivalent', () => {
  const input = '23'
  const result = transformToNumber(input)
  expect(result).toBe(23)
})

it('should yield NaN if the string does not correspond to a valid number', () => {
  const input = '12valid'
  const result = transformToNumber(input)
  expect(result).toBeNaN()
})
