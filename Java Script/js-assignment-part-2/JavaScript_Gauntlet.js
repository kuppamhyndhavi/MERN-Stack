// This will now throw a ReferenceError
console.log(mysteryVariable); // Error: Cannot access 'mysteryVariable' before initialization
let mysteryVariable = 10;
console.log(mysteryVariable); // Output: 10

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); // Error: Cannot access 'mysteryVariable' before initialization
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable); // Output: 20
}

revealMystery();
console.log("After revealMystery:", mysteryVariable); // Output: undefined


// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during the compilation phase. 
// With **var**, variables are hoisted and initialized with `undefined`, so if you try to access them before the declaration, you just get `undefined`, not an error. 
// On the other hand, **let** and **const** are hoisted too, but they go into something called the "temporal dead zone" — 
// a period where they exist but haven’t been initialized yet. Trying to access them in that period results in a ReferenceError.
// Also, **const** must be initialized when declared, while **let** can be initialized later.
