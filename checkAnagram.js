/**
 * Challenge: Anagram Checker
Write a function called isAnagram that takes two strings as arguments and returns true if the strings are anagrams of each other, and false otherwise. Anagrams are strings that use the same characters in the same quantity, but in a different order.
 */

// const isAnagram = (str1, str2) => {
//   const biggerString = str1.length > str2.length ? str1 : str2
//   for(let i = 0; i < biggerString.length; i++){
//     if(!str1.includes(biggerString[i]) || !str2.includes(biggerString[i])){
//       return false
//     }
//   }
//   return true
// }



/** another version */
const isAnagram = (str1, str2) => {
    const cleanString = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    const sortedStr1 = cleanString(str1).split('').sort().join('');
    const sortedStr2 = cleanString(str2).split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
  };
  
  
  
  // console.log(isAnagram('listen', 'silent'));
  // console.log(isAnagram('hello', 'world'));
  // console.log(isAnagram('balm', 'lamb'));
  // console.log(isAnagram('balm', 'lambb'));
  // console.log(isAnagram('balm', 'lambbc'));
  
  console.log(isAnagram('hello', 'olleh'));
  console.log(isAnagram('hello', 'ollehh'));
  