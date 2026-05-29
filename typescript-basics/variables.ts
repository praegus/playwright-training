/* 
Variables, in short:
use "let" for changing variables and "const" for unchanging variables
don't use "var"
*/


/*
var
OUTDATED, pitfalls:
- allows redeclaration
- function-scoped, not block soped
- can be used before declaration
- will compile/run, but might not work as desired
*/

{
  console.log(a); // ⚠️ undefined
  if (true) {
    var a: number = 1; // declare in a block
    console.log(a); // output: 1
  }
  console.log(a); // output: 1, it is still known in the function
  var a: number = 2; // redeclare
  console.log(a); // output: 2
  var a: number = 3; // redeclare
  console.log(a) // output: 3
  a = 4 // change value
  console.log(a) // output: 4
}

/*
let
used for variables that need to change
- no redeclaration
- can be changed
- block scoped
*/

{
  console.log(a); // ❌ referenceError
  if (true) {
    let a: number = 1; // declare in a block
    console.log(a); // output: 1
  }
  console.log(a); // ❌ referenceError, no longer exists
  let a: number = 2; // declare new for the first time
  console.log(a); // output: 2
  let a: number = 3; // redeclare not allowed!!
  console.log(a) // output: 2
  a = 4; // change value
  console.log(a) // output: 4
}

/*
const
used for variables that stay the same
- no redeclaration
- can not be changed* (*: generally)
- block scoped
*/

{
  console.log(a); // ❌ referenceError
  if (true) {
    const a: number = 1; // declare in a block
    console.log(a); // output: 1
  }
  console.log(a); // ❌ referenceError, no longer exists
  const a: number = 2; // declare new for the first time
  console.log(a); // output: 2
  const a: number = 3; // ❌ redeclare not allowed!!
  console.log(a) // output: 2
  a = 4; // ❌ change value not allowed!!
  console.log(a) // output: 2
}