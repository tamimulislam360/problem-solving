/**
 * Challenge: Find the Longest Word
Write a function called findLongestWord that takes a string as an argument and returns the longest word in the string. If there are multiple words with the same maximum length, return the first one.
 */


// const findLongestWord = str => {
//   const regex = /,\s*/g;
//   const stringWithoutCommas = str.replace(regex, ' ')
//   const splited = stringWithoutCommas.split(' ')
//   const longest = splited.reduce((acc, cur) => cur.length > acc.length ? cur : acc, '')
//   return longest
// }


/** In one line */
const findLongestWord = str => str.replace(/,\s*/g, ' ').split(' ').reduce((acc, cur) => cur.length > acc.length ? cur : acc, '')


console.log(findLongestWord('The quick brown fox jumps over the lazy dog'));
console.log(findLongestWord('I love JavaScript'));



