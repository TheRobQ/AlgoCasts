// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let strArray = str.split(' ');
  
    for(let i = 0; i < strArray.length; i++) {
        let capWord = strArray[i];
        capWord = capWord[0].toUpperCase() + capWord.slice(1);
        strArray[i] = capWord
    };
    console.log(strArray)
    return strArray.join(' ')
};

module.exports = capitalize;
