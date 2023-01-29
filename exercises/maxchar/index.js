// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let char = '';
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(charMap[str[i]]) {
            charMap[str[i]]++
        } else {
            charMap[str[i]] = 1
        };
    };

    for(let key in charMap) {
        if(charMap[key] > counter) {
            counter = charMap[key];
            char = key
        }
    };

    return char;

}

module.exports = maxChar;
