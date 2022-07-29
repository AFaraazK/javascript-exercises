const palindromes = function(string) {
    // remove upper cases
    let newString = string.toLowerCase();
    // remove punctuation
    newString = newString.replace(/[^\w\s\']|_/g, "")
           .replace(/\s+/g, "");
    
    // reverse the string
    let reverseString = '';
    for (let i = 0; i < newString.length; i++) {
      reverseString = newString[i] + reverseString;
    }
    return reverseString == newString;
};


// Do not edit below this line
module.exports = palindromes;
