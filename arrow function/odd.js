//Print odd numbers in an array


let res = ()=>{
    let numbers = [1,2,3,4,5,6,7,8,9]
    const odds = numbers.filter((num) => num % 2 === 1);
    console.log(odds);
}
res()