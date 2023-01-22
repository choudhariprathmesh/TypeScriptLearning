"use strict";
exports.__esModule = true;
exports.isPalindrome = void 0;
/**
* @returns true if the input string is a palindrome
*/
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
