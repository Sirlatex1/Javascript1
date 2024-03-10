console.log("Array find")

// Array find method : find an element in the array that matches a condition. most especially it returns the first value thatt satisfy the condition.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const value = numbers.find((number) => {
    return number > 5
})
console.log(value)

const states = ['Abia', 'Ogun', 'Ekiti', 'Osun', 'Ondo']
const findState = states.find((states) => {
    return states.startsWith("O")
})
console.log(findState)


const countries = ['Nigeria', 'Ghana', 'American']
const findCountry = countries.find((country) => {
    return country.startsWith('N')
})

console.log(findCountry)