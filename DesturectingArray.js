// Desturecting

// A short clean syntax to `unpack`;
// values from array;
// properties from objects;
// into distinct variable;


//to do this previously we used syntax like this.

const ary = [77,31,108,107];

const highScore = ary[2];
const lowestScore =ary[1];

console.log(highScore + " " + lowestScore);


// the nwer way to do this.

const ary = [77,31,108,107];

const [Shakir,Anum,Sunila,Shiza] = ary;
console.log("This is the roll no of Shakir : " +  Shakir);
console.log("This is the roll no of Anum : " +  Anum);


// use Rest Parameter inside of it.
const ary = [77,31,108,107];

const [Shakir,Anum,...everyOne] = ary;
console.log("This is the roll no of Shakir : " +  Shakir);
console.log("This is the roll no of Anum : " +  Anum);
console.log("The remaning students are :  " + everyOne);
