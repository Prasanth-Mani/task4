//Sum of all numbers in an array


const sumArray = function(numbers){
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
};

const numberArray = [1, 2, 3, 4, 5];
sumArray(numberArray)

