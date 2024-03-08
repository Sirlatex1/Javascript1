console.log('Array For Each')

const names = ['ade', 'kunle', 'tayo', 'dele']
for (let i = 0; i <names.length; i++) {
    console.log(i, names [i])
}

// array for each syntax
// array for each method accept a callback function then it accept two params (value abnd index)


const names2 = ['ade', 'kunle', 'tayo', 'dele']
names2.forEach((names2, i)=> {
     console.log(names2, i)
})


const months = ['january', 'febuary', 'march', 'april']
months.forEach((month, i) => {
    console.log(month, i)
})


// important remarks on the use of this method

// use when?
// you want todo something with each element of the array


// don't use when?
// you want to stop or  break the loop when some conditions is true
// when you are working with async code


let sum = 0
const numbers = [45, 50, 78, 90]
numbers.forEach((number) => {
    sum += number
})

console.log(sum)


let sum2 = 0
const figures = [54, 89, 90, 87]
figures.forEach((figure) => {
    sum2 += figure
})

console.log(sum2)