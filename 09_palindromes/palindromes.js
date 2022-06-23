const palindromes = function (word) {
    let word1 = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let word2 = Array.from(word).reverse().join('').replace(/[^a-zA-Z]/g, '').toLowerCase();
    // return word1 === word2.split('').reverse().join('');

    if(word1 === word2) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;


