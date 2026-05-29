/*
- declare with "function"
- parameter(s) in parentheses (include their types)
- optional: return (and return type)
- optional: async (returns Promise)
*/

// Example function
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

/* 
Simplify functions:
- Arrow function delcaration
- Types types CAN be inferred (but be careful)
- return is inferred

The following 2 functions are the same
*/
{
  function add2b(a: any, b: any) {
    return a + b;
  }

  const add2a = (a, b) => a + b;
}

/*
async functions
- runs asynchronously
- returns a Promise
- call with "await" to wait for the Promise to resolve before continuing
*/
{
  // helper sleep function
  function sleep(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }

  // async function example
  async function asyncHello(): Promise<void> {
    await sleep(2000); // wait 2 seconds
    console.log("Hello, ");
  }

  // Example 1: asyncHello runs asynchronously in the background
  async function main1() {
    asyncHello();
    console.log("my name is Floris");
    // Output order: "my name is Floris" first, then "Hello, " after 2 seconds
  }

  // Example 2: using await inside another async function
  async function main2() {
    await asyncHello();
    console.log("my name is Floris");
    // Output order: after 2 seconds "Hello, " followed by "my name is Floris"
  }
}

// assignment: calculator functions (add, multiply, divide, square, subtract)
