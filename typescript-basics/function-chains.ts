/*
Simple Function Chaining Example
- No classes
- Just functions returning an object
- Shows the same concept used in Playwright
*/

function createChain() {
  let value = ""; // using "let" because we want to change this

  return {
    addHello() {
      value += "Hello";
      return this; // return the object for chaining
    },
    addComma() {
      value += ", ";
      return this;
    },
    addText(name: string) {
      value += name;
      return this;
    },
    print() {
      console.log(value);
      return this;
    },
  };
}

// Usage example:

// Make a "chain" object with all the functions
const chain = createChain();

// Chain functions together
chain
  .addHello()
  .addComma()
  .addText("and welcome")
  .print(); // Output: "Hello, welcome"

// Chaining again
chain.addComma().addText(" please take a seat!").print(); // Output: "Hello, Floris, please take a seat!"
