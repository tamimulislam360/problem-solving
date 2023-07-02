/**
 * Challenge: Validate Palindrome
Write a function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.
 */


const isPalindrome = str => str.split('').reverse().join('') === str

console.log(isPalindrome('racecar'))