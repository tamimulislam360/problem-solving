/**
 * Write a function called arrayIntersection that takes in two arrays as input and returns a new array containing the elements that are common to both arrays, without any duplicates. The order of elements in the resulting array doesn't matter.
 */

const arrayIntersection = (arr1, arr2) => [...new Set(arr1.filter(e => arr2.includes(e)))].sort()


const array1 = [1, 2, 4, 5, 3, 5, 4, 5];
const array2 = [4, 5, 6, 7, 8, 5, 4, 3];
console.log(arrayIntersection(array1, array2));


const anotherArray1 = [10, 20, 50, 30, 40];
const anotherArray2 = [40, 50, 60, 70];
console.log(arrayIntersection(anotherArray1, anotherArray2));