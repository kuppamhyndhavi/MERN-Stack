// 1. How JavaScript Handles Function Calls with Different Number of Arguments Than Parameters:

// JavaScript functions deal with arguments in the following way:
// Fewer Arguments: If fewer arguments are passed than the function has parameters, the missing parameters will be set to `undefined` by default.

// Example:

function test(a, b) {
  console.log(a, b);
}
test(1);  // Output: 1, undefined


// More Arguments: If more arguments are passed than the function parameters, 
// the extra arguments will be ignored, unless they are captured using a rest parameter (...rest).

// Example:

function test(a, b) {
  console.log(a, b);
}
test(1, 2, 3, 4);  // Output: 1, 2 (extra arguments are ignored)


// 2. Purpose and Syntax of the Rest Parameter:
// The rest parameter allows you to capture all extra arguments passed to the function into an array. 
// It lets the function accept any number of arguments, and it must appear at the end of the parameter list.


// Syntax:

function functionName(...rest) {
  // 'rest' is an array that holds all extra arguments passed to the function
}

// Example:
function sum(a, b, ...rest) {
  console.log(a, b);  // The first two arguments
  console.log(rest);   // The remaining arguments as an array
}
sum(1, 2, 3, 4, 5);  // Output: 1 2 [3, 4, 5]


// 3. Write a Function sumAll Using the Rest Parameter:
// The sumAll function will accept any number of arguments and return their sum.

function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
// Test the function
console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100

// Explanation:
// The sumAll function uses the rest parameter (...numbers) to collect all arguments into an array.
// The `reduce` method then calculates the total sum of the numbers in the array.
  

// 4. Challenge: Create a Function processArguments
// The processArguments function will accept a primary function as its first argument, followed by any number of additional arguments. It will call the primary function with all the provided arguments.

function processArguments(fn, ...args) {
  return fn(...args);
}

// Example primary function: summing all arguments
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Using processArguments to call sumAll
console.log(processArguments(sumAll, 1, 2, 3));  // Output: 6
console.log(processArguments(sumAll, 10, 20, 30, 40));  // Output: 100

// Explanation:
// processArguments takes the primary function `fn` as the first argument and all other arguments as `args`.
// It then calls `fn(...args)` to invoke the primary function with all the provided arguments.
