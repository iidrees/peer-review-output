/* function */

const squareEachNumber = (number) => {//args

  let squared= "";// initialise the square variable

  if(typeof number !== 'number') {// conditon to check if input is a number
  return 'Please enter an integer'
  } else if (number < 1) {// conditon to check if input is not zero or negative
    return 'Please enter a number greater than 1'
  } 

  const arrayNum = [...number + ''].map( n => {// input is squared here
    squared += parseInt(n) * parseInt(n)
  })
  return Number(squared);
} 


export default squareEachNumber;// export function
