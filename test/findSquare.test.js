import { assert } from 'chai';

import squareEachNumber from '../squared'

describe('FIND SQUARE OF ALL DIGIT IN A NUMBER', () => {
  it('should request for an integer when a user enter a string as input', () => {
    assert.deepEqual(squareEachNumber(), 'Please enter an integer')
  });
  it('should request for number greater than 1 when a user enters number < 0', () => {
    assert.deepEqual(squareEachNumber(0), 'Please enter a number greater than 1')
  })
  it('should show user the square of each number in an interger they entered', () => {
    assert.deepEqual(squareEachNumber(9119), 811181);
  })

});


