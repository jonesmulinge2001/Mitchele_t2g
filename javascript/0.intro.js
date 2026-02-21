
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
// console.log(institution.name); // dot notation
// console.log(institution['population']);




// arrays (are 0 indexed)
let colors = ['red', 'green', 'blue'];
// console.log(colors[0]); // red
// console.log(colors[1]); // green
// console.log(colors[2]); // blue
// console.log(typeof colors);

// function
function greet() {
    let myName = 'Mitchele';
    let message = `Hello ${myName}`; // string interpolation
    //console.log(message);
}

greet(); // calling the function


// checking data types
// console.log(typeof institution);
// console.log(typeof person);
// console.log(typeof greet);
// console.log(typeof hasCompletedCourse);


// objects in js (key: value pair) each key is unique

let shoppingCart = {
    bread: 70,
    milk: 60,
    office_chair: 5000
}

let student = {
    course: 'Computer Science',
    name: 'Daniel',
    age: 20,
    isStudent: false,
    grades: [56,78,65,78]
}

// accessing items in an object (dot notation  and bracket notation[])
// we use the keys to access the values

// dot notation
// console.log(shoppingCart.office_chair);
// console.log(shoppingCart.milk);

// console.log(shoppingCart['bread']);
// console.log(shoppingCart['office_chair']);


// methods associated with objects
// modify objects => adding new item
// shoppingCart.lotion = 120;
// console.log(shoppingCart.lotion);

//assign explore more on object methods


function getAverage() {
    let studentGrades = student['grades'];
    // iterate thro' the studentGrades reduce()
    let avg = studentGrades.reduce((sum, grade) => sum + grade, 0) / studentGrades.length;
    console.log(`The average grade of ${student.name} is ${avg}`);
}

// call the function
getAverage();





// operators in js
// +, -, *, /, %, **, ++, --, +=, -=, *=, /=, ==, ===, !=, !==, >, <, >=, <=, &&, ||, !

let number1 = 8;
let number2 = 12;

// arithmetic operators
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 * number2);
console.log(number1 ** number2);
console.log(number1 % number2);

console.log(++number1);






//assignment operators (+=, -=, *=, /=,)
number2+=4 // number2 = number2 + 4 => 12 = 12 + 4 (16)
let a = 3;
let b = 5;
b+=5; // 5 + 5 = 10
console.log(b);
a-=2; // 3 - 2 = 1
console.log(a);



// comparison operators ( ==, ===, !=, !==, >, <, >=, <=, )
let price2 = 100; // number
let price3 = '100'; // string
console.log(price2 == price3); // true (loose equality check )
console.log(price2 === price3); // false ( strict equality check )
console.log(price2 != price3); // loose not equality check
console.log(price2 !== price3); // strict not equality check
console.log(price2 > price3);
console.log(price3 < price2);
console.log(price3 >= price2);
console.log(price2 <= price3);



// logical operators (&&, ||, ! )
let hasGoodCredit = false;
let hasHighIncome = true;
let isAGoodEmployee = true;

// true && true = true
// true && false = false
// true || false = true
// true || true = true

if(hasGoodCredit || !isAGoodEmployee) { // false
    console.log('You can take a loan');
}
else {
    console.log('Either Your credit or income is low');
}



// control flow statements
// if statement 

let email = 'dev@gmail.com';
let password = 1234;

if(password === 1222 && email === 'dev@gmail.com') {
    console.log('Login Successfull');
}
else if((password === 1234 || password === 1444) && email === 'dev@gmail.com') {
    console.log('Login Successfull');
}

else {
    console.log('Check your login credentials')
}



// for loop 
// for(initialization; condition_check; updation)
let startDigit = 0;
for(startDigit = 0; startDigit <= 20; startDigit++) {
    console.log(`Start Digit is now at ${startDigit}`);
}


// for of loop (works with arrays)
let posts = [
    {id:1, title: 'Attending hackathon', viewsCount: 122, likesCount: 500, commentsCount: 56, category: 'Educational'},
    {id:2, title: 'My birthday', viewsCount: 656, likesCount: 1000, commentsCount: 1220, category: 'Social'},
    {id:3, title: 'Happy new year', viewsCount: 4566, likesCount: 6767, commentsCount: 885, category: 'Social'},
    {id:4, title:'Semester begins', viewsCount: 445, likesCount: 567, commentsCount: 987, category: 'Educational'},
]
for(let post of posts) {
    //console.log(post);
}

let educationalPosts = posts.filter(cat => cat.category === 'Educational');
console.log(educationalPosts);



let names = ['Samuel', 'Daniel', 'Caroline', 'Mev', 'PK'];
names.push('Riz');
let accessedName = names.filter(name => name === 'PK');
console.log(accessedName);
if(names.includes('Riz')) {
    console.log('The name was found the names array');
}
else {
    console.log('The name was not found in the array');
}




// while loop
// let somevalue = value;
// while(condition) {
// logic
// updation
// }

let passMark = 80;
while(passMark >= 80 && passMark <= 100) {
    console.log('You have passed');
    passMark++;
}



// forEach loop (works with arrays)
let tasks = ['Walking', 'Gym', 'Singing', 'Coding'];
tasks.forEach(task => {
    if(task === 'Gym') {
        console.log('Wow, gym was found');
    }
});


// switch statement
// let someValue = value
// switch(someValue) {
// case value:
// logic
// break;



/// default;

//}


let day = 'Wednesday'; // reference
switch(day){
    case 'Tuesday':
        console.log('Today is on Tuesday');
        break;
    
    case 'Wednesday':
        console.log('Today is on Wednesday');
        break;

    default:
        console.log('The End');
}


// ternary operator










// functions
function functionName() {
    // some logic here
}


function greet(){ 
    let myName = 'Riz';
    let message = `hey ${myName}`;
    console.log(message);
}

greet();

// Function Expression
// explore more on this....




// function with parameters
function calculateAverage(val1, val2) {
    let avg = (val1 + val2) / 2;
    console.log(avg)
}
calculateAverage(24, 45);

// Function Parameters and Arguments
function register(email, password = '00rty') {
    let genericResponse = `Hey (${email}) you have logged in successfully with (${password})`;
    console.log(genericResponse);
}
register('nextjl10101@gmail.com'); // calling the function with arguments


// Arrow Functions (Modern JavaScript)

const isAMember = () => {
    console.log('Ensure you are a member');
}

isAMember();









// Exercise 2: Calculator Function
// Create a function that takes two numbers and an operator (+, -, *, /) and returns the result:
function calculate(num1, num2, operator) {
    // Your code here
}





// Exercise 3: Grade Checker
// Write a function that takes a score and returns a letter grade:
// - 90-100: A
// - 80-89: B
// - 70-79: C
// - 60-69: D
// - Below 60: F








// Exercise 4: Loop Practice
// Write a function that prints all even numbers from 1 to a given number:
// ```javascript
function printEvenNumbers(maxvalue) {
    // Your code here
}