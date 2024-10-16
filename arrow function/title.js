//Convert all the strings to title caps in a string array


const titleCaseArray = (array) => 
    array.map(str => 
        str.split(' ').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join(' ')
    );

const stringArray = ["hello world", "this is a test", "javascript programming"];
const titleCasedArray = titleCaseArray(stringArray);
console.log(titleCasedArray);

