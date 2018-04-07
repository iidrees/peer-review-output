/* export function */

const FizzBuzz = function(n) {
  if (typeof n !== 'number') {
    return 'Please enter a number';
  } else if (n < 0 ) {
    return 'Number must be positive'
  } else if (n % 3 !== 0 && n % 5 !== 0) {
    return n;
  } else if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 5 === 0) {
    return 'buzz'
  } else if (n % 3 === 0 ) {
    return 'fizz'
  }
}

export default FizzBuzz;