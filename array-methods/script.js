console.log('Array Methods')

// Aside from containing variables at indexes, an array contains varirety of premade functions with which you can manipulate it's data, like adding or removing elements at certain positions! Let's take a look at a few of the most basic ones right now.

// Array push function adds a new element, containing the entered variable, to the end of the array.

const names = ['abdullateef', 'habibullah', 'abdullah', 'anathe']
names.push('khadijah')
console.log(names)

// array pop function on the other hand, does quite the opposite, deleting the last element of an array

const names1 = ['abdullateef', 'habibullah', 'abdullah', 'anathe']
names1.pop()
console.log(names1)

// // array shift works almost exactly like pop, with the major difference. it deletes the first value in the array and move the rest backwards!

const names2 = ['abdullateef', 'habibullah', 'abdullah', 'anathe']
names2.shift()
console.log(names2)

// unshift adds a new value to the start of an array
const names3 = ['abdullateef', 'habibullah', 'abdullah', 'anathe']
names3.unshift('abdulmuhmin')
console.log(names3)