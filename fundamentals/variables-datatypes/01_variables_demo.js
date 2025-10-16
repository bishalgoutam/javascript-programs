/**
 * JavaScript Variables and Data Types Demo
 * 
 * This program demonstrates different variable declarations and JavaScript data types.
 * Covers: var, let, const, and all primitive and reference data types.
 * 
 * Author: Bishal Goutam
 * Date: October 16, 2025
 */

console.log("=== JavaScript Variables and Data Types Demo ===\n");

// ===============================
// 1. VARIABLE DECLARATIONS
// ===============================

console.log("1. Variable Declarations:");
console.log("------------------------");

// var - function-scoped, can be redeclared and reassigned
var userName = "John Doe";
console.log("var userName:", userName);

// let - block-scoped, can be reassigned but not redeclared
let userAge = 25;
console.log("let userAge:", userAge);

// const - block-scoped, cannot be reassigned or redeclared
const PI = 3.14159;
console.log("const PI:", PI);

console.log();

// ===============================
// 2. PRIMITIVE DATA TYPES
// ===============================

console.log("2. Primitive Data Types:");
console.log("------------------------");

// Number - integers and floating-point numbers
let integerNum = 42;
let floatNum = 3.14;
let negativeNum = -17;
let scientificNum = 2.5e6; // 2.5 * 10^6 = 2500000

console.log("Number Examples:");
console.log("  Integer:", integerNum, "| Type:", typeof integerNum);
console.log("  Float:", floatNum, "| Type:", typeof floatNum);
console.log("  Negative:", negativeNum, "| Type:", typeof negativeNum);
console.log("  Scientific:", scientificNum, "| Type:", typeof scientificNum);

// String - text data
let singleQuoteStr = 'Hello World';
let doubleQuoteStr = "JavaScript Programming";
let templateLiteral = `Welcome to ${doubleQuoteStr}!`;

console.log("\nString Examples:");
console.log("  Single quotes:", singleQuoteStr, "| Type:", typeof singleQuoteStr);
console.log("  Double quotes:", doubleQuoteStr, "| Type:", typeof doubleQuoteStr);
console.log("  Template literal:", templateLiteral, "| Type:", typeof templateLiteral);

// Boolean - true/false values
let isActive = true;
let isComplete = false;

console.log("\nBoolean Examples:");
console.log("  isActive:", isActive, "| Type:", typeof isActive);
console.log("  isComplete:", isComplete, "| Type:", typeof isComplete);

// Undefined - variable declared but not assigned
let undefinedVar;
console.log("\nUndefined Example:");
console.log("  undefinedVar:", undefinedVar, "| Type:", typeof undefinedVar);

// Null - intentionally empty value
let nullVar = null;
console.log("\nNull Example:");
console.log("  nullVar:", nullVar, "| Type:", typeof nullVar); // Note: returns "object" (JavaScript quirk)

// Symbol - unique identifier (ES6+)
let symbolVar = Symbol('id');
console.log("\nSymbol Example:");
console.log("  symbolVar:", symbolVar.toString(), "| Type:", typeof symbolVar);

// BigInt - large integers (ES2020+)
let bigIntVar = 1234567890123456789012345678901234567890n;
console.log("\nBigInt Example:");
console.log("  bigIntVar:", bigIntVar, "| Type:", typeof bigIntVar);

console.log();

// ===============================
// 3. REFERENCE DATA TYPES
// ===============================

console.log("3. Reference Data Types:");
console.log("------------------------");

// Object - key-value pairs
let person = {
    name: "Alice Johnson",
    age: 30,
    city: "New York",
    isEmployed: true
};

console.log("Object Example:");
console.log("  person:", person, "| Type:", typeof person);
console.log("  person.name:", person.name);
console.log("  person['age']:", person['age']);

// Array - ordered list of values
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [42, "Hello", true, null, {key: "value"}];

console.log("\nArray Examples:");
console.log("  numbers:", numbers, "| Type:", typeof numbers);
console.log("  mixedArray:", mixedArray, "| Type:", typeof mixedArray);
console.log("  Array.isArray(numbers):", Array.isArray(numbers));

// Function - reusable code block
function greet(name) {
    return `Hello, ${name}!`;
}

console.log("\nFunction Example:");
console.log("  greet function:", greet, "| Type:", typeof greet);
console.log("  greet('Bob'):", greet('Bob'));

// Date - date and time
let currentDate = new Date();
console.log("\nDate Example:");
console.log("  currentDate:", currentDate, "| Type:", typeof currentDate);

console.log();

// ===============================
// 4. TYPE CONVERSION
// ===============================

console.log("4. Type Conversion:");
console.log("-------------------");

// Explicit Type Conversion
let numStr = "123";
let strToNum = Number(numStr);
let strToInt = parseInt("123.45");
let strToFloat = parseFloat("123.45");

console.log("Explicit Conversion:");
console.log(`  "${numStr}" to Number:`, strToNum, "| Type:", typeof strToNum);
console.log(`  "123.45" to parseInt:`, strToInt, "| Type:", typeof strToInt);
console.log(`  "123.45" to parseFloat:`, strToFloat, "| Type:", typeof strToFloat);

// Implicit Type Conversion (Type Coercion)
let implicitNum = "5" * 2; // String to number
let implicitStr = 5 + "5"; // Number to string
let implicitBool = Boolean(1); // Number to boolean

console.log("\nImplicit Conversion:");
console.log(`  "5" * 2:`, implicitNum, "| Type:", typeof implicitNum);
console.log(`  5 + "5":`, implicitStr, "| Type:", typeof implicitStr);
console.log(`  Boolean(1):`, implicitBool, "| Type:", typeof implicitBool);

console.log();

// ===============================
// 5. VARIABLE SCOPE DEMONSTRATION
// ===============================

console.log("5. Variable Scope:");
console.log("------------------");

var globalVar = "I'm global";

function scopeDemo() {
    var functionScoped = "I'm function scoped";
    
    if (true) {
        let blockScoped = "I'm block scoped";
        const alsoBlockScoped = "I'm also block scoped";
        var notBlockScoped = "I'm not block scoped";
        
        console.log("Inside block:");
        console.log("  blockScoped:", blockScoped);
        console.log("  alsoBlockScoped:", alsoBlockScoped);
        console.log("  notBlockScoped:", notBlockScoped);
    }
    
    console.log("\nOutside block:");
    console.log("  functionScoped:", functionScoped);
    console.log("  notBlockScoped:", notBlockScoped);
    // console.log("  blockScoped:", blockScoped); // Would cause ReferenceError
}

scopeDemo();

console.log("\n=== End of Variables and Data Types Demo ===");

// ===============================
// 6. PRACTICAL EXAMPLES
// ===============================

console.log("\n6. Practical Examples:");
console.log("----------------------");

// Example 1: User information system
function createUser(name, age, email) {
    const user = {
        id: Symbol('user'),
        name: name,
        age: age,
        email: email,
        isActive: true,
        createdAt: new Date(),
        
        getInfo() {
            return `${this.name} (${this.age} years old) - ${this.email}`;
        }
    };
    
    return user;
}

const newUser = createUser("Emma Wilson", 28, "emma@example.com");
console.log("User Info:", newUser.getInfo());
console.log("User Object:", newUser);

// Example 2: Data validation
function validateData(data) {
    const results = {
        hasName: typeof data.name === 'string' && data.name.length > 0,
        hasValidAge: typeof data.age === 'number' && data.age > 0 && data.age < 150,
        hasEmail: typeof data.email === 'string' && data.email.includes('@'),
        isActive: typeof data.isActive === 'boolean'
    };
    
    return results;
}

console.log("\nData Validation:");
console.log(validateData(newUser));