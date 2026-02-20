//1. reverse a number
function reverseNumber(x){
    const reversed = parseFloat(x.toString().split('').reverse().join(''));
    return reversed * Math.sign(x);
}

// const x = 32243;
// console.log(reverseNumber(x));

//2.  palindrome string
function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = cleanStr.length - 1;
    while (left < right){
        if (cleanStr[left] !== cleanStr[right]){
            return false
        }
        left ++;
        right --;
    }
    return true
}

// console.log(isPalindrome("madam"));

//3. generates all combinations of a string.
function getAllComb(str){
    let combinations = [];
    for (let i = 0; i < str.length; i ++){
        for (let j = 1; j <= str.length; j++){
            combinations.push(str.substring(i,j));
        }
    }
    return combinations.join(', ');
}

// const result = getAllComb('dog');
// console.log(result);

//4.  alphabetical order
function alphabeticalOrder(str){
    return str.split('').sort().join('');
}

const example1 = 'webmaster';
// console.log(alphabeticalOrder(example1));

//5. converts the first letter uppercase
function uppercaseFirstLetter(str) {
  return str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}

const example2 = 'the quick brown fox';
// console.log(uppercaseFirstLetter(example2));

//6. find the longest word
function findLongest(str){
    const words = str.split(' ');
    let longestWord = "";
    for (let i = 0; i < words.length; i ++){
        if (words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}

// const example3 = 'Web Development Tutorial';
// console.log(findLongest(example3));

//7. count vowel
function countVowel(str){
    const vowel = "aeiouAEIOU";
    let count = 0;
    for (let ch of str){
        if (vowel.includes(ch)){
            count ++;
        }
    }
    return count;
}

// console.log(countVowel(example2));

//8. isPrime
function isPrime(num){
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++){
        if(num % i == 0)return false;
    }
    return true;
}

// console.log(isPrime(10));
// console.log(isPrime(7));

//9. getType
function getType(value){
    let typeSet = new Set(['object', 'boolean', 'function', 'number', 'string', 'undefined']);
    let type = typeof(value);
    if (typeSet.has(type)) return type;
}

// console.log(getType(10));
// console.log(getType(example2));

//10. identity matrix
function identityMatrix(n){
    let matrix = [];
    for (let i = 0; i < n; i++){
        let row = [];
        for (let j = 0; j < n; j++){
            row.push(i == j ? 1 : 0);
        }
        matrix.push(row);
    }
    return matrix;
}

// console.log(identityMatrix(6));


// 11. Second lowest and second greatest
function secondLowestGreatest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
    return [uniqueSorted[1], uniqueSorted[uniqueSorted.length - 2]];
}

// console.log(secondLowestGreatest([1,2,3,4,5]))

// 12. Check if perfect number
function isPerfect(num) {
    let temp = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) temp += i;
    }
    return temp == num && temp !== 0;
}

// console.log(isPerfect(6));
// console.log(isPerfect(28));

// 13. Compute factors of a positive integer
function getFactors(n) {
    let factors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) factors.push(i);
    }
    return factors;
}

// console.log(getFactors(9));

// 14. Convert amount to coins
function amountToCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

// console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

// 15. Compute b^n, b and n from user
const readline = require("readline");

function userPower() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the base (b): ", (base) => {
        rl.question("Enter the exponent (n): ", (exponent) => {
            let result = Number(base) ** Number(exponent);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
}

// userPower();

// 16. Extract unique characters
function uniqueChars(str) {
    return [...new Set(str)].join('');
}

// console.log(uniqueChars(example2));

// 17. Number of occurrences of each letter
function countOccurrences(str) {
    let counts = {};
    str.replace(/\S/g, (l) => { counts[l] = (counts[l] || 0) + 1; });
    return counts;
}

// console.log(countOccurrences(example2))

// 18. Binary search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const arr = [1,2,3,4,5,6,7,8,9]
const target = 4
// console.log(binarySearch(arr, target))

// 19. Elements larger than a number
function largerThan(arr, num) {
    return arr.filter(val => val > num);
}

// console.log(largerThan(arr, 4));


// 20. Generate random ID
function generateId(len) {
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = "";
    for (let i = 0; i < len; i++) {
        res += charList.charAt(Math.floor(Math.random() * charList.length));
    }
    return res;
}
// console.log(generateId(10));

// 21. All possible subsets of fixed length
function getSubsets(arr, len) {
    let result = [];
    function helper(start, current) {
        if (current.length == len) {
            result.push([...current]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            helper(i + 1, current);
            current.pop();
        }
    }
    helper(0, []);
    return result;
}

// console.log(getSubsets([1,2,3], 2));

// 22. Count occurrences of a letter
function countLetter(str, letter) {
    return str.split('').filter(l => l == letter).length;
}

// console.log(countLetter(example2, 'd'));

// 23. First not repeated character
function firstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

// console.log(firstUniqueChar('absbsbadjad'))

// 24. Bubble Sort
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// console.log(bubbleSort([213,12312,3213,23,215,4257,5,4332,656,72]));

// 25. Longest country name
function longestCountry(countries) {
    return countries.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

// console.log(longestCountry(["Australia", "Germany", "United States of America"]));

// 26. Longest substring without repeating characters
function longestSubstrNoRepeats(str) {
    let max = "", current = "";
    for (let char of str) {
        let index = current.indexOf(char);
        if (index > -1) current = current.substring(index + 1);
        current += char;
        if (current.length > max.length) max = current;
    }
    return max;
}

// console.log(longestSubstrNoRepeats("adcdaer"));

// 27. Longest palindromic substring
function longestPalindrome(s) {
    let max = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.slice(i, j);
            if (sub.length > max.length && sub == sub.split('').reverse().join('')) {
                max = sub;
            }
        }
    }
    return max;
}

// console.log(longestPalindrome("abracadabra"));
// console.log(longestPalindrome("bananas"));

// 28. Pass function as parameter
function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    const name = "Shawn";
    console.log(callback(name));
}

// processUserInput(greet);

// 29. Get function name
function getFunctionName(fn) {
    return fn.name;
}

// console.log(getFunctionName(greet))