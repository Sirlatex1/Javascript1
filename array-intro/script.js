console.log('Array Intro')

// In programming, quite often we will need an ordered collection, where we have a 1st, 2nd, 3rd element and so on. For example, we need that to store a list of something: users, items, elements etc


// declaration of array
const months = ["january", 'febuary', 'march', 'april']
console.log(months)

// array element are numbered, starting from 0
// we can get an element by its number in a square barcket

const books = ['pious wife', 'things fall apart', 'master return', 'futile endeavor']
console.log(books [3])

// we can relace an element in array
const books1 =  ['piouse wife', 'things fall apart', 'master return', 'futile endeavor']
books1[0] = "woman of owu"
console.log(books1)

// add an element into an array
const books2 =  ['piouse wife', 'things fall apart', 'master return', 'futile endeavor']

books2[4] = 'woman of owu'
console.log(books2)

// array can store elements of any type

const values = ['apple', {name: 'ade',}, true, 67, ()=>{}]
console.log(values)

// the total number of an array is its length

const names = ['abdullah', 'soliu', 'khadijah', 'naheem', 'anathe', 'tijani']
console.log(names.length)

// You're often going to find yourself needing to loop through all the elements of an array. That's where the for loop we've learned comes in handy:

const names1 = ['abdullah', 'soliu', 'khadijah', 'naheem', 'anathe', 'tijani']
for (i = 0; i < names1.length; i++) {
    console.log(names1[i])
}
