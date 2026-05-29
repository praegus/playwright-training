/*
Objects are a set of key-value pairs, separated by commas and bounded by braces
syntax:
    key: value
values can be of any type, including other objects.
accessing values is done with dotsyntax or using the value name in brackets
*/
{
  const user = { name: "Alice", age: 30 };

  console.log(user.name); // output: "Alice"
  console.log([user["age"]]); // output: 30

  const layeredObjects = { 
    objectA: {
        id: 1
    },
    objectB: {
        id: 2
    },
    objectC: {
        id: 3
    }
  }

  console.log(layeredObjects.objectA.id) // output: 1
}

//  practice: working with JSON objects