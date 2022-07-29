// now lets take a look on spread in object literals.

// Used to copy the property of one object into a new object. ahh we can copy objects, we can combine objects, we can add objects. 
// lets take some exapmles for better understanding.

const student = {
    Name : "Muhammad Shakir",
    Age  : 21,
    Gender : "Male",
}

const socialDetails = {
    email : "chaudhryshakir672gmail.com",
    github : "MuhammadShakir-dev",
}

const residence = {
    city : "Karachi",
    country : "Pakistan",
};

const allStudentDetails = {...student, ...socialDetails, ...residence};

console.log(allStudentDetails);


