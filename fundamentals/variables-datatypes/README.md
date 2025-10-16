# Variables and Data Types

This directory contains JavaScript programs demonstrating variables and data types.

## Programs

### 01_variables_demo.js
Comprehensive demonstration of JavaScript variables and data types including:
- Variable declarations (var, let, const)
- Primitive data types (Number, String, Boolean, Undefined, Null, Symbol, BigInt)
- Reference data types (Object, Array, Function, Date)
- Type conversion (explicit and implicit)
- Variable scope demonstration
- Practical examples

### 02_hoisting_scope.js
Advanced concepts covering:
- Variable hoisting behavior
- Temporal dead zone for let and const
- Scope differences between var, let, and const
- Best practices for variable declaration

## Key Concepts

- **var**: Function-scoped, can be redeclared and reassigned, hoisted
- **let**: Block-scoped, can be reassigned but not redeclared, temporal dead zone
- **const**: Block-scoped, cannot be reassigned or redeclared, temporal dead zone
- **Hoisting**: Variables and functions are moved to the top of their scope
- **Scope**: The accessibility of variables in different parts of code

## Running the Programs

```bash
# Run with Node.js
node 01_variables_demo.js
node 02_hoisting_scope.js

# Or open in browser console and paste the code
```