/**
 * JavaScript Control Structures Demo
 * 
 * This program demonstrates all JavaScript control structures:
 * conditional statements, loops, and control flow statements.
 * 
 * Author: Bishal Goutam
 * Date: October 16, 2025
 */

console.log("=== JavaScript Control Structures Demo ===\n");

// ===============================
// 1. CONDITIONAL STATEMENTS
// ===============================

console.log("1. Conditional Statements:");
console.log("--------------------------");

// if statement
let temperature = 25;
console.log(`Temperature: ${temperature}°C`);

if (temperature > 30) {
    console.log("It's hot outside!");
}

// if-else statement
let age = 20;
console.log(`\nAge: ${age}`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if-else if-else statement
let score = 85;
console.log(`\nScore: ${score}`);

if (score >= 90) {
    console.log("Grade: A - Excellent!");
} else if (score >= 80) {
    console.log("Grade: B - Good!");
} else if (score >= 70) {
    console.log("Grade: C - Average");
} else if (score >= 60) {
    console.log("Grade: D - Below Average");
} else {
    console.log("Grade: F - Fail");
}

// Nested if statements
let weather = "sunny";
let hasUmbrella = false;

console.log(`\nWeather: ${weather}, Has umbrella: ${hasUmbrella}`);

if (weather === "rainy") {
    if (hasUmbrella) {
        console.log("You can go out with your umbrella.");
    } else {
        console.log("Better stay inside or get an umbrella.");
    }
} else {
    console.log("Perfect weather to go outside!");
}

console.log();

// ===============================
// 2. SWITCH STATEMENT
// ===============================

console.log("2. Switch Statement:");
console.log("-------------------");

let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(`Day ${dayOfWeek} is: ${dayName}`);

// Switch with multiple cases
let month = "March";
let season;

switch (month) {
    case "December":
    case "January":
    case "February":
        season = "Winter";
        break;
    case "March":
    case "April":
    case "May":
        season = "Spring";
        break;
    case "June":
    case "July":
    case "August":
        season = "Summer";
        break;
    case "September":
    case "October":
    case "November":
        season = "Autumn";
        break;
    default:
        season = "Unknown";
}

console.log(`${month} is in ${season}`);

console.log();

// ===============================
// 3. FOR LOOPS
// ===============================

console.log("3. For Loops:");
console.log("-------------");

// Basic for loop
console.log("Basic for loop (counting 1 to 5):");
for (let i = 1; i <= 5; i++) {
    console.log(`  Count: ${i}`);
}

// for loop with array
console.log("\nIterating through array:");
let fruits = ["apple", "banana", "orange", "grape"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`  ${i + 1}. ${fruits[i]}`);
}

// for...in loop (for object properties)
console.log("\nfor...in loop (object properties):");
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    occupation: "Developer"
};

for (let key in person) {
    console.log(`  ${key}: ${person[key]}`);
}

// for...of loop (for iterable values)
console.log("\nfor...of loop (array values):");
let colors = ["red", "green", "blue", "yellow"];
for (let color of colors) {
    console.log(`  Color: ${color}`);
}

// for...of with strings
console.log("\nfor...of loop (string characters):");
let word = "JavaScript";
for (let char of word) {
    console.log(`  Character: ${char}`);
}

console.log();

// ===============================
// 4. WHILE LOOPS
// ===============================

console.log("4. While Loops:");
console.log("---------------");

// while loop
console.log("while loop (countdown from 5):");
let countdown = 5;
while (countdown > 0) {
    console.log(`  Countdown: ${countdown}`);
    countdown--;
}
console.log("  Blast off! 🚀");

// do...while loop
console.log("\ndo...while loop (at least one execution):");
let number = 10;
do {
    console.log(`  Number: ${number}`);
    number += 5;
} while (number < 10); // Condition is false, but executes once

console.log();

// ===============================
// 5. CONTROL FLOW STATEMENTS
// ===============================

console.log("5. Control Flow Statements:");
console.log("---------------------------");

// break statement
console.log("break statement (find first even number):");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`  First even number found: ${i}`);
        break; // Exit the loop
    }
    console.log(`  Checking: ${i} (odd)`);
}

// continue statement
console.log("\ncontinue statement (skip even numbers):");
for (let i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(`  Odd number: ${i}`);
}

// Labeled break (break out of nested loops)
console.log("\nLabeled break (nested loops):");
outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) {
            console.log(`  Breaking out of both loops at i=${i}, j=${j}`);
            break outerLoop;
        }
        console.log(`  i=${i}, j=${j}`);
    }
}

console.log();

// ===============================
// 6. PRACTICAL EXAMPLES
// ===============================

console.log("6. Practical Examples:");
console.log("----------------------");

// Example 1: Menu system
function displayMenu(userChoice) {
    console.log("\n=== Restaurant Menu System ===");
    
    switch (userChoice) {
        case 1:
            console.log("Selected: Appetizers");
            console.log("- Spring Rolls ($6)");
            console.log("- Garlic Bread ($4)");
            break;
        case 2:
            console.log("Selected: Main Courses");
            console.log("- Grilled Chicken ($15)");
            console.log("- Vegetarian Pasta ($12)");
            break;
        case 3:
            console.log("Selected: Desserts");
            console.log("- Chocolate Cake ($8)");
            console.log("- Ice Cream ($5)");
            break;
        case 4:
            console.log("Selected: Beverages");
            console.log("- Coffee ($3)");
            console.log("- Fresh Juice ($4)");
            break;
        default:
            console.log("Invalid choice. Please select 1-4.");
    }
}

displayMenu(2);

// Example 2: Password strength checker
function checkPasswordStrength(password) {
    console.log("\n=== Password Strength Checker ===");
    console.log(`Password: "${password}"`);
    
    let score = 0;
    let feedback = [];
    
    // Check length
    if (password.length >= 8) {
        score++;
    } else {
        feedback.push("Use at least 8 characters");
    }
    
    // Check for lowercase
    if (/[a-z]/.test(password)) {
        score++;
    } else {
        feedback.push("Add lowercase letters");
    }
    
    // Check for uppercase
    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        feedback.push("Add uppercase letters");
    }
    
    // Check for numbers
    if (/\d/.test(password)) {
        score++;
    } else {
        feedback.push("Add numbers");
    }
    
    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        score++;
    } else {
        feedback.push("Add special characters");
    }
    
    // Determine strength
    let strength;
    if (score === 5) {
        strength = "Very Strong";
    } else if (score === 4) {
        strength = "Strong";
    } else if (score === 3) {
        strength = "Medium";
    } else if (score === 2) {
        strength = "Weak";
    } else {
        strength = "Very Weak";
    }
    
    console.log(`Strength: ${strength} (${score}/5)`);
    if (feedback.length > 0) {
        console.log("Suggestions:");
        for (let suggestion of feedback) {
            console.log(`- ${suggestion}`);
        }
    }
}

checkPasswordStrength("MyP@ssw0rd123");
checkPasswordStrength("password");

// Example 3: Number guessing game simulation
function numberGuessingGame() {
    console.log("\n=== Number Guessing Game Simulation ===");
    
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guessed = false;
    const maxAttempts = 7;
    
    console.log("Computer is trying to guess a number between 1-100");
    console.log(`Target number: ${targetNumber} (hidden from guesser)`);
    
    while (!guessed && attempts < maxAttempts) {
        attempts++;
        let guess = Math.floor(Math.random() * 100) + 1;
        
        console.log(`Attempt ${attempts}: Guessed ${guess}`);
        
        if (guess === targetNumber) {
            console.log(`🎉 Correct! Found the number in ${attempts} attempts!`);
            guessed = true;
        } else if (guess < targetNumber) {
            console.log("Too low!");
        } else {
            console.log("Too high!");
        }
        
        if (attempts === maxAttempts && !guessed) {
            console.log(`Game over! The number was ${targetNumber}`);
        }
    }
}

numberGuessingGame();

// Example 4: Grade calculator
function calculateGrades(students) {
    console.log("\n=== Grade Calculator ===");
    
    for (let student of students) {
        let total = 0;
        let count = 0;
        
        console.log(`\nStudent: ${student.name}`);
        console.log("Grades:", student.grades.join(", "));
        
        for (let grade of student.grades) {
            total += grade;
            count++;
        }
        
        let average = total / count;
        let letterGrade;
        
        if (average >= 90) {
            letterGrade = "A";
        } else if (average >= 80) {
            letterGrade = "B";
        } else if (average >= 70) {
            letterGrade = "C";
        } else if (average >= 60) {
            letterGrade = "D";
        } else {
            letterGrade = "F";
        }
        
        console.log(`Average: ${average.toFixed(2)}%`);
        console.log(`Letter Grade: ${letterGrade}`);
        
        // Determine if student passes
        if (average >= 60) {
            console.log("Status: PASS ✅");
        } else {
            console.log("Status: FAIL ❌");
        }
    }
}

const students = [
    { name: "Alice Johnson", grades: [92, 88, 95, 90] },
    { name: "Bob Smith", grades: [78, 82, 75, 80] },
    { name: "Carol Brown", grades: [45, 52, 48, 55] }
];

calculateGrades(students);

console.log("\n=== End of Control Structures Demo ===");