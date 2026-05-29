/*
IF statements

syntax:
if (condition) {
  // do something
} 
  
optional: continue with else if / else: 
else if (other condition) {
  // do something else
} else {
  // do nothing    
}

IF statements can also be nested.
*/

{
  let logging: boolean = false;

  if (logging) {
    console.log("logging is turned on.");
  }
  // no output

  const result: string = "success";

  if (result === "success") {
    console.log("Test passed!");
  } else if (result === "failed") {
    console.log("Test failed.");
  } else {
    console.log("Result is unknown");
  }
  // output: "Test passed!"

  let height: number = 175;

  if (height > 120) {
    if (height > 220) {
      console.log("Too tall for this ride :(");
    } else {
      console.log("Please enjoy the ride!");
    }
  } else {
    console.log("Too short for this ride :(");
  }

  // output: "Please enjoy the ride!"
}
/* 
Advanced: if statement can be done in a single line called "oneliners".
Example for checking if someone is an adult (18+)
*/
{
    let age: number = 30
    const isAdult = age >= 18 ? true : false;

    console.log(isAdult) // output: true
}


// practice: leap year function