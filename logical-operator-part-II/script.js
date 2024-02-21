// console.log("Logical Operator Part II")

// // &&

// console.log(true && true && true)

// // ||

// console.log(true || false || false)

// // -1

// console.log(!true)

const age = 19
const isOld = true

if (age > 18 && isOld) {
    console.log('You may enter')
} else {
    console.log('Go out')
}

const pages = 80
const isInteresting = true

if (pages < 90 && isInteresting) {
    console.log ('You can read')
}else {
    console.log('You cannot read')
}


const age2 = 20
const isCool= true

console.log(isCool && age > 18)


console.log ("book" && 1 && "truthy" && 999)

// It evaluates operands from left to right.
// It converts them to a boolean value.
// If the result is 
// True
// , it continues to the next value.
// If the result is
// False
// , it stops and returns the original value of that operand
// If all operands have been evaluated to true, it returns the last operand.

console.log("truthy" && 0 && "test" && 200)



// OR operator
console.log("" || 56 || "NaN" || 300)
// For each operand, it converts it to boolean.
// If the result is
// True
// , it stops and returns the original value of that operand.
// if all operands  have b een evaluated to falsy returns the last operand.
// In other words, a chain of OR
// "||"


// Not

console.log(!0)
console.log(!false)
console.log(!true)

// sometimes double not operator !! is used for converting a value to boolean type

// example

const value = true;

if (!!value) {
    console.log("the value is truthy") 
}else {
    console.log("the value is falsy")
}