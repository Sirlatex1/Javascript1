console.log('Function Return')


// Every function in javascript returns undefined unless otherwise specified. if we dont say what we want our function to return it always undefined.

const add = (a, b) => {
    return a + b;
};

const result = add (7, 8);
console.log(result)


// Another important role of the return statement is that it stop function's execution immediately.

const divide = (b, c) => {
    return b / c
    return b * c
}

const return2 = divide (100, 20)
console.log(result)

const test = () => {
    return true;
    return false;
};
const bool = test ()
console.log(bool)