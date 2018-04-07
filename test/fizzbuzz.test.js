import { assert } from 'chai';

import  FizzBuzz  from '../fizzbuzz';


describe('FIND THE DIVISIBILITY OF NUMBERS', () => {
  it('should request for a number as input when user enters string', () => {
   assert.deepEqual(FizzBuzz('ppp'), 'Please enter a number')
  })
  it('should return fizz when user enters 9 a multiple of 3 as input ', () => {
    assert.deepEqual(FizzBuzz(9), 'fizz')
  });
  it('should return buzz when user enters 10 a multiples of 5 as input', () => {
    assert.deepEqual(FizzBuzz(10), 'buzz')
  });
  it('should return fizzbuzz when a user enters a number that is both multiples\
   of 3 and 5', () => {
    assert.deepEqual(FizzBuzz(30), 'FizzBuzz')
  });
  it('should return a message when user enters a negative integer', () => {
    assert.deepEqual(FizzBuzz(-9), 'Number must be positive')
  });
  it('should return number when user enters a number that is not a\
    multiple of 3 or 5', () => {
    assert.deepEqual(FizzBuzz(26), 26)
  });
  it('should return a message when the user input is null or undefined', () => {
    assert.deepEqual(FizzBuzz(" "), 'Please enter a number')
  });
})