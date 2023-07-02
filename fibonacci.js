/**
 * Challenge: Fibonacci Sequence
Write a function called fibonacci that takes a number n as an argument and returns an array containing the first n numbers in the Fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
 */

const fibonacci = n => {
    const result = []
    for(let i = 0; i< n; i++){
      if(i === 0 || i === 1){
        if(i === 0){
          result.push(0)
        }else{
          result.push(1)
        }
      }else{
        result.push(result[result.length - 1] + result[result.length - 2])
      }
    }
    return result
  }
  
  console.log(fibonacci(10));
  