
/**
 => Write a function called reverseArray that takes in an array as input and    returns a new array with the elements reversed. The order of the elements in the original array should be reversed in the resulting array.
 */


// using arrow function and Array.reverse() =>
const reverseArray = arr => arr.reverse()


// using loop =>

// const reverseArray = arr => {
//   const result = []
//   while(arr.length) result.push(arr.pop())
//   return result
// }

const arr1 = [1,2,3,4,5]
const arr2 = ['Apple', 'Orange', 'Banana']

console.log(reverseArray(arr1))
console.log(reverseArray(arr2))