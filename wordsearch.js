const transpose = require('../../d2/matrix_transposition');

const wordSearch = (letters, word) => { 
    if(!word) {
        return false;
    }
    const upperCaseWord = word.toUpperCase();
    const backwardsWord = upperCaseWord.split("").reverse().join("");
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(upperCaseWord)) {
            return true;
        }
    }
    // check for horizontal backwards
    for (l of horizontalJoin) {
        if (l.includes(backwardsWord)) {
            return true;
        }
    }
    const transposedLetters = transpose(letters);
    const verticalJoin = transposedLetters.map(ls => ls.join(''));

    for(l of verticalJoin){
        if (l.includes(upperCaseWord)) {
            return true;
        }
    }
    // check for vertical backwards
    for(l of verticalJoin){
        if (l.includes(backwardsWord)) {
            return true;
        }
    }

    return false;
}

module.exports = wordSearch