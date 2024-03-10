console.log('Array includes')

// The array includes checks if an array contains a certain value haded to it and returns a boolean true / false.

const numbers = [1, 2, 3]
const result = numbers.includes(2)
console.log(result)

const animals = ['dog', 'cat','rabbit']
const pets = animals.includes('cat')
console.log(pets)

var bookshelf = [
    "Little woman",
    "Things fall apart",
    "wWomen of owu",
    "Pious wife"
];

if (bookshelf.includes('pious wife') === true) {
    console.log('The book you were looking for was found')
}else{
    console.log('Not yet found, sorry')
}

const nigeria = ['corruption', 'Thief', 'Pilagiarm']
if (nigeria.includes('corruption') === true ){
    console.log('Nigeria is bad')
}else{
    console.log('we are moving forward')
}