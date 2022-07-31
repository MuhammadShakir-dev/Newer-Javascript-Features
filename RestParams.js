// Rest Params looks like spread but it's not spread.
// Avalible inside of every function.
// arrguments doesn't work inside of an arrwo function for this reason we use rest parametres.

// lets practice some code.

function gdscResults(Lead,coLead,...Team) {
         console.log(`GDSC Lead is  : ${Lead}`);
         console.log(`GDSC Co Lead is  : ${coLead}`);
         console.log(`Core Team Members are : ${Team}`);
         
    
};

gdscResults("Wajid","Shakir","Mahfooz","Anum","Shiza","Ayesha","Ammad Qasim","Zaviyar");



// Lets take an other exapmle.

function sum(...nums){
    return nums.reduce((first,second) => first+second);
};

sum(1,2,3,4)
