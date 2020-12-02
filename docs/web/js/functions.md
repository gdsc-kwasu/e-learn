---
id: functions
title: Functions in JavaScript
sidebar_label: Functions
slug: /js/functions
---

### Let's get started

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

```js
function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}
```

### JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

```js
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

> A Function is much the same as a Procedure or a Subroutine, in other programming languages.

### Function Return

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":

> Example
> Calculate the product of two numbers, and return the result:

```js
var x = myFunction(5, 6); // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}
```

The result in x will be:

> 30

### Why Functions?

You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

> Convert Fahrenheit to Celcius:

```js
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById('demo').innerHTML = toCelsius(77);
```

### Local Variables

Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

```js
// code here can NOT use carName

function myFunction() {
  var carName = 'Volvo';
  // code here CAN use carName
}

// code here can NOT use carName
```
