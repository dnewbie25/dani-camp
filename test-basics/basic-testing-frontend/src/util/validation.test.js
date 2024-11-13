import { validateNumber, validateStringNotEmpty } from "./validation";
import {it, expect} from "vitest";

it('should return an error is the string is empty or is not a string',()=>{
  const input = ''
  const input2 = {}
  const result = ()=>{
    validateStringNotEmpty(input)
  }
  const result2 = ()=>{
    validateStringNotEmpty(input2)
  }

  expect(result).toThrow()
  expect(result2).toThrow()
})

it('should return an error is the number is NaN',()=>{
  const input = NaN
  const result = ()=>{
    validateNumber(input)
  }
  const result2 = ()=>{
    validateNumber()
  }

  expect(result).toThrow()
  expect(result2).toThrow()
})
