/**
 * JavaScript Functions Demo
 * 
 * This program demonstrates different types of functions in JavaScript:
 * function declarations, expressions, arrow functions, and advanced concepts.
 * 
 * Author: Bishal Goutam
 * Date: October 16, 2025
 */

console.log("=== JavaScript Functions Demo ===\n");

// ===============================
// 1. FUNCTION DECLARATIONS
// ===============================

console.log("1. Function Declarations:");
console.log("-------------------------");

// Basic function declaration
function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}

console.log(greet("Alice"));

// Function with multiple parameters
function calculateArea(length, width) {
    return length * width;
}

console.log(`Area of rectangle (5x3): ${calculateArea(5, 3)}`);

// Function with default parameters
function introduce(name, age = 25, city = "Unknown") {
    return `My name is ${name}, I'm ${age} years old, and I live in ${city}.`;
}

console.log(introduce("Bob"));
console.log(introduce("Carol", 30));
console.log(introduce("Dave", 28, "New York"));

// Function with rest parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(`Sum of 1,2,3,4,5: ${sum(1, 2, 3, 4, 5)}`);
console.log(`Sum of 10,20: ${sum(10, 20)}`);

console.log();

// ===============================
// 2. FUNCTION EXPRESSIONS
// ===============================

console.log("2. Function Expressions:");
console.log("-----------------------");

// Anonymous function expression
const multiply = function(a, b) {
    return a * b;
};

console.log(`5 × 4 = ${multiply(5, 4)}`);

// Named function expression
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};

console.log(`Factorial of 5: ${factorial(5)}`);

// Function as a variable
let operation = function(x, y) {
    return x + y;
};

console.log(`Addition: ${operation(8, 3)}`);

// Reassigning function
operation = function(x, y) {
    return x - y;
};

console.log(`Subtraction: ${operation(8, 3)}`);

console.log();

// ===============================
// 3. ARROW FUNCTIONS
// ===============================

console.log("3. Arrow Functions:");
console.log("------------------");

// Basic arrow function
const square = (x) => x * x;
console.log(`Square of 6: ${square(6)}`);

// Arrow function with multiple parameters
const divide = (a, b) => a / b;
console.log(`15 ÷ 3 = ${divide(15, 3)}`);

// Arrow function with no parameters
const getCurrentTime = () => new Date().toLocaleTimeString();
console.log(`Current time: ${getCurrentTime()}`);

// Arrow function with block body
const gradeEvaluator = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
};

console.log(`Grade for 85: ${gradeEvaluator(85)}`);

// Arrow function with object return
const createPerson = (name, age) => ({
    name: name,
    age: age,
    isAdult: age >= 18
});

console.log("Person object:", createPerson("Emma", 22));

console.log();

// ===============================
// 4. HIGHER-ORDER FUNCTIONS
// ===============================

console.log("4. Higher-Order Functions:");
console.log("--------------------------");

// Function that takes another function as parameter
function processArray(array, callback) {
    const result = [];
    for (let item of array) {
        result.push(callback(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

// Using with different callback functions
const doubled = processArray(numbers, x => x * 2);
const squared = processArray(numbers, x => x * x);
const cubed = processArray(numbers, x => x * x * x);

console.log(`Original: [${numbers}]`);
console.log(`Doubled: [${doubled}]`);
console.log(`Squared: [${squared}]`);
console.log(`Cubed: [${cubed}]`);

// Function that returns another function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const multiplyByThree = createMultiplier(3);
const multiplyByTen = createMultiplier(10);

console.log(`\n7 × 3 = ${multiplyByThree(7)}`);
console.log(`7 × 10 = ${multiplyByTen(7)}`);

console.log();

// ===============================
// 5. CLOSURES
// ===============================

console.log("5. Closures:");
console.log("------------");

// Basic closure example
function outerFunction(x) {
    // Outer variable
    return function innerFunction(y) {
        return x + y; // Inner function has access to outer variable
    };
}

const addFive = outerFunction(5);
console.log(`Adding 5 to 3: ${addFive(3)}`);

// Counter closure
function createCounter() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => { count = 0; return count; }
    };
}

const counter = createCounter();
console.log(`\nCounter demo:`);
console.log(`Initial: ${counter.getValue()}`);
console.log(`After increment: ${counter.increment()}`);
console.log(`After increment: ${counter.increment()}`);
console.log(`After decrement: ${counter.decrement()}`);
console.log(`Current value: ${counter.getValue()}`);
console.log(`After reset: ${counter.reset()}`);

// Module pattern using closure
const mathModule = (function() {
    let pi = 3.14159;
    
    return {
        circleArea: (radius) => pi * radius * radius,
        circleCircumference: (radius) => 2 * pi * radius,
        getPi: () => pi
    };
})();

console.log(`\nCircle calculations (radius 5):`);
console.log(`Area: ${mathModule.circleArea(5).toFixed(2)}`);
console.log(`Circumference: ${mathModule.circleCircumference(5).toFixed(2)}`);

console.log();

// ===============================
// 6. FUNCTION SCOPE AND HOISTING
// ===============================

console.log("6. Function Scope and Hoisting:");
console.log("-------------------------------");

// Function hoisting demonstration
console.log("Calling hoisted function:", hoistedFunction());

function hoistedFunction() {
    return "I'm hoisted!";
}

// Variable vs function hoisting
console.log("hoistedVar before declaration:", hoistedVar); // undefined
var hoistedVar = "Now I have a value";
console.log("hoistedVar after declaration:", hoistedVar);

// Scope demonstration
let globalVar = "I'm global";

function scopeDemo() {
    let functionVar = "I'm in function scope";
    
    if (true) {
        let blockVar = "I'm in block scope";
        console.log("Inside block - can access all:");
        console.log(`  globalVar: ${globalVar}`);
        console.log(`  functionVar: ${functionVar}`);
        console.log(`  blockVar: ${blockVar}`);
    }
    
    console.log("Outside block - cannot access blockVar:");
    console.log(`  globalVar: ${globalVar}`);
    console.log(`  functionVar: ${functionVar}`);
    // console.log(`  blockVar: ${blockVar}`); // Would cause ReferenceError
}

scopeDemo();

console.log();

// ===============================
// 7. PRACTICAL EXAMPLES
// ===============================

console.log("7. Practical Examples:");
console.log("----------------------");

// Example 1: Calculator with multiple operations
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Cannot divide by zero",
    power: (base, exponent) => Math.pow(base, exponent),
    
    calculate: function(operation, a, b) {
        if (this[operation]) {
            return this[operation](a, b);
        }
        return "Invalid operation";
    }
};

console.log("Calculator Examples:");
console.log(`  10 + 5 = ${calculator.calculate('add', 10, 5)}`);
console.log(`  10 - 5 = ${calculator.calculate('subtract', 10, 5)}`);
console.log(`  10 × 5 = ${calculator.calculate('multiply', 10, 5)}`);
console.log(`  10 ÷ 5 = ${calculator.calculate('divide', 10, 5)}`);
console.log(`  2^8 = ${calculator.calculate('power', 2, 8)}`);

// Example 2: Array processing utilities
const arrayUtils = {
    // Filter even numbers
    filterEven: (arr) => arr.filter(num => num % 2 === 0),
    
    // Map to squares
    mapToSquares: (arr) => arr.map(num => num * num),
    
    // Reduce to sum
    reduceToSum: (arr) => arr.reduce((sum, num) => sum + num, 0),
    
    // Find maximum
    findMax: (arr) => Math.max(...arr),
    
    // Find minimum
    findMin: (arr) => Math.min(...arr),
    
    // Get statistics
    getStats: function(arr) {
        return {
            count: arr.length,
            sum: this.reduceToSum(arr),
            average: this.reduceToSum(arr) / arr.length,
            max: this.findMax(arr),
            min: this.findMin(arr)
        };
    }
};

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`\nArray processing for [${testArray}]:`);
console.log(`Even numbers: [${arrayUtils.filterEven(testArray)}]`);
console.log(`Squares: [${arrayUtils.mapToSquares([1, 2, 3, 4, 5])}]`);
console.log(`Sum: ${arrayUtils.reduceToSum(testArray)}`);
console.log(`Statistics:`, arrayUtils.getStats(testArray));

// Example 3: User validation system
function createValidator() {
    const validationRules = {
        email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        password: (password) => password.length >= 8,
        age: (age) => age >= 0 && age <= 150,
        name: (name) => name.length >= 2 && /^[a-zA-Z\s]+$/.test(name)
    };
    
    return {
        validate: function(field, value) {
            if (validationRules[field]) {
                return validationRules[field](value);
            }
            return false;
        },
        
        validateUser: function(user) {
            const results = {};
            for (let field in user) {
                results[field] = this.validate(field, user[field]);
            }
            return results;
        },
        
        isValidUser: function(user) {
            const validation = this.validateUser(user);
            return Object.values(validation).every(isValid => isValid);
        }
    };
}

const validator = createValidator();
const user1 = {
    name: "John Doe",
    email: "john@example.com",
    password: "mypassword123",
    age: 25
};

const user2 = {
    name: "X",
    email: "invalid-email",
    password: "123",
    age: -5
};

console.log("\nUser Validation:");
console.log("User 1 validation:", validator.validateUser(user1));
console.log("User 1 is valid:", validator.isValidUser(user1));
console.log("User 2 validation:", validator.validateUser(user2));
console.log("User 2 is valid:", validator.isValidUser(user2));

console.log("\n=== End of Functions Demo ===");