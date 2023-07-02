/**
 * Write a function called flattenArray that takes in a nested array as input and returns a new array that is a flattened version of the input array. The resulting array should not contain any nested arrays, only individual elements.
 */


/**
 * With recursion
 */

// const flattenArray = (arr) => {
//   let result = []
//   for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])){
//       let nestedArray = flattenArray(arr[i])
//       result = result.concat(nestedArray)
//     }else{
      
//         result = result.concat(arr[i])
      
//     }
    
//   }
//   return result
// }



/**
 * Without recursion
 */

const flattenArray = (arr) => {
    const result = [];
    const stack = [...arr];
  
    while (stack.length) {
      const current = stack.pop();
  
      if (Array.isArray(current)) {
        stack.push(...current);
      } else {
        result.unshift(current);
      }
    }
  
    return result;
  };
  
  
  
  const nestedArray = [1, [2, 3], [4, [5, 6, [[7, 8], 9, 10]]]];
  console.log(flattenArray(nestedArray));