import {numberFormat} from './numberFormat';
import {it, expect} from 'vitest'

it('should return a number formatted with comma every three decimal places if it is greater than 999',()=>{
  const input = 334234878
  const result = numberFormat(input)
  expect(result).toBe('334,234,878')
})

it('should return a number formatted with comma every three decimal places if it is greater than 999',()=>{
  const input = 999
  const result = numberFormat(input)
  expect(result).toBe('999')
})

it('should return a number formatted with comma every three decimal places if it is greater than 999',()=>{
  const input = 0.123
  const result = numberFormat(input)
  expect(result).toBe('0.123')
})

it('should return a number formatted with comma every three decimal places if it is greater than 999',()=>{
  const input = 0
  const result = numberFormat(input)
  expect(result).toBe('0')
})

it('should return a number formatted with comma every three decimal places if it is greater than 999',()=>{
  const input = 3454243423424565635454354553453n
  const result = numberFormat(input)
  expect(result).toBe('3,454,243,423,424,565,635,454,354,553,453')
})