console.log("Truthy and Falsy Values")

// in javascript we also have something called truthy and falsy values.
// Truthy expressions always evaluate to boolean true
// And falsy evaluate to boolean value false

// The easiest way to understand the truthy and falsy value is to memorise the falsy values which six in number

// 1 false 2- 0 3- null 4- undefined, 5- NaN 6- ""

if (false) {
    console.log("come in")
}else {
    console.log("go out")
}

const dogs = 8

if(dogs) {
    console.log('you have $[dogs] dogs')
}else {
    console.log("you have no dogs")
}

const cats = 10

if (cats < 11) {
   console.log('you have $[cats]') 
}else{
    console.log('you have no cats')
}

if (false) {
   console.log("am in")
}else{
    console.log("am out")
}

if (0) {
    console.log("am in")
}else{
    console.log("am out")
}

if (null) {
    console.log("am in")
} else {
    console.log("am out")
}

if (undefined) {
    console.log("am in")
} else {
    console.log("am out")
}

if (NaN) {
    console.log("am in")
} else{
    console.log("am out")
}

if ("") {
    console.log("am in")
} else {
    console.log("am out")
}



