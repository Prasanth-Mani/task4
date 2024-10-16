//Return all the palindromes in an array


const filterPalindromes = (function() {
    const isPalindrome = (str) => {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanedStr === cleanedStr.split('').reverse().join('');
    };

    return function(array) {
        return array.filter(isPalindrome);
    };
})();


const stringArray = ["racecar", "hello", "level", "world", "madam", "12321", "notapalindrome"];
const palindromes = filterPalindromes(stringArray);
console.log(palindromes); 


