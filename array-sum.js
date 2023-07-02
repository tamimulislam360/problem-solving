
/**
 * Challenge: Array Sum

  => Write a function called arraySum that takes in an array of numbers as input and returns the sum of all the numbers in the array.
 */

  const arraySum = arr => arr.reduce((a,b) => a + b, 0)

  const numbers1 = [1, 2, 3, 4, 5];
  console.log(arraySum(numbers1));
  
  const numbers2 = [10, -5, 7, 12, 3];
  console.log(arraySum(numbers2));