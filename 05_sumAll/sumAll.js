

// #TODO: Test 5 failed test condition.

const sumAll = function(num1, num2) {   
    let sum = 0;

    if(num1 >= 0 && num2 >=0) {
        let maxNum = Math.max(num1, num2);
        let minNum = Math.min(num1, num2);
        for(let i = minNum; i <= maxNum; i++) {
            sum += i;
        }
        return sum;
    } else if(num1 === isNaN || num2 === isNaN) {
        return 'ERROR';
    } else {
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;


