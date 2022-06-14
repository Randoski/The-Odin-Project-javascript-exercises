
// #TODO: Test 4 and 6 failed test conditions.

const leapYears = function(year) {
    if(year % 4 === 0) {
        return true;
    } else if(year % 100 === 0 && year % 400 === 0) {
        return true
    } else if (year % 100 === 0) {
        return false;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

