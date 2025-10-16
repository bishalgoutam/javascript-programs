/**
 * JavaScript Node.js Environment Validation Script
 * 
 * This script validates the Node.js environment and checks for
 * proper JavaScript runtime setup.
 * 
 * Author: Bishal Goutam
 * Date: October 16, 2025
 */

console.log("=== JavaScript Node.js Environment Validation ===\n");

// ===============================
// 1. BASIC ENVIRONMENT INFO
// ===============================

console.log("1. Basic Environment Information:");
console.log("---------------------------------");

console.log(`Node.js Version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log(`Node.js Executable: ${process.execPath}`);
console.log(`Current Working Directory: ${process.cwd()}`);
console.log(`Process ID: ${process.pid}`);

console.log();

// ===============================
// 2. JAVASCRIPT ENGINE FEATURES
// ===============================

console.log("2. JavaScript Engine Features:");
console.log("------------------------------");

// ES6+ Feature Tests
const featureTests = {
    "Arrow Functions": () => {
        try {
            const test = () => "supported";
            return test() === "supported";
        } catch (e) {
            return false;
        }
    },
    
    "Template Literals": () => {
        try {
            const name = "test";
            const result = `Hello ${name}`;
            return result === "Hello test";
        } catch (e) {
            return false;
        }
    },
    
    "Destructuring": () => {
        try {
            const obj = { a: 1, b: 2 };
            const { a, b } = obj;
            return a === 1 && b === 2;
        } catch (e) {
            return false;
        }
    },
    
    "Classes": () => {
        try {
            class TestClass {
                constructor(value) {
                    this.value = value;
                }
            }
            const instance = new TestClass(42);
            return instance.value === 42;
        } catch (e) {
            return false;
        }
    },
    
    "Promises": () => {
        try {
            const promise = new Promise(resolve => resolve(true));
            return promise instanceof Promise;
        } catch (e) {
            return false;
        }
    },
    
    "Async/Await": () => {
        try {
            const asyncFunction = async () => await Promise.resolve(true);
            return typeof asyncFunction === 'function';
        } catch (e) {
            return false;
        }
    },
    
    "Modules (import/export)": () => {
        try {
            // This is a basic check since actual module testing requires separate files
            return typeof module !== 'undefined' && typeof require === 'function';
        } catch (e) {
            return false;
        }
    },
    
    "Rest/Spread Operators": () => {
        try {
            const arr = [1, 2, 3];
            const [...spread] = arr;
            return spread.length === 3;
        } catch (e) {
            return false;
        }
    },
    
    "Map and Set": () => {
        try {
            const map = new Map();
            const set = new Set();
            map.set('key', 'value');
            set.add('item');
            return map.get('key') === 'value' && set.has('item');
        } catch (e) {
            return false;
        }
    },
    
    "Symbol": () => {
        try {
            const sym = Symbol('test');
            return typeof sym === 'symbol';
        } catch (e) {
            return false;
        }
    }
};

for (const [feature, test] of Object.entries(featureTests)) {
    const supported = test();
    console.log(`  ${feature}: ${supported ? '✅ Supported' : '❌ Not Supported'}`);
}

console.log();

// ===============================
// 3. NODE.JS SPECIFIC FEATURES
// ===============================

console.log("3. Node.js Specific Features:");
console.log("-----------------------------");

// Core modules availability
const coreModules = [
    'fs', 'path', 'os', 'url', 'util', 'events',
    'stream', 'buffer', 'crypto', 'http', 'https'
];

console.log("Core Modules Availability:");
for (const moduleName of coreModules) {
    try {
        require(moduleName);
        console.log(`  ${moduleName}: ✅ Available`);
    } catch (e) {
        console.log(`  ${moduleName}: ❌ Not Available`);
    }
}

// Global objects check
console.log("\nGlobal Objects:");
const globalObjects = ['global', 'process', 'Buffer', '__dirname', '__filename'];
for (const obj of globalObjects) {
    const available = typeof eval(obj) !== 'undefined';
    console.log(`  ${obj}: ${available ? '✅ Available' : '❌ Not Available'}`);
}

console.log();

// ===============================
// 4. SYSTEM INFORMATION
// ===============================

console.log("4. System Information:");
console.log("----------------------");

const os = require('os');

console.log(`Operating System: ${os.type()} ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.cpus().length}`);
console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);
console.log(`Home Directory: ${os.homedir()}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);

console.log();

// ===============================
// 5. PERFORMANCE TEST
// ===============================

console.log("5. Performance Test:");
console.log("-------------------");

// Simple performance benchmark
function performanceTest() {
    const iterations = 1000000;
    
    // Array operations test
    const start1 = process.hrtime.bigint();
    const arr = [];
    for (let i = 0; i < iterations; i++) {
        arr.push(i);
    }
    const end1 = process.hrtime.bigint();
    const arrayTime = Number(end1 - start1) / 1000000; // Convert to milliseconds
    
    // Object operations test
    const start2 = process.hrtime.bigint();
    const obj = {};
    for (let i = 0; i < iterations; i++) {
        obj[i] = i;
    }
    const end2 = process.hrtime.bigint();
    const objectTime = Number(end2 - start2) / 1000000;
    
    // Function call test
    const start3 = process.hrtime.bigint();
    const testFunc = (x) => x * 2;
    for (let i = 0; i < iterations; i++) {
        testFunc(i);
    }
    const end3 = process.hrtime.bigint();
    const functionTime = Number(end3 - start3) / 1000000;
    
    console.log(`Array Operations (${iterations} items): ${arrayTime.toFixed(2)}ms`);
    console.log(`Object Operations (${iterations} properties): ${objectTime.toFixed(2)}ms`);
    console.log(`Function Calls (${iterations} calls): ${functionTime.toFixed(2)}ms`);
}

performanceTest();

console.log();

// ===============================
// 6. MEMORY USAGE
// ===============================

console.log("6. Memory Usage:");
console.log("---------------");

const memUsage = process.memoryUsage();
console.log(`RSS (Resident Set Size): ${(memUsage.rss / (1024 ** 2)).toFixed(2)} MB`);
console.log(`Heap Total: ${(memUsage.heapTotal / (1024 ** 2)).toFixed(2)} MB`);
console.log(`Heap Used: ${(memUsage.heapUsed / (1024 ** 2)).toFixed(2)} MB`);
console.log(`External: ${(memUsage.external / (1024 ** 2)).toFixed(2)} MB`);

console.log();

// ===============================
// 7. ENVIRONMENT VARIABLES
// ===============================

console.log("7. Environment Variables:");
console.log("------------------------");

const importantEnvVars = ['NODE_ENV', 'PATH', 'HOME', 'USER', 'PWD'];
for (const envVar of importantEnvVars) {
    const value = process.env[envVar];
    if (value) {
        console.log(`  ${envVar}: ${envVar === 'PATH' ? '[PATH_SET]' : value}`);
    } else {
        console.log(`  ${envVar}: Not set`);
    }
}

console.log();

// ===============================
// 8. VALIDATION SUMMARY
// ===============================

console.log("8. Validation Summary:");
console.log("---------------------");

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
const isNodeVersionGood = majorVersion >= 18;

console.log(`✅ Node.js Version Check: ${nodeVersion} ${isNodeVersionGood ? '(Good)' : '(Consider upgrading to 18+)'}`);

// Check if essential features work
const essentialFeatures = ['Arrow Functions', 'Promises', 'Async/Await', 'Classes'];
const workingFeatures = essentialFeatures.filter(feature => featureTests[feature]());
const allEssentialWork = workingFeatures.length === essentialFeatures.length;

console.log(`✅ Essential JavaScript Features: ${workingFeatures.length}/${essentialFeatures.length} working`);

// Overall assessment
if (isNodeVersionGood && allEssentialWork) {
    console.log("\n🎉 Environment Status: EXCELLENT");
    console.log("Your JavaScript development environment is ready!");
} else if (allEssentialWork) {
    console.log("\n⚠️  Environment Status: GOOD");
    console.log("Environment works but consider updating Node.js");
} else {
    console.log("\n❌ Environment Status: NEEDS ATTENTION");
    console.log("Some essential features are not working properly");
}

console.log("\n=== Environment Validation Complete ===");

// ===============================
// 9. SIMPLE FUNCTIONALITY TEST
// ===============================

console.log("\n9. Simple Functionality Test:");
console.log("-----------------------------");

// Test basic JavaScript functionality
function testBasicFunctionality() {
    const tests = [];
    
    // Test 1: Variables and data types
    try {
        let testVar = "Hello World";
        const testNum = 42;
        tests.push("Variables and data types: ✅");
    } catch (e) {
        tests.push("Variables and data types: ❌");
    }
    
    // Test 2: Functions
    try {
        function testFunc(x) { return x * 2; }
        const result = testFunc(5);
        tests.push(`Functions: ${result === 10 ? '✅' : '❌'}`);
    } catch (e) {
        tests.push("Functions: ❌");
    }
    
    // Test 3: Objects and arrays
    try {
        const testObj = { name: "Test", value: 123 };
        const testArr = [1, 2, 3];
        tests.push("Objects and arrays: ✅");
    } catch (e) {
        tests.push("Objects and arrays: ❌");
    }
    
    // Test 4: Control structures
    try {
        let result = "";
        for (let i = 0; i < 3; i++) {
            if (i % 2 === 0) {
                result += "even";
            } else {
                result += "odd";
            }
        }
        tests.push("Control structures: ✅");
    } catch (e) {
        tests.push("Control structures: ❌");
    }
    
    return tests;
}

const functionalityTests = testBasicFunctionality();
for (const test of functionalityTests) {
    console.log(`  ${test}`);
}

console.log("\n=== All Tests Complete ===");