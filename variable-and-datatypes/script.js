
//data types
// there are few types of value, called data types.

// we can seperates data types into two groups

// 1. Primitive data types:
// a. String: "welcome to string"
// b. Number: 1, 2, 3, 4
// c. Boolean: Boolean represent a logical entity and can only have two values; true or false
// d. Null: this types has only one value: null
// e. Undefined: A variable that has not been assigned a value ia undefined
// f. Symbol: used as an indentifier for object properties

// 2. complex data types
// Object: is the most important data types and forms the building of modern javascript

// STRING as a datatype
// A string ia a datatype used to represent text
const exampleString = "Hello world"
console.log(typeof exampleString)

// types pf strings

// 1. single quotes

const singleQuote ='single quote'
console.log(singleQuote)

// 2 Double quotes
const doubleQuote = "double quote"
console.log(doubleQuote)
// note: there is no difference between double and single quote, they are also called simple string, they are not complex

// backticks =``
const backticks = `hello!!, ${doubleQuote}, ${singleQuote}`
console.log(backticks)

// note: backticks is a complex string because it provide extended functionality that allows us to embed variable and expressions into a string by wrapping them into a dollar sign $ and {}

const firstName = 'sodiq'
const lastName = 'abdulmuhmin'
const name = `${firstName}, ${lastName}`
console.log(name)

const age = 20
const name1 = `my name is sodiq i am ${age} years old`
console.log(name1)

const add = `2 + 2`
console.log(add)

const add2 = `${2+3}`
console.log (typeof add2)


//excerise

const name3 = "my name is abdullateef"
const school = "i attended ads grammer school ilobu osun state"
const town = "i am a native of igbo ora"

const data = `${name3}, ${school}, ${town}`
console.log(data)