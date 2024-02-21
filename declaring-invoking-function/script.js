console.log("declaring-invoking-function")

function name () {
    console.log('i am function')
}

//way odd declaring function

// 1- function declaration: it defines a  named function 

function name (parameters){
    console.log('i am function')
}

name()

function sayI (name){
      console.log(`hi, ${name}`)
}
 sayI (`Abdullateef`)

// 2 function expressions: it defines an anonymous function that is a function that has no name

let book = function () {
    console.log("i am a function expression")
}

book()


// 3  arrow function: arrow function is a shortyway of writing function expression

const name1 = () => {
    console.log("i am an arrow function")
}

name1 ()

const team = (players) => {
    console.log(`We have ${players} players in the team`)
}

team(25)

const alphabets = (alphabets) => {
    console.log(`there are ${alphabets} in the novel`)
}

alphabets(1000000)