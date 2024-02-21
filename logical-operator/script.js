console.log("logical operator")

// logical operators are used to combine one or more conditions.

// OR || : with a double straight line, is known as OR operator. it checks whether At least on operands is a true valu\e

console.log(false || false || false || true)

// AND && : double ampersand, its known as AND operator. it can checks whether all the operands are truthy values

console.log(true && false && true)
console.log(true && true && true)

// NOT ! : its known as NOT operator, it reverse the boolean result of the condition, it return true to false and false to true

console.log(!true)
console.log(!false)

const age = 19
const isCool = true

if (age > 18 && isCool) {
    console.log('you may enter')
}else {
    console.log('go out')
}

const pages = 80
const isInteresting = true

if (isInteresting && pages < 90){
    console.log("you can read")
}else{
    console.log("stop reading")
}



const age1 = 50
const isCool1 = true
console.log(isCool1 && age1 > 40)