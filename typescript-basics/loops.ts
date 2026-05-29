/*
For loops:
- runs a fixed number of times
- automatically cycles through until the end
- for loop from an Array (most common use-case in Playwright)
*/
{
  // Example loop for a specific number
  for (let i = 1; i <= 3; i++) {
    console.log("Iteration number:", i);
  }
  // Output:
  // Iteration number: 1
  // Iteration number: 2
  // Iteration number: 3

  // Example loop for an Array
  const fruits = ["Apple", "Banana", "Cherry"];
  for (const fruit of fruits) {
    console.log(fruit);
  }
  // Output:
  // Apple
  // Banana
  // Cherry
}

/*
While loops:
- not used in Playwright
- run as long as the condition in the parentheses is true 
- a change in the condition must happen (in the loop), or it will run indefinitely! ⚠️
*/
{
  // setup the condition
  let count = 1;

  while (count <= 3) {
    console.log("Count is:", count);
    count++; // changing the condition, to make sure the loop ends
  }

  // Output:
  // Count is: 1
  // Count is: 2
  // Count is: 3
}

// practice: fizzbuzz (required: conditionals)