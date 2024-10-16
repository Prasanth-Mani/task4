//Return all the palindromes in an array


const isPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

const filterPalindromes = (array) => 
    array.filter(isPalindrome);


const stringArray = ["racecar", "hello", "level", "world", "madam", "12321", "notapalindrome"];
const palindromes = filterPalindromes(stringArray);
console.log(palindromes); 
