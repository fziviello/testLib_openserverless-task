function sayHello(name) {
  return `Hello, ${name}!`;
}

if (typeof window !== "undefined") {
  window.helloLib = { sayHello };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { sayHello };
}