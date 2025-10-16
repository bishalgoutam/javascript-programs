/**
 * JavaScript Operators Demo
 * 
 * This program demonstrates all types of JavaScript operators:
 * arithmetic, assignment, comparison, logical, and bitwise operators.
 * 
 * Author: Bishal Goutam
 * Date: October 16, 2025
 */

console.log("=== JavaScript Operators Demo ===\n");

// ===============================
// 1. ARITHMETIC OPERATORS
// ===============================

console.log("1. Arithmetic Operators:");
console.log("------------------------");

let a = 15;
let b = 4;

console.log(`a = ${a}, b = ${b}`);
console.log();

// Basic arithmetic operations
console.log("Basic Operations:");
console.log(`  Addition (a + b): ${a} + ${b} = ${a + b}`);
console.log(`  Subtraction (a - b): ${a} - ${b} = ${a - b}`);
console.log(`  Multiplication (a * b): ${a} * ${b} = ${a * b}`);
console.log(`  Division (a / b): ${a} / ${b} = ${a / b}`);
console.log(`  Modulus (a % b): ${a} % ${b} = ${a % b}`);
console.log(`  Exponentiation (a ** b): ${a} ** ${b} = ${a ** b}`);

// Increment and Decrement
console.log("\nIncrement and Decrement:");
let x = 10;
console.log(`  Initial x: ${x}`);
console.log(`  Pre-increment (++x): ${++x}`); // x becomes 11, returns 11
console.log(`  Post-increment (x++): ${x++}`); // returns 11, x becomes 12
console.log(`  Current x: ${x}`);
console.log(`  Pre-decrement (--x): ${--x}`); // x becomes 11, returns 11
console.log(`  Post-decrement (x--): ${x--}`); // returns 11, x becomes 10
console.log(`  Final x: ${x}`);

console.log();

// ===============================
// 2. ASSIGNMENT OPERATORS
// ===============================

console.log("2. Assignment Operators:");
console.log("------------------------");

let num = 20;
console.log(`Initial num: ${num}`);

// Compound assignment operators
num += 5;  // num = num + 5
console.log(`After num += 5: ${num}`);

num -= 3;  // num = num - 3
console.log(`After num -= 3: ${num}`);

num *= 2;  // num = num * 2
console.log(`After num *= 2: ${num}`);

num /= 4;  // num = num / 4
console.log(`After num /= 4: ${num}`);

num %= 7;  // num = num % 7
console.log(`After num %= 7: ${num}`);

num **= 2; // num = num ** 2
console.log(`After num **= 2: ${num}`);

console.log();

// ===============================
// 3. COMPARISON OPERATORS
// ===============================

console.log("3. Comparison Operators:");
console.log("------------------------");

let val1 = 10;
let val2 = "10";
let val3 = 20;

console.log(`val1 = ${val1} (${typeof val1})`);
console.log(`val2 = "${val2}" (${typeof val2})`);
console.log(`val3 = ${val3} (${typeof val3})`);
console.log();

// Equality operators
console.log("Equality Operators:");
console.log(`  val1 == val2: ${val1 == val2}`);   // true (type coercion)
console.log(`  val1 === val2: ${val1 === val2}`); // false (strict equality)
console.log(`  val1 != val3: ${val1 != val3}`);   // true
console.log(`  val1 !== val2: ${val1 !== val2}`); // true (strict inequality)

// Relational operators
console.log("\nRelational Operators:");
console.log(`  val1 < val3: ${val1 < val3}`);     // true
console.log(`  val1 > val3: ${val1 > val3}`);     // false
console.log(`  val1 <= val2: ${val1 <= val2}`);   // true
console.log(`  val3 >= val1: ${val3 >= val1}`);   // true

console.log();

// ===============================
// 4. LOGICAL OPERATORS
// ===============================

console.log("4. Logical Operators:");
console.log("---------------------");

let isTrue = true;
let isFalse = false;
let age = 25;
let hasLicense = true;

console.log(`isTrue = ${isTrue}, isFalse = ${isFalse}`);
console.log(`age = ${age}, hasLicense = ${hasLicense}`);
console.log();

// Logical AND (&&)
console.log("Logical AND (&&):");
console.log(`  isTrue && hasLicense: ${isTrue && hasLicense}`);
console.log(`  isFalse && hasLicense: ${isFalse && hasLicense}`);
console.log(`  (age >= 18) && hasLicense: ${(age >= 18) && hasLicense}`);

// Logical OR (||)
console.log("\nLogical OR (||):");
console.log(`  isTrue || isFalse: ${isTrue || isFalse}`);
console.log(`  isFalse || hasLicense: ${isFalse || hasLicense}`);
console.log(`  (age < 18) || hasLicense: ${(age < 18) || hasLicense}`);

// Logical NOT (!)
console.log("\nLogical NOT (!):");
console.log(`  !isTrue: ${!isTrue}`);
console.log(`  !isFalse: ${!isFalse}`);
console.log(`  !(age < 18): ${!(age < 18)}`);

// Short-circuit evaluation
console.log("\nShort-circuit Evaluation:");
let result1 = false && console.log("This won't execute");
let result2 = true || console.log("This won't execute either");
console.log("Short-circuit demonstration completed");

console.log();

// ===============================
// 5. BITWISE OPERATORS
// ===============================

console.log("5. Bitwise Operators:");
console.log("---------------------");

let bit1 = 5;  // Binary: 101
let bit2 = 3;  // Binary: 011

console.log(`bit1 = ${bit1} (binary: ${bit1.toString(2).padStart(3, '0')})`);
console.log(`bit2 = ${bit2} (binary: ${bit2.toString(2).padStart(3, '0')})`);
console.log();

console.log("Bitwise Operations:");
console.log(`  AND (bit1 & bit2): ${bit1 & bit2} (binary: ${(bit1 & bit2).toString(2)})`);
console.log(`  OR (bit1 | bit2): ${bit1 | bit2} (binary: ${(bit1 | bit2).toString(2)})`);
console.log(`  XOR (bit1 ^ bit2): ${bit1 ^ bit2} (binary: ${(bit1 ^ bit2).toString(2)})`);
console.log(`  NOT (~bit1): ${~bit1} (binary: ${(~bit1).toString(2)})`);
console.log(`  Left shift (bit1 << 1): ${bit1 << 1} (binary: ${(bit1 << 1).toString(2)})`);
console.log(`  Right shift (bit1 >> 1): ${bit1 >> 1} (binary: ${(bit1 >> 1).toString(2)})`);

console.log();

// ===============================
// 6. SPECIAL OPERATORS
// ===============================

console.log("6. Special Operators:");
console.log("--------------------");

// Ternary operator
let userAge = 20;
let canVote = userAge >= 18 ? "Yes" : "No";
console.log(`Ternary Operator - Can vote (age ${userAge}): ${canVote}`);

// typeof operator
let testVar = "Hello";
console.log(`\ntypeof "${testVar}": ${typeof testVar}`);
console.log(`typeof 42: ${typeof 42}`);
console.log(`typeof true: ${typeof true}`);
console.log(`typeof undefined: ${typeof undefined}`);
console.log(`typeof null: ${typeof null}`); // Returns "object" (JavaScript quirk)

// instanceof operator
let testArray = [1, 2, 3];
let testDate = new Date();
console.log(`\n[1,2,3] instanceof Array: ${testArray instanceof Array}`);
console.log(`new Date() instanceof Date: ${testDate instanceof Date}`);
console.log(`"hello" instanceof String: ${"hello" instanceof String}`);

// in operator
let person = { name: "Alice", age: 30 };
console.log(`\n"name" in person: ${"name" in person}`);
console.log(`"height" in person: ${"height" in person}`);

console.log();

// ===============================
// 7. OPERATOR PRECEDENCE
// ===============================

console.log("7. Operator Precedence:");
console.log("-----------------------");

let result;

// Without parentheses
result = 5 + 3 * 2;
console.log(`5 + 3 * 2 = ${result} (multiplication first)`);

// With parentheses
result = (5 + 3) * 2;
console.log(`(5 + 3) * 2 = ${result} (addition first due to parentheses)`);

// Complex expression
result = 10 + 5 * 2 - 3 / 3;
console.log(`10 + 5 * 2 - 3 / 3 = ${result}`);
console.log("Order: 5*2=10, 3/3=1, 10+10-1=19");

// Logical operator precedence
let complexLogical = true || false && false;
console.log(`\ntrue || false && false = ${complexLogical} (&& has higher precedence)`);

console.log();

// ===============================
// 8. PRACTICAL EXAMPLES
// ===============================

console.log("8. Practical Examples:");
console.log("----------------------");

// Example 1: Calculator function
function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        case '%':
            return num1 % num2;
        case '**':
            return num1 ** num2;
        default:
            return "Invalid operator";
    }
}

console.log("Calculator Examples:");
console.log(`  10 + 5 = ${calculator(10, '+', 5)}`);
console.log(`  20 - 8 = ${calculator(20, '-', 8)}`);
console.log(`  6 * 7 = ${calculator(6, '*', 7)}`);
console.log(`  15 / 3 = ${calculator(15, '/', 3)}`);
console.log(`  17 % 5 = ${calculator(17, '%', 5)}`);

// Example 2: Grade evaluation
function evaluateGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}

console.log("\nGrade Evaluation:");
console.log(`  Score 95: Grade ${evaluateGrade(95)}`);
console.log(`  Score 82: Grade ${evaluateGrade(82)}`);
console.log(`  Score 67: Grade ${evaluateGrade(67)}`);

// Example 3: Access control
function checkAccess(user) {
    const hasValidUser = user && user.name;
    const isAdmin = user && user.role === 'admin';
    const isActive = user && user.isActive;
    
    return {
        canLogin: hasValidUser && isActive,
        canAccessAdmin: hasValidUser && isAdmin && isActive,
        message: !hasValidUser ? "Invalid user" :
                 !isActive ? "Account inactive" :
                 "Access granted"
    };
}

const user1 = { name: "John", role: "admin", isActive: true };
const user2 = { name: "Jane", role: "user", isActive: false };

console.log("\nAccess Control:");
console.log("Admin user:", checkAccess(user1));
console.log("Inactive user:", checkAccess(user2));

console.log("\n=== End of Operators Demo ===");