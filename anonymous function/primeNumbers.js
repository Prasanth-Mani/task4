//Return all the prime numbers in an array


const filterPrimes = (function() {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return function(array) {
        return array.filter(isPrime);
    };
})();


const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primeNumbers = filterPrimes(numberArray);
console.log(primeNumbers);


