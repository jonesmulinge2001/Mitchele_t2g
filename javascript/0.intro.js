
// variables in js
let course = 'Computer Science'; // block scopped
const rate = 0.1; // block scopped but cannot be reasigned or redecleared
// console.log(course);

// data types
// 1. primitive types

// string, number, boolean, undefined, null
let name = 'John'; // single quote string
let message = "Hello World"; // double quote string

let age = 30; // number (int)
let price = 55.5 // number(float)
let isApproved = true; // boolean
let hasCompletedCourse = false; // boolean
let firstName = undefined; // undefined
let lastName = null; // null (intentionally empty)

// 2. reference types
// object, array, function

// object (has key:value pair)
let person = {
    name: 'John',
    age: 30
};

let institution = {
    name: 'Chuka Uni',
    isPublic: true,
    population: 25000,
    date_of_establishment: 2013,
}

// accessing items in an object (dot notation or [] notation)
console.log(institution.name); // dot notation
console.log(institution['population']);

// array (are 0 indexed)
let colors = ['red', 'green', 'blue'];
console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors[2]); // blue
console.log(typeof colors);

// function
function greet() {
    let myName = 'Mitchele';
    let message = `Hello ${myName}`; // string interpolation
    console.log(message);
}

greet(); // calling the function


// checking data types
console.log(typeof institution);
console.log(typeof person);
console.log(typeof greet);
console.log(typeof hasCompletedCourse);


// operators in js
// +, -, *, /, %, **, ++, --, +=, -=, *=, /=, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !, ??, ?:, typeof, instanceof, in, delete, void, yield, yield*, await, async, function*, function, class, const, let, var, if, else, switch, case, default, for, while, do, break, continue, try, catch, finally, throw, debugger, with, new, this, super, return, debugger, import, export, default, extends, static, get, set, async, await, from, of, as, get, set, meta, target, arguments, eval, uneval, isFinite, isNaN, parseFloat, parseInt, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, escape, unescape, Object, Function, Boolean, Symbol, Error, EvalError, InternalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, Array, String, Number, Math, Date, RegExp, Map, Set, WeakMap, WeakSet, Proxy, Reflect, Promise, JSON, Intl, WebAssembly, console


// arithmetic operators
let x = 10;
let y = 3;

// console.log(x + y); // 13
// console.log(x - y); // 7
// console.log(x * y); // 30
// console.log(x / y); // 3.3333333333333335
// console.log(x % y); // 1
// console.log(x ** y); // 1000

// increment and decrement operators
console.log(++x); // 11
console.log(--x); // 10

//assignment operators
x += 5; // x = x + 5(x = 10 + 5 => x = 15)
console.log(x); // 15

x -= 5; // x = x - 5
console.log(x); // 10

x *= 5; // x = x * 5
console.log(x); // 50

x /= 5; // x = x / 5
console.log(x); // 10

// comparison operators
console.log(x > 1); // true
console.log(x >= 1); // true
console.log(x < 1); // false
console.log(x <= 1); // false
console.log(x == 1); // false (weak equality check )
console.log(x != 1); // true ( weak not check)
console.log(x === 1); // false (strict equality check )
console.log(x !== 1); // true (strict not check )


// logical operators
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

// examples
let isActive = true;
let isLoggedIn = false;

let eligibleForDiscount = (isActive && isLoggedIn);
console.log(eligibleForDiscount); // false

let eligibleForDiscount2 = isActive || isLoggedIn;
console.log(eligibleForDiscount2); // true

// control flow statements


// if statement
let myAge = 18;

if (age >= 18) {
    console.log("You are eligible to vote");
}

// else if statement
let myAge2 = 17;

if (age >= 18) {
    console.log("You are eligible to vote");
} else if (age >= 16) {
    console.log("You are eligible to drive");
} else {
    console.log("You are not eligible to vote or drive");
}

// for loop
for (let i = 0; i < 10; i++) {
    //console.log(i);
}

// for of loop (works with arrays)

let myArray = [1, 2, 3, 4, 5];
for (let element of myArray) {
    // break and continue
    if(element === 3) break;
    console.log(element);
}


// while loop
let i = 0;
while (i < 10) {
    console.log(`The value of i is cureently at ${i}`)
    i++;
}

// forEach loop (works with arrays)
let myArray2 = [1, 2, 3, 4, 5];
myArray2.forEach(element => {
    console.log(element);
})


// switch statement
let day = "Friday";
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    default:
        console.log("Today is not Monday or Tuesday");
}

// ternary operator
let studentAge = 18;
let canVote = age >= 18 ? 'Can Vote' : 'Cannot Vote';
console.log(canVote);


// functions
function logIn() {
    let message = 'Logging in';
    console.log(message);
}

logIn();


// function with parameters
function logIn2(userName) {
    let message = `Logging in ${userName}`;
    console.log(message);
}

logIn2('Mitchele');