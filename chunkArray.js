/**
 * Write a function called chunkArray that takes in an array and a chunk size as input and returns a new array with the original array split into multiple sub-arrays of the specified chunk size.
 */



/**
 * using slice method:
 */


// const chunkArray = (arr, size) => {
  
//   const result = []
//   for(let i = 0; i < arr.length; i += size){
//     result.push(arr.slice(i, i + size))
//   }
//   return result
// }


/**
 * using splice method:
 */

//  const chunkArray = (arr, size) => {
//   const result = [];
//   let index = 0;
  
//   while (index < arr.length) {
//     result.push(arr.splice(index, size));
//   }
  
//   return result;
// };



/**
 * using reduce()
 */

const chunkArray = (arr, size) => {
    return arr.reduce((result, current) => {
      const lastChunk = result[result.length - 1];
      if (!lastChunk || lastChunk.length === size) {
        result.push([current]);
      } else {
        lastChunk.push(current);
      }
      return result;
    }, []);
  };
  
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(chunkArray(array, 6));
  