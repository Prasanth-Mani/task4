//Rotate an array by k times


const rotateArray = (function() {
    return function(array, k) {
        const n = array.length;
        k = k % n; 
        if (k < 0) k += n; 
        return [...array.slice(n - k), ...array.slice(0, n - k)];
    };
})();


const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateArray(array, k);
console.log(rotatedArray);
