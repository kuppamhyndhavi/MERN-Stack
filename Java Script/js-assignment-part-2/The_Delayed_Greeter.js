function delayedGreeterLet(names) {
  for (let i = 0; i < names.length; i++) {
    setTimeout(function () {
      console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
  }
}

delayedGreeterLet(['Alice', 'Bob', 'Charlie']);
