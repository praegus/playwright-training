/*
Basic types:
- examples
- type inference
*/
{
  // String
  const firstname: string = "Test";
  const lastname = "User";

  // number
  const age: number = 25;
  const birthYear = 1899;

  // boolean
  const isActive: boolean = true;
  const isAlive = false;

  // Array
  const fruits: string[] = ["Apple", "Banana"];
  const veggies = ["Pea", "Tomato"];

  // Object
  const user = { name: "Alice", age: 30 };
}
/*
Custom types:
- define yourself
- limit valid values
*/
{
  // Define a type that only allows specific strings
  type Colour = "Red" | "Green" | "Blue";

  let myColor: Colour;

  // ✅ Valid
  myColor = "Green";
  console.log("My color:", myColor);

  // ❌ Invalid value
  myColor = "Yellow"; // Error: Type '"Yellow"' is not assignable to type 'ColorType'
}
