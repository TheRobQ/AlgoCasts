// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = n.toString()
    .split('')
    .reverse()
    .join('');
    
    let parsed = parseInt(reversed);
    if(n < 0) {
        return parsed * -1
    } else {
        return parsed;
    }
}

module.exports = reverseInt;
