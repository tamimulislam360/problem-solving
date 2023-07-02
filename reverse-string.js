
/**
 * using for loop
 */

// const reverseString = str => {
//   let reversedString = ''
//   for(let i = str.length - 1; i >= 0; i--){
//     reversedString+= str[i]
//   }
//   return reversedString
// }



/** using arrow function and array method ||  in one line */

const reverseString = str => str.split('').reverse().join('')



const reversedString = reverseString('Hello, World!')

console.log(reversedString);
