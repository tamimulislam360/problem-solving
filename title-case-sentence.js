/** 
 * Challenge: Title Case Sentence
Write a function called titleCase that takes a string as an argument and returns a new string where the first letter of each word is capitalized, and all other letters are in lowercase.
 */


const titleCase = str => str.replace(/[\s,'"]+/g, ' ').split(' ').map(st => st.charAt(0).toUpperCase() + st.slice(1)).join(' ')


console.log(titleCase('hello , "" world'))
console.log(titleCase('i love javascript'));


/**
 * Steps => 
 * 1. Removing all white spaces, commas, double quotes, and single quotes
 * 2. Split by space
 * 3. map the splited words
 * 4. Uppercase every word's first letter by charAt(0)
 * 5. Concatenate Uppercased letter with the rest letters of the word using slice(1)
 * 6. Finally join the array returned by map() with join(' ')
 */