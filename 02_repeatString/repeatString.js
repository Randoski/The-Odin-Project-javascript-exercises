// This function will take two arguments, `string` and `num`.

// *Note:* The exercises after this one will not have arguments provided as this one does - you will need to provide them yourself from now on.
//  So read each exercise's README carefully to see what kinds of arguments will be expected.

// You will notice in this exercise that there are multiple tests (see in file `repeatString.spec.js`). Only the first test is currently enabled.
//  So after making sure that this first one passes, enable the others one by one by deleting the `.skip` from the `test.skip()` function.






// #TODO: Test 5 failed test condition.

const repeatString = function(string, num) {
    let newString = '';
    for (let i = 0; i < num; i++) {
        newString += string;
    }
    return newString;
}

// Do not edit below this line
module.exports = repeatString;



