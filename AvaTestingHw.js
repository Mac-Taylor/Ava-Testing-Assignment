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
    return fullName.includes(letters);
}

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


function descending(number) {
    if (typeof(number) !== 'number'){
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

}


