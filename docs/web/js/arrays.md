---
id: arrays
title: Arrays and String Data Types
sidebar_label: Arrays
slug: /js/arrays
---

### Let's get started

The **Array** object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

> Syntax
> Use the following syntax to create an Array object −

```js
var fruits = new Array('apple', 'orange', 'mango');
```

The Array parameter is a list of strings or integers. When you specify a single numeric parameter with the Array constructor, you specify the initial length of the array. The maximum length allowed for an array is 4,294,967,295.

You can create array by simply assigning values as follows −

```js
var fruits = ['apple', 'orange', 'mango'];
```

You will use ordinal numbers to access and to set values inside an array as follows:

- fruits[0] is the first element
- fruits[1] is the second element
- fruits[2] is the third element
  constructor
  Returns a reference to the array function that created the object.

### Array Properties

Here is a list of the properties of the Array object along with their description.

| **Sr. NO** |                                       **Description**                                        |
| :--------- | :------------------------------------------------------------------------------------------: |
| 1.         |     **constructor**: Returns a reference to the array function that created the object.      |
| 2.         |      **index**: The property represents the zero-based index of the match in the string      |
| 3.         |  **input**: This property is only present in arrays created by regular expression matches.   |
| 4.         |                   **length**: Reflects the number of elements in an array.                   |
| 5.         | **prototype**: The prototype property allows you to add properties and methods to an object. |
