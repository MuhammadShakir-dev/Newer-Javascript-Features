// Lets talk about default function parameters .
// suppose that you dont pas any parameter or argumnent to your function then your take the value undefined.
// but if you set a default value then it will show you the default set value.

const hello = function(name = "M.Shakir", msg = "Hello"){
    return console.log(name + " " + msg)
};

console.log(hello());


// lets take an other example.

const rollDice = function(start=6){
    return Math.floor(Math.random() * start)+1; 
};

console.log(rollDice());


