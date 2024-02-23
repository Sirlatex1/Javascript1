console.log('Function Return')

// every function in javascript return undefined unless otherwise specified. if we don't sayu what we want our function to return it always returns undefined   "dont" Unknown word.

const add = (a, b) => {
      return a * b;
};

const result = add (7, 8);
console.log(result)

// Another important rule of the return statement is that it stops function's excecution immediately  "function"
const divide = (b, c) => {
    return b / c;
    return b * c;
};

const result2 = divide (100, 20);
console.log(result2);

const test = () => {
    return true;
    return false;
};

const bool =test ();
console.log(bool);