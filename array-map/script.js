console.log('Array Map')

// Difference between Array.map() and Array.forEach() is that the map () method allocates memory in order to store and return values. While the forEach() method does not allocate memory so it doesn't store any returned values.


// The for each method also allow for a callback function that will allow you to change the original array, while the map methos will instead return a new array while leaving the original one in its original state


const inventory = [
    {name: 'egg', price: 20},
    {name: 'yam', price: 7},
    {name: 'rice', price: 9},
    {name: 'bread', price: 24},
]
console.log(inventory)

const names = inventory.map((item) => item.name)
const prices = inventory.map((item) => item.price)
console.log(names)
console.log(prices)



// exercise
const infos = [
    {name: 'kola', age:20, origin: 'osun'},
    {name: 'tunji', age:28, origin: 'ogun'},
    {name: 'bola', age:22, origin: 'oyo'},
    {name: 'deolu', age:21, origin: 'lagos'},
    {name: 'bode', age:23, origin: 'delta'},
]

console.log(infos)

const name = infos.map((item) => item.name)
const age = infos.map ((item)=> item.age)
const origin = infos.map((item)=> item.origin)
console.log(names)
console.log(age)
console.log(origin)