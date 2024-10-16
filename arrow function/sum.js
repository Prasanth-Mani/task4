//Sum of all numbers in Array


const sumArray = (array) => 
    array.reduce((accumulator, current) => accumulator + current, 0);


const numberArray = [1, 2, 3, 4, 5];
const totalSum = sumArray(numberArray);
console.log(totalSum); 
