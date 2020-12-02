---
id: loops
title: Loops in JavaScript
sidebar_label: Loops
slug: /js/loops
---

### Let's get started

Loops can execute a block of code a number of times.

### JavaScript Loops

Loops are handy, if you want to run the same code over and over again, each time with a different value.

Often this is the case when working with arrays:

> instead of writing

```js
text += cars[0] + '<br>';
text += cars[1] + '<br>';
text += cars[2] + '<br>';
text += cars[3] + '<br>';
text += cars[4] + '<br>';
text += cars[5] + '<br>';
```

> You can write:

```js
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + '<br>';
}
```

### Different Kinds of Loops

JavaScript supports different kinds of loops:

- for - loops through a block of code a number of times.
- for/in - loops through the properties of an object.
- for/of - loops through the values of an iterable object.
- while - loops through a block of code while a specified condition is true.
- do/while - also loops through a block of code while a specified condition is true.

### The For Loop

The for loop has the following syntax:

```js
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.

> Example:

```js
for (i = 0; i < 5; i++) {
  text += 'The number is ' + i + '<br>';
}
```

### The For/In Loop

The JavaScript for/in statement loops through the properties of an object:

> Example:

```js
var person = {fname: 'John', lname: 'Doe', age: 25};

var text = '';
var x;
for (x in person) {
  text += person[x];
}
```

### The For/Of Loop

The JavaScript for/of statement loops through the values of an iterable objects.

for/of lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more.

The for/of loop has the following syntax:

```js
for (variable of iterable) {
  // code block to be executed
}
```

variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.

### The While Loop

The while loop loops through a block of code as long as a specified condition is true.

> Syntax

```js
while (condition) {
  // code block to be executed
}
```

> Example
> In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

```js
while (i < 10) {
  text += 'The number is ' + i;
  i++;
}
```

### The Do/While Loop

The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

> Syntax

```js
do {
  // code block to be executed
} while (condition);
```

> Example
> The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

```js
do {
  text += 'The number is ' + i;
  i++;
} while (i < 10);
```
