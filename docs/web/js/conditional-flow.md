---
id: conditional-flow
title: Conditional flow in JavaScript
sidebar_label: Conditional flow
slug: /js/conditional-flow
---

### Let's get started

### JavaScript Control Flow

## if/else

if/else statements are how programs process yes/no questions programmatically. If the first condition evaluates to true, then the program will run the first block of code. Otherwise, it will run the else block.

```js
let weather = "rainy";
if(weather === "rainy") {
    console.log("Don't forget an umbrella today!");
}
else {
    console.log("It might be nice out today"!);
}
```

Output:

```js
Don't forget an umbrella today!
```

## else if

else if statements are used to add more conditions to an if/else statement.

```js
let weather = "sunny";
if(weather === "rainy") {
    console.log("Don't forget an umbrella!");
} else if (weather === "sunny"){
    console.log("Let's grab some sunscreen!");
} else {
    console.log("It might be nice out today"!);
}
```

Output:

```js
Let's grab some sunscreen
```

## True and False values

All JavaScript values have a truthy or falsy value. Declared variables are automatically given a truthy value unless the variable value contains any of the following:

- false

- 0 and -0

- “” and ‘’ (empty strings)

- null

- undefined

- NaN (not a number)
  > Note: To change a value from truthy to falsy and vice versa, use the following symbol: !

## Comparison Operators

Less than (<), greater than (>), less than or equal to (<=), and greater than or equal to (>=) symbols are used to compare values. Three equal signs (===) are used to check if the values are equal in value and type. An exclamation with two equal signs (!==) is used to check if two values do not equal each other. The comparisons evaluate to a boolean value (true or false).

```js
console.log(8 !== 8);
console.log(5 <= 9);
console.log(true === 'true');
```

Output:

```js
false;
true;
false;
```

## Logical Operators

Logical operators allow us to determine if both or either of the compared values are truthy or falsy.

Use && to check if both values are true. Use || to check if either of the values is true.

```js
let num = 16;
if (num > 15 && num < 17) {
  console.log('Your number is a perfect square!');
}
```

Output:

```js
Your number is a perfect square!
```

## switch

A collection of case statements that are compared to the switch condition and evaluated when the condition and case are true. A break is used between the cases to prevent additional execution. A default case gets evaluated when none of the cases are true. A switch statement accomplishes the same task an if/else if/else does in shorter lines of code.

```js
let color = 'green';

switch (color) {
  case 'orange':
    console.log('A mix of red and yellow');
    break;
  case 'green':
    console.log('A mix of blue and yellow');
    break;
  default:
    console.log('Not sure about this one!');
}
```

Output

```js
A mix of blue and yellow
```

## Ternary Operator

A ternary operator is a shorthand syntax for an if/else statement.

The first expression after the ? executes when the condition evaluates to true, and the second expression executes when the condition evaluates to false.

```js
let temperature = 190;

temperature >= 212
  ? console.log('It has boiled!')
  : console.log("It hasn't reached boiling temperature yet.");
```

Output:

```js
It hasn't reached boiling temperature yet.
```
