// Destructing Objects in javascript.
// just like distructing arrays work for array they are working for objects.
//  And it is so helpfull in extracting values from objects.


const student = {
    
    name: "Muhammad Shakir",
    city : "Karachi",
    gender : "Male",
    Age : 21,
    department : "BS=Software Engineering",
    Semester : "5th Semester",
    
}
const {name,city,department,Semester} = student;



// LETS HAVE A PRACTICE WITH UNDEFINED VALUES.


const student = {
    
    name: "Muhammad Shakir",
    city : "Karachi",
    gender : "Male",
    Age : 21,
    department : "BS=Software Engineering",
    Semester : "5th Semester",
    Supply : 1 ,
       
}


const {name,city,department,semester,Supply = "N/A"} = student;


const student = {
    
    name: "Muhammad Shakir",
    city : "Karachi",
    gender : "Male",
    Age : 21,
    department : "BS=Software Engineering",
    Semester : "5th Semester",
    Supply : 1 ,
       
}


const {name,city,department,semester,Supply = "N/A"} = student;

