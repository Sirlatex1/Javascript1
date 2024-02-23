console.log('parameter vs argument')

// params are used when defining a function, they are the names created in the function definition, params is like a variable that is only meaningful inside the function.
const sayI = (name, age) => {
    console.log('${name}, is ${age} years old')
};
// arguments are real value passed when making a function call
sayI ("adekunle", 18); "adekunle";

const student = (name, info)=> {
    console.log('${name} is a ${info} of dltafrica') 

}

student ('toyyib', 'cohort')