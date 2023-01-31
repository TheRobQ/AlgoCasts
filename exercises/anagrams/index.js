// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function maper (str) {
    let map = {}
    for (let char of str){
        if(map[char]) {
            map[char]++
        }else {
            map[char] = 1;
        }
    } 
    return map;
}
function anagrams(stringA, stringB) {
    let parsedString = stringA.replace(/\W+/g, '').toLowerCase();
    let parsedString2 = stringB.replace(/\W+/g, '').toLowerCase();
    let charMapA = maper(parsedString);
    let charMapB = maper(parsedString2);
    
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }
    
    for(let char in charMapA) {
        if(charMapA[char] !== charMapB[char]) {
            return false
        };
    }
    return true
};

module.exports = anagrams;
