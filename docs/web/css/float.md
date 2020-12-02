---
id: float
title: Structuring a page with Float
sidebar_label: Float
slug: /css/float
---

The **float** property places an element on the left or right side of it's parent-container, thus allowing the text and inline elements to wrap around it 

The syntax (values and property)

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;
```
### Float values

**left**: The element must float on the left side of its containing block.
**right**: The element must float on the right side of its containing block.
**none**: The element must not float.
**inline-start**: The element must float on the start side of its containing block. That is the left side with ltr(left-to-right) scripts, and the right side with rtl(right-to-left) scripts.
**inline-end**: The element must float on the end side of its containing block. That is the right side with ltr scripts, and the left side with rtl scripts.


### Clearing floats

The **clear** property sets whether an element must be moved blow floating elements that precedes it.
check these [examples](https://developer.mozilla.org/en-US/docs/Web/CSS/clear) on clearing floats to properly understand the property.


### Example

The code snippets below, gotten from [MDN](https://developer.mozilla.org) illustrates an example of floats in CSS. Try typing or cpoy the snippet into your favourite code editor to see the illusration.

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Morbi tristique sapien ac erat tincidunt, sit amet dignissim
     lectus vulputate. Donec id iaculis velit. Aliquam vel
     malesuada erat. Praesent non magna ac massa aliquet tincidunt
     vel in massa. Phasellus feugiat est vel leo finibus congue.</p>
</section>
```

```css
section {
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```