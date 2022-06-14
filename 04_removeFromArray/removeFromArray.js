// remove n from array using Array.from

const removeFromArray = function(array, ...n) {
    return array.filter(item => !n.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
