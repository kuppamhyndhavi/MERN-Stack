// 1. What is a Closure?

// A closure is a function that “remembers” the variables from its surrounding context, even after the outer function has finished running.
// For example, in the `setupCounter` case:
// Even after `setupCounter` is done, the `increment` and `decrement` functions still have access to the `count` variable.
// Each time you call `setupCounter()`, a fresh `count` is created, and the returned functions can still interact with it because of the closure.
// In short: Closures let functions carry around their own set of variables wherever they go.


// 2. Function: createGreeting

function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

// Usage:
const sayHello = createGreeting("Hello");
console.log(sayHello("World")); // Output: Hello, World!

const sayHi = createGreeting("Hi");
console.log(sayHi("Alice")); // Output: Hi, Alice!



// 3. Function: createSecretHolder

function createSecretHolder(secret) {
  let _secret = secret;

  return {
    getSecret: function() {
      return _secret;
    },
    setSecret: function(newSecret) {
      _secret = newSecret;
    }
  };
}

// Usage:
const holder = createSecretHolder("myPassword123");

console.log(holder.getSecret()); // Output: myPassword123

holder.setSecret("newSecret!");
console.log(holder.getSecret()); // Output: newSecret!

// _secret is not accessible directly:
console.log(holder._secret); // Output: undefined



// 4. Encapsulation with Closures
// The private value (`_secret`) is protected from external access because it’s inside the closure of the outer function. 
// Only the methods returned from the outer function can interact with or modify the secret, ensuring privacy and encapsulation.
