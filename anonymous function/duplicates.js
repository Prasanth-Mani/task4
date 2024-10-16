// Remove duplicates from an array


const removeDuplicates = (function() {
    return function(array) {
        return [...new Set(array)];
    };
})();


const numberArray = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueArray = removeDuplicates(numberArray);
console.log(uniqueArray);
