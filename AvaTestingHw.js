// Ava Testing Assignment April 26, 2017

/**
 * Problem 1: 'nickname'
 * 
 * Write a function that accepts two parameters: 
 * a potential nickname (string) and a fullName (string). 
 * Return true if the nickname is valid for the provided full name, 
 * and false otherwise. The nickname is valid if it's shorter than 
 * the full name and contains all letters in the order they appear in 
 * the full name. For example, "Lusa" is a valid nickname 
 * for "LUke SegArs" but "Luek" and "Sek" are not.
 * 
 */

function longer(nickname, fullName) {
    if (fullName.length > nickname.length) {
        return true;
    } else {
        return false;
    }
} // function returns true if fullName is longer than nickname, false if nickname longer than fullName

function matching_letters(nickname, fullName) {
    let letters = nickname.split('');
    console.log(letters);
    console.log(fullName.includes(letters));
    letters.filter()
} // Can't figure this one out either, gonna come back. 

function nickname_function(nickname, fullName) {

    if (longer(nickname, fullName) === true) {
        // Then the nickname length is valid, so check to see if it has the right
        // letters in the right order.
    } else {
        return false;
    }
}

import test from 'ava';

test('Is nickname shorter', function (t) {
    t.deepEqual(nickname_function('MT', 'Mac Taylor'), true);
});

test('All nickname letters in full name', function (t) {
    t.deepEqual(nickname_function('Ben', 'Benjamin'), true);
});

test('Are letters in the right order', function (t) {
    t.deepEqual(nickname_function('JLo', 'Jennifer Lopez'), true);
});

/**
 * 
 * PROBLEM 2 - descending
 * 
 * Write a function that accepts one parameter: a number (number). 
 * Return the number with all digits sorted in descending (largest to smallest) order.
 * For example, descending(5614) should return the number 6541. Make sure you're returning 
 * a number, not a string!
 * 
 */

/*I think this one is all done */

function descending(number) {
    if (typeof (number) !== 'number') {
        return null
    }
    let string = number.toString();
    let digits = string.split('');
    let order = digits.sort();
    let abc = order.reverse(digits);
    let x = abc.join('');
    return parseInt(x);
}

console.log(descending(23487));

import test from 'ava';

test('valid input', function (t) {
    t.deepEqual(descending(23487), 87432);

});

/**
 * PROBLEM 3 - longx
 * 
 * Write a function that accepts one parameter: a sequence (string). 
 * Return the length of the longest continuous string of x's.
 * For example, 'abxxaxterxtxxxa' should return 3.
 * 
 */

function longx(string) {
    let exes = 0;

    for (let i = 0; i < string.length; i++) {

        if (string[i] === 'x') {
            exes++;
        }
        if (string[i] !== 'x') {
            exes = 0;
        }
        let excount = 0;
    }
    return exes;
}

console.log(longx('asdxxxjdixxiij')) // this function counts the x's, I can't figure out the rest.



/**
 * 
 * 'guesswho'
 * 
 * Write a function that accepts one parameter: a set of funcs (array). 
 * Return the numbers from 1-100 that return true for each of the functions in the array.
 * 
 */

/*This is the code we did in class down below for this problem */

function guesswho(ops) { // array of 'operations'
// 1. Create an array of numbers to keep.
// 2. Start looping over numbers 1 - 100.
// 3. pass each number into each function in 'ops'
// 4. if all trues, push to array, if not, move on.
let keepers = [];

    for (let num = 1; num <= 100; num++) {
        let valid = true; // if this stays true, we push to keepers array

        for (let i = 0; i < ops.length; i++) {
            let success = ops[i](num);

            if(!success) {
                valid = false;
            }
        }
        if (valid) {
            keepers.push(num);
        }
    }



return keepers;

}

import test from 'ava';

test('guesswho', function (t) {
    let funcs = [
        function big(x) { return x > 80; },
        function odd(x) { return x % 2 === 1; },
    ];

    t.deepEqual(guesswho(funcs)[81, 83, 85, 87, 89, 91, 93, 95, 97, 99])


});

