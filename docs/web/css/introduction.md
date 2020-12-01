---
id: introduction
title: CSS introduction
sidebar_label: Introduction to CSS
slug: /css/css-introduction
---

### Let's get started:

### What is CSS?

- **CSS** stands for **C**ascading **S**tyle **S**heets.
- CSS describes **how HTML elements are to be displayed on screen, paper, or in other media**.
- CSS **saves a lot of work**. It can control the layout of multiple web pages all at once.
- External stylesheets are stored in CSS **files**.

### Why Use CSS?

**CSS** is used to define styles for your **web pages**, including the **design**, **layout** and variations in display for different **devices** and **screen sizes**.

### CSS Syntax

A CSS comprises of style rules that are interpreted by the browser and then applied to the corresponding elements in your document.
A style rule set consists of a selector and declaration block.

```
h1 {                     //Where h1 is the Selector
     Color: red;
     margin: blue;      // Margin is the Property and red is the value.
}
```

- The **selector** points to the HTML element you want to style.
- The **declaration** block consist of one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.
- A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

```
p {
  color: red;
  text-align: center;
}
```

In the example above all `<p>` elements will be center-aligned, with a red text color.

### CSS Selectors

**CSS** selectors are used to **"find"** (or select) **HTML** elements based on their **element name, id, class, attribute,** and more.

### The element Selector

The element selector selects elements based on the element name.

You can select all `<p>` elements on a page like this (in this case, all `<p>` elements will be center-aligned, with a red text color).

```
p {
  text-align: center;
  color: red;
}
```

### The id Selector

- The `id` selector uses the id attribute of an **HTML** element to select a specific element.
- The `id` of an element should be unique within a page, so the id selector is used to select one unique element!
- To select an element with a specific `id`, write a hash (#) character, followed by the id of the element.

The style rule below will be applied to the **HTML** element with **id ="para1"**:

```
#para1 {
  text-align: center;
  color: red;
}

Note: An id name cannot start with a number!
```

### The class Selector

- The class selector selects elements with a specific class attribute.

- To select elements with a specific class, write a period **(.)** character, followed by the name of the class.

- In the example below, all **HTML** elements with class="center" will be red and center-aligned:

```
.center {
  text-align: center;
  color: red;
}

Note: A class name cannot start with a number!
```

### CSS Comments

- Comments are used to explain the code, and may help when you edit the source code at a later date.

- Comments are ignored by browsers.

- A CSS comment starts with /_ and ends with _/. Comments can also span multiple lines:

```
p {
  color: red;
  /* This is a single-line comment */
  text-align: center;
}
```
