/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
  let array1 = stringA.split("")
  let array2 = stringB.split("")
  let count =0;

  for(let i =0; i < array1.length; i++){
    for(let j=0; j <array2.length; j++){
      if(array1[i] !== array2[j]){
        return false
      }
    }
  }
  return true
}

module.exports = anagrams;
