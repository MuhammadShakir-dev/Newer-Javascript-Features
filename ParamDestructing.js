// Param Destructing works alot in objects.


const student = {
    
    name: "Muhammad Shakir",
    city : "Karachi",
    gender : "Male",
    Age : 21,
    department : "BS=Software Engineering",
    Semester : "5th Semester",
    Supply : 1 ,
    
}


function user(student){
    const{name,city} = student;
    return `${name} ${city}`;
}


user(student)
