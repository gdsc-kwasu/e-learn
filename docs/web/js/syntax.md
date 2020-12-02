---
id: syntax
title: Syntax, Data Types and Operators
sidebar_label: Syntax
slug: /js/syntax
---

### Let's get started

JavaScript syntax is the set of rules, how JavaScript programs are constructed:

```js
var x, y, z; // Declare Variable
x = 5; // Assign value
y = 6;
z = x + y; // Compute Value
```

### JavaScript Values

The JavaScript syntax defines two types of values:

- Fixed values
- Variable values

Fixed values are called Literals.
Variable values are called Variables.

### JavaScript Literals

The two most important syntax rules for fixed values are:

1. **Numbers** are written with or without decimals

> 10.05, 1001

2. **Strings** are text, written within double or single quotes
   > "Kwara State University"

### JavaScript Variables

In a programming language, **variables** are used to **store** data values.

JavaScript uses the var keyword to **declare** variables.

An **equal sign** is used to **assign values** to variables.

In this example, x is defined as a variable. Then, x is assigned (given) the value 6:

> syntax

```js
var x;
x = 6;
```

### JavaScript Operators

JavaScript uses arithmetic operators ( +, -, \, \*, / ) to compute values:

```js
(5 + 6) * 10;
```

JavaScript uses an assignment operator ( = ) to assign values to variables:

```js
var x, y;
x = 5;
y = 6;
```

### JavaScript Expressions

An expression is a combination of values, variables, and operators, which computes to a value.

The computation is called an evaluation.

For example, 5 \* 10 evaluates to 50:

```js
5 * 10;
```

Expressions can also contain variable values:

```js
x * 10;
```

The values can be of various types, such as numbers and strings.

For example, "John" + " " + "Doe", evaluates to "John Doe":

```js
'DSC' + '' + 'KWASU';
```

### JavaScript Keywords

JavaScript keywords are used to identify actions to be performed.

The var keyword tells the browser to create variables:

```js
var x, y;
x = 5 + 6;
y = x * 10;
```

### JavaScript Comments

Not all JavaScript statements are "executed".

Code after double slashes // or between /_ and _/ is treated as a comment.

Comments are ignored, and will not be executed:

```js
var x = 5; //I will be executed
// var x = 6;  //I will not be executed
```

### JavaScript Identifiers

Identifiers are names.

In JavaScript, identifiers are used to name variables (and keywords, and functions, and labels).

The rules for legal names are much the same in most programming languages.

In JavaScript, the first character must be a letter, or an underscore (\_), or a dollar sign ($).

Subsequent characters may be letters, digits, underscores, or dollar signs.

> Numbers are not allowed as the first character. This way JavaScript can easily distinguish identifiers from numbers.

### JavaScript is Case Sensitive

All JavaScript identifiers are case sensitive.

The variables lastName and lastname, are two different variables:

```js
var lastname, lastName;
lastName = 'DSC';
lastname = 'KWASU';
```
