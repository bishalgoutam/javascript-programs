/**
 * JavaScript Hoisting and Variable Behavior Demo
 * 
 * This program demonstrates variable hoisting, temporal dead zone,
 * and different behaviors of var, let, and const.
 * 
 * Author: Bishal Goutam
 * Date: October 16, 2025
 */

console.log("=== JavaScript Hoisting and Variable Behavior Demo ===\n");

// ===============================
// 1. VAR HOISTING
// ===============================

console.log("1. VAR Hoisting:");
console.log("----------------");

console.log("Before declaration - hoistedVar:", hoistedVar); // undefined (not error)

var hoistedVar = "I am hoisted!";

console.log("After declaration - hoistedVar:", hoistedVar);

// Function hoisting
console.log("\nFunction Hoisting:");
console.log("hoistedFunction():", hoistedFunction()); // Works due to hoisting

function hoistedFunction() {
    return "I'm a hoisted function!";
}

console.log();

// ===============================
// 2. LET AND CONST - TEMPORAL DEAD ZONE
// ===============================

console.log("2. Let and Const - Temporal Dead Zone:");
console.log("--------------------------------------");

// Uncommenting the line below would cause ReferenceError
// console.log(letVar); // ReferenceError: Cannot access 'letVar' before initialization

let letVar = "I'm a let variable";
console.log("letVar:", letVar);

// Uncommenting the line below would cause ReferenceError
// console.log(constVar); // ReferenceError: Cannot access 'constVar' before initialization

const constVar = "I'm a const variable";
console.log("constVar:", constVar);

console.log();

// ===============================
// 3. SCOPE DIFFERENCES
// ===============================

console.log("3. Scope Differences:");
console.log("--------------------");

function scopeComparison() {
    console.log("Inside function:");
    
    // var is function-scoped
    if (true) {
        var varInBlock = "var in block";
        let letInBlock = "let in block";
        const constInBlock = "const in block";
        
        console.log("  Inside block - var:", varInBlock);
        console.log("  Inside block - let:", letInBlock);
        console.log("  Inside block - const:", constInBlock);
    }
    
    console.log("\n  Outside block - var:", varInBlock); // Works
    // console.log("  Outside block - let:", letInBlock); // ReferenceError
    // console.log("  Outside block - const:", constInBlock); // ReferenceError
}

scopeComparison();

console.log();

// ===============================
// 4. VARIABLE REASSIGNMENT
// ===============================

console.log("4. Variable Reassignment:");
console.log("-------------------------");

// var can be redeclared and reassigned
var varExample = "Original var";
console.log("Original var:", varExample);

var varExample = "Redeclared var"; // No error
console.log("Redeclared var:", varExample);

varExample = "Reassigned var";
console.log("Reassigned var:", varExample);

// let can be reassigned but not redeclared
let letExample = "Original let";
console.log("\nOriginal let:", letExample);

// let letExample = "Redeclared let"; // SyntaxError if uncommented
letExample = "Reassigned let"; // This works
console.log("Reassigned let:", letExample);

// const cannot be reassigned or redeclared
const constExample = "Original const";
console.log("\nOriginal const:", constExample);

// const constExample = "Redeclared const"; // SyntaxError if uncommented
// constExample = "Reassigned const"; // TypeError if uncommented

console.log();

// ===============================
// 5. OBJECT AND ARRAY MUTATIONS WITH CONST
// ===============================

console.log("5. Object and Array Mutations with const:");
console.log("-----------------------------------------");

// const with objects - the reference is constant, not the content
const constObject = {
    name: "John",
    age: 25
};

console.log("Original constObject:", constObject);

// This works - modifying properties
constObject.name = "Jane";
constObject.city = "New York";
console.log("Modified constObject:", constObject);

// const constObject = {}; // This would cause error - reassignment

// const with arrays
const constArray = [1, 2, 3];
console.log("\nOriginal constArray:", constArray);

// This works - modifying array contents
constArray.push(4);
constArray[0] = 10;
console.log("Modified constArray:", constArray);

// const constArray = []; // This would cause error - reassignment

console.log();

// ===============================
// 6. PRACTICAL EXAMPLES
// ===============================

console.log("6. Practical Examples:");
console.log("----------------------");

// Example 1: Loop variable behavior
console.log("Loop variable behavior:");

console.log("\nUsing var in loop:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 10); // Prints 3, 3, 3
}

console.log("\nUsing let in loop:");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 20); // Prints 0, 1, 2
}

// Example 2: Configuration object with const
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,
    
    updateTimeout(newTimeout) {
        this.timeout = newTimeout;
    }
};

console.log("\nConfiguration object:");
console.log("Original config:", config);

config.updateTimeout(8000);
config.apiUrl = "https://api.newdomain.com"; // Can modify properties
console.log("Updated config:", config);

// Example 3: Best practices demonstration
function bestPracticesDemo() {
    // Use const by default
    const userName = "Alice";
    const userRoles = ["user", "admin"];
    
    // Use let when you need to reassign
    let currentPage = 1;
    let isLoading = false;
    
    // Avoid var in modern JavaScript
    // var oldStyleVar = "avoid this";
    
    console.log("\nBest practices example:");
    console.log("User:", userName);
    console.log("Roles:", userRoles);
    console.log("Current page:", currentPage);
    
    // Simulate page change
    currentPage = 2;
    isLoading = true;
    
    console.log("After page change:");
    console.log("Current page:", currentPage);
    console.log("Is loading:", isLoading);
}

bestPracticesDemo();

console.log("\n=== End of Hoisting and Variable Behavior Demo ===");