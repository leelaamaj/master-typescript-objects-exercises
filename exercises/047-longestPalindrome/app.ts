function reverseString(string:string):string{return string.split("").reverse().join("");}
function isPalindrome(word:string):boolean{return word.toLowerCase()===reverseString(word).toLowerCase();}
function findLongestPalindrome(sentence:string):string{let longest="";for(let start=0;start<sentence.length;start++){for(let end=start+1;end<=sentence.length;end++){const word=sentence.slice(start,end);if(word.length>=longest.length && isPalindrome(word))longest=word;}}return longest;}
export {};
