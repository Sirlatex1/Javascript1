console.log('searching-for-sub-string')

// there are multiple ways of looking for a substring in a given string

// indexOf
const hobbies = 'i love html, css, javascript'
const firstIndex = hobbies.indexOf('javascript')
console.log(firstIndex)

// lastIndexOf
const items = 'books, pens biro pencil'
const last = items.lastIndexOf('pencil')
console.log(last)

const subjects = 'maths, physics, chemistry, biology'
const include1 = subjects.includes('physics')
console.log(include1)

// StartstWith
const start = 'Be ware of 419'
const checkStart = start.startsWith('B')
console.log(checkStart)

// endsWith

const end = 'come over'
const checkEnd = end.endsWith('r')
console.log(checkEnd)