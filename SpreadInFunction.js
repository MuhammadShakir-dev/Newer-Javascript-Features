// Note use Math.max and Math.min

//Spread Function spread the array into individual singel arguments 
// representation.

// ...   thi is the representation of spread function.

// now lets practice some code.

const numbers = [19.77,18.33,32.43,99.99,799,652,753,892,1765];
// find the maximum number.
console.log(numbers);

const maxNum = Math.max(...numbers);
console.log("Maximum Number");
console.log(maxNum);

//find the minimum number from this array.

const minNum = Math.min(...numbers);
console.log("Minimun Number");
console.log(minNum);
