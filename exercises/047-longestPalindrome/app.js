"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseString(string) { return string.split("").reverse().join(""); }
function isPalindrome(word) { return word.toLowerCase() === reverseString(word).toLowerCase(); }
function findLongestPalindrome(sentence) { let longest = ""; for (let start = 0; start < sentence.length; start++) {
    for (let end = start + 1; end <= sentence.length; end++) {
        const word = sentence.slice(start, end);
        if (word.length >= longest.length && isPalindrome(word))
            longest = word;
    }
} return longest; }
