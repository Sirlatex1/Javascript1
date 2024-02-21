console.log("Function intro")

//A javascript function is a block of code designed to perform a particular task. Function are main bulding blocks of any program, they allow code to be called many times without repitition.


// declaration of function (defining a function)

function square (number){
    console.log("i am here for you")
    return number * number
}
// function calling 

const result = square(10)
console.log(result)

//Example 2
function add (x){
    console.log ("its correct")
    return x + x
}

const result1 = add (20)
console.log(result1)

// Example 3

function divide (x, y) {
    console.log("divide the two numbers by itselfs")
    return x / y
}

const result3 = divide (1000, 500)
console.log(result3)


// Example 4

function sub (a, b){
    console.log("subtract the two number")
    return a - b
}

const result4 = sub (50, 20)
console.log(result4)

//declaring a function does not execute it. defining a function simply means naming and specifying what to do when the function is called