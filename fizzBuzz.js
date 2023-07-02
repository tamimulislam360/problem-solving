/**
 * Challenge: FizzBuzz
Write a function called fizzBuzz that takes a number n as an argument and prints the numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz" instead of the number. And for numbers that are multiples of both 3 and 5, print "FizzBuzz".
 */


const fizzBuzz = n => {
    for(let i = 1; i <= n; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz', i)
      }else if(i % 3 === 0){
        console.log('Fizz', i)
      }else if(i % 5 === 0){
        console.log('Buzz', i)
      }
    }
  }
  
  fizzBuzz(15)