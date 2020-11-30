---
id: flexbox
title: Structuring a page with Flexbox
sidebar_label: Flexbox
slug: /css/flexbox
---

### Intro

As you know, making your layouts stand out uniquely and aesthetic requires your ability to be able to understand css properties. In this module, we are going to take a look at **Flexbox**, a CSS approach to creating responsive layouts on the fly.

### So, what the hell is Flexbox?

Flexbox, usually referred to as the Flexbox Module was designed as a one-dimensional layout model, and as a method that could offer space distribution between items in an interface and powerful alignment capabilities. (MDN)

Flexbox takes into consideration, the parent container, it could be a `div` or any element, so long as it houses other elements which we refer to as the `flex-items`. The properties that are neccesary for these layouts are what we'd be looking at very soon.

### Flex properties

The flex properties are literally the same thing as css properties applied to elements. For the `flex-container` (i.e the parent element), it defines the a container that is flexible, which gives a **flex** context for all it's direct children (elements)

```css
.container {
    display: flex;
    // the value could also be /*inline-flex*/ 
}
```
### flex-direction

A flex direction is a property that establishes the main-axis that flex-items in the flex-container are placed. The snippet below shows the values that can be assigned to the `flex-direction` property.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
- **row** is the default value. It places the flex-items in a flex-container from left to right.
- **row-reverse** is almost the same thing as the **row** value, but in a reversed order. i.e from right to left.
- **column**: same as row but top to bottom
- **column-reverse**: same as row-reverse but bottom to top


### flex-wrap

Flex items by default would always try to fit into one line, they'd always try to stay on the horizontal level. The more items you add in the flex container, the more the items begin th span the horizontal width of the browser.

But with the `flex-wrap` property you can change that and allow the items to wrap or collapse to the brwoser's width or the width that you have set for the container.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- **nowrap**: is the default value that allows all flex-items to be on one line.
- **wrap**: allows flex-items to wrap onto multiple lines, from top to bottom.
- **wrap-reverse**: this property allows the flex-items to wrap onto multiple lines from bottom to top.

### flex-flow

This property is a shorthand representation of the `flex-direction` and `flex-wrap` property. The defaukt value is `row nowrap`

```css
.container {
  flex-flow: column wrap;
}
```

You can read more on Flexbox and it's properties [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

There is also a visual guide to the flex-wrap property [here](https://css-tricks.com/almanac/properties/f/flex-wrap/)