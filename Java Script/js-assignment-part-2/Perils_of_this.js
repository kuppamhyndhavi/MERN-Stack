// 1. Why doesn’t the original user.greetDelayed() work as expected in terms of this binding?

// In the original code, the setTimeout function uses a regular function. Regular functions have their own `this`, which,
// if not explicitly set, defaults to the global object (window in browsers, or undefined in strict mode). 
// So, when the callback runs, it's not executing as a method of the user object, causing `this.name` to be undefined.



// 2. How does storing `this` in a variable (self or that) solve the issue with traditional functions?

// By saving `this` (which correctly refers to the user object) into a variable like `self`, 
// we preserve the correct context. Inside the setTimeout callback, we then refer to `self.name`, 
// which continues pointing to the right object and avoids the incorrect `this` binding.

const user = {
  name: "Alice",
  greetDelayed: function () {
    const self = this; // Save reference to `this` in `self`
    setTimeout(function () {
      console.log(`Hello, ${self.name}!`);
    }, 1000);
  }
};
user.greetDelayed(); // Output: Hello, Alice!



// 3. Why does using an arrow function within setTimeout correctly refer to the user object? What is lexical this binding?

// Arrow functions don’t have their own `this`. Instead, they inherit `this` from their lexical scope — 
// the surrounding context where the arrow function is defined. In this case, since `setTimeout` is inside `greetDelayed`,
// the arrow function inherits `this` from `greetDelayed`, which correctly refers to the user object.
// This is called lexical `this` binding — `this` is determined based on where the function is defined, not how it’s called.

const user = {
  name: "Bob",
  greetDelayed: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}!`);
    }, 1000);
  }
};
user.greetDelayed(); // Output: Hello, Bob!



// 4. Create an object that fails first, then works with an arrow function

// Here, using a regular function would cause the same issue with `this` binding. But with an arrow function, 
// the correct `this` (which refers to the `book` object) is preserved.

const book = {
  title: "JavaScript Essentials",
  announce: function () {
    setTimeout(() => {
      console.log(`Now reading: ${this.title}`);
    }, 1000);
  }
};

book.announce(); // Output: Now reading: JavaScript Essentials
