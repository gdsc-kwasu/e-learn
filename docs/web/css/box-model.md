---
id: box-model
title: Understanding the box model
sidebar_label: The box model
slug: /css/box-model
---

<<<<<<< HEAD
### Let's get started
=======
### Intro

One of the best ways to control your website's design and functionality is CSS.

CSS — or Cascading Style Sheets — enables you to make stylistic changes to your web page layouts and to the elements on those pages to ultimately improve your site's look and feel. Before you do so, you need to first understand one of the most fundamental principles of web design: the CSS box model.

### What is the box model in CSS?

The box model in CSS is a set of rules that determine how your web page is rendered on the internet. In this model, a rectangular box is generated for HTML elements. Each is laid out according to their dimension, type, positioning, relationship to other elements, and external factors like viewport size. This box consists of content, padding, a border, and margin.

`Kindly preview this code`

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #flex {
        display: flex;
        text-align: center;
      }
      #content {
        background-color: #ffffff;
        width: 300px;
        padding: 30px;
        margin: 20px;
        border: 2px dotted gray;
      }
      #padding {
        background-color: #eeeeee;
        padding: 30px;
        margin: 20px;
      }
      #border {
        background-color: #fff469;
        padding: 30px;
        margin: 20px;
      }
      #margin {
        background-color: #eeeeee;
        border: 15px solid green;
        padding: 30px;
        margin: 20px;
        border: 2px dotted gray;
      }
    </style>
  </head>
  <body>
    <div id="flex">
      <div id="margin">
        Margin
        <div id="border">
          Border
          <div id="padding">
            Padding
            <div id="content">Content</div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

This means any web page you see is actually made up of elements wrapped in rectangular boxes and arranged in relation to each other. These elements can exist beside, above, below, and within each other, depending on the type of element they are.

There are two types of HTML elements: block-level elements and inline elements. Let's take a closer look at each below.

### Block-Level Elements

By default, block-level elements start on a new line and take up 100% of the space available — which might be the full width of the viewport or of its container if it’s inside another element. Since they start on a new line by default, block-level elements break the flow of the document.

As mentioned before, block-level elements can contain other elements, including inline elements and other block-level elements. For example, a div element can contain a heading, paragraph, or another div element.

With the padding, border, and margin properties applied to a block-level element, other elements will be forced away from the box around the element. As a result of this — and the fact that they span the full width of their container — block-level elements take up more space than inline elements and can therefore create larger structures.

Of course, the width and height of these elements can be specified in CSS to take up less space.

Block-level elements include the following:

```html
<p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>,
<ol>, <ul>, <pre>, <address>, <blockquote>,
<dl>, <div>, <fieldset>, <form>, <hr>,
<nonscript>, and <table>.
```

### Inline Elements

By default, inline elements do not begin on a new line or take up the full width of the viewport. In fact, width and height properties do not apply. Unlike block-level elements, inline elements do not break the flow of the document.

Inline elements can contain other inline elements and data, but not block-level elements. For example, a paragraph element can contain an emphasis element — but not a heading element.

If the padding, border, and margin properties are applied vertically, then other inline boxes will not be forced away from the box around the element. If the padding, border, and margin properties are applied horizontally however, then other inline elements will be forced away from the box around the element.

Inline level elements include:

```html
<b
  >,
  <big
    >,
    <i
      >,
      <small
        >,
        <tt
          >,
          <abbr
            >,
            <acronym
              >,
              <cite
                >,
                <code
                  >,
                  <dfn
                    >,
                    <em
                      >,
                      <kbd
                        >,
                        <strong
                          >,
                          <samp>, and <var> — among others.</var></samp></strong
                        ></kbd
                      ></em
                    ></dfn
                  ></code
                ></cite
              ></acronym
            ></abbr
          ></tt
        ></small
      ></i
    ></big
  ></b
>
```

### CSS Box Model Examples

Now, let’s examine the CSS box model in action with these CSS box model examples. Each example focuses on a specific layer of the box, moving from the inside out. We'll start with the content area.

### Content Area Example

The innermost rectangle, known as the content area, may contain text or other visual elements.

Its dimensions are the content width and content height. When specified, the width and height attributes determine the content edge or perimeter of the content box. Often, the width and height aren't specified so the rendered content determines the content edge. In other words, the content area is only as wide and as at all as it needs to be to hold the content, which might be as little as one word. If the element is a block element, then the content edge can also be set with the min-width, max-width, min-height, and max-height properties.

Let's look at an example of a standard CSS box model.

In a standard CSS box model, the height and width attribute are specified. This determines the size of the content area. If the padding, border, and margin properties are also specified, then they must be added to the width and height to calculate the total size of the element.

Say you specify the content width to 400px and add 30px padding, 10px border, and 10px margin. Then the total width of the box is 500. You get that total by adding the content-width, padding-left and padding-right, border-left and border-right, and margin-left and margin-right (400 + 30 + 30 + 10 + 10 + 10 + 10). The total height of the box is 250. You get that by adding the content-height, padding-top and padding-bottom, border-top and border-bottom, and margin-top and margin-bottom (150 + 30 + 30 + 10 + 10 + 10 + 10).

Here's the CSS:

```css
div {
  background-color: #dddddd;
  width: 400px;
  height: 150px;
  padding: 30px;
  border: 10px solid #ff00ff;
  margin: 10px;
}
```

Here's the HTML:

```html
<h2>The Standard CSS Box Model</h2>

<p>
  In a standard CSS box model, the height and width attribute is specified. This
  determines the size of the content area. If the padding, border, and margin
  properties are also specified, then they will be added to the width and height
  to calculate the total size of the element.
</p>

<div>
  This text makes up the content layer of the box. Since I've added 30px
  padding, 10px border, and 10px margin, the total width of the box is 500. You
  get that by adding the content-width, padding-left and padding-right,
  border-left and border-right, and margin-left and margin-right (400 + 30 + 30
  + 10 + 10 + 10 + 10). The total height of the box is 250. You get that by
  adding the content-height, padding-top and padding-bottom, border-top and
  border-bottom, and margin-top and margin-bottom (150 + 30 + 30 + 10 + 10 + 10
  + 10).
</div>
```

Here's the result: run the code to see the result

### Padding Example

**Padding** is the space between the border and content of an element. Padding is an important element in web design because it helps make content more visible and readable.

An element's padding can be defined with the following properties: padding-top, padding-bottom, padding-left, padding-right, or the shorthand property padding.

If you'd like to add the same amount of padding on all four sides of the content area, then you can set the shorthand padding property with one value. If you'd like to set different amounts of padding, then you can use the long-form method. Let's use both methods in the example below.

Here's the HTML:

```html
<h2>The Alternative CSS Box Model</h2>

<p>
  In the alternative CSS box model, a defined width or height attribute will
  determine not only the size of the contetn area but the size of the border,
  padding, and content areas of a box. If specified, thte margin will still have
  to be added to calculate the total size of the element.
</p>

<div id="shorthand">
  Since I've set the box-sizing property to "border-box," the total width of the
  element will be 320px (the set width + margin-left and margin-right). Since
  the height of the div has not been explicitly defined, the height is the
  distance between the top of the topmost line box and the bottom of the
  bottommost line box. In other words, its the height of the rendered text.
</div>
<div id="longform">
  A div with almost the same CSS applied to it — except for the padding
  property. For this div, different padding is applied to each of its four sides
  rather than equal padding applied to all sides.
</div>
```

Here's the CSS:

```css
#shorthand {
  background-color: #dddddd;
  box-sizing: border-box;
  width: 300px;
  padding: 30px;
  border: 10px solid #ff00ff;
  margin: 10px;
}
#longform {
  background-color: #dddddd;
  box-sizing: border-box;
  width: 300px;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 80px;
  padding-right: 60px;
  border: 10px solid #ff00ff;
  margin: 10px;
}
```

Here's the result: run to view the result

### Borders Example

The border property lets us add and style a line around the content padding area. The thickness, color, style of this line can be defined by the border-width, border-color, and border-style properties, or you can use the shorthand border property to define all three. Border-style values include solid, dotted, dashed, double, groove, ridge, and none.

The dimensions of the border area are the border-box width and border-box height. When specified, the width and height attributes determine the perimeter of the border area. If the box-sizing property is set to border-box, you can also define the border size with min-width, max-width, min-height, and max-height.

Let's use the max-width and min-height properties in the example below. We'll also use as many properties and values as possible to show the versatility of the border area.

Here's the CSS:

```css
h2 {
  box-sizing: border-box;
  max-width: 300px;
  border: 2px solid #a00081;
  padding: 5px;
}
p {
  box-sizing: border-box;
  min-height: 100px;
  border: 2px solid #f00081;
  padding: 5px;
}
blockquote {
  background-color: #dddddd;
  box-sizing: border-box;
  width: 300px;
  padding: 30px;
  border-right: 2px dashed #000000;
  border-left: 10px groove #8866aa;
  border-top: 5px dotted #aaaaaa;
  border-bottom: 20px solid #2266aa;
  margin: 10px;
}
```

Here's the HTML:

```html
<h2>The Borders CSS Box Model</h2>

<p>
  In this CSS box model, a defined max-width constrains the content width of the
  heading and a defined min-height constrains the box height so that it's taller
  than the rendered text.
</p>

<blockquote>
  Using CSS, I can style each side of the border area of this blockquote to be
  unique. The border-right, border-left, border-top, and border-bottom
  properties are all defined with three values: the first defines its width, the
  second its style, and the third its color.
</blockquote>
```

Here's the result: run to view the result

### Margins Example

The margin is the empty space separating the element from its neighbors, and the outermost layer of the CSS box model. Its dimensions are the margin-box width and the margin-box height.

Its size can be defined by the following properties: the margin-left, margin-right, margin-top, margin-bottom properties or the shorthand margin property.

If the shorthand property is used, and only one value is defined, then it applies to all sides of the element. If two values are defined, then the first value represents the top and bottom margins and the second represents the right and left margins. If three values are defined, the first value represents the top margin, the second represents the left and right, and the fourth represents the bottom margin. If four values are defined, they represent the top, right, bottom, and left, respectively.

Before we dive into an example, you may realize that margins and padding seem similar. In case you get confused what the right option is for a certain element or layout, consider the following key differences between CSS margin and padding:

-Margin is the space outside of the border area, whereas padding is the space inside the border area.
-Margin backgrounds are always transparent, whereas the background of the padding area of a box is specified by the background property of the element.
-When increased, margins increase the gap between an element and any adjacent elements. When increased, padding increases the size of the element.
-In CSS, adjoining margins of two or more boxes can combine to form a single "collapsed" margin. While margin areas can collapse vertically, padding areas cannot.

_Box Model Without A Collapse Margin_

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #margin1 {
        box-sizing: border-box;
        border: 2px solid #cccccc;
        padding: 5px;
        margin-bottom: 100px;
      }
      #margin2 {
        box-sizing: border-box;
        border: 2px solid #aaaaaa;
        padding: 5px;
      }
    </style>
  </head>
  <body>
    <h2 id="margin1">The CSS Box Model without Collapsed Margin</h2>
    <p id="margin2">
      When two block elements are stacked on top of each other and one has its
      margin-bottom defined while the other has its marign-top defined, you
      might think the total vertical margin would be the sum of those values.
      But you'd be wrong.
    </p>
  </body>
</html>
```

Kindly preview

_Box Model With A Collapse Margin_

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      #collapse1 {
        box-sizing: border-box;
        border: 2px solid #cccccc;
        padding: 5px;
        margin-bottom: 60px;
      }
      #collapse2 {
        box-sizing: border-box;
        border: 2px solid #aaaaaa;
        padding: 5px;
        margin-top: 40px;
      }
    </style>
  </head>
  <body>
    <h2 id="collapse1">The CSS Box Model with Collapsed Margin</h2>
    <p id="collapse2">
      When two block elements are stacked on top of each other and one has its
      margin-bottom defined while the other has its marign-top defined, the
      total vertical margin is not the sum of those values. Instead, the
      adjoining margins combine into a single margin.
    </p>
  </body>
</html>
```

Kindly preview

To read more about Css box model, click [here](https://www.khanacademy.org/computing/computer-programming/html-css/css-layout-properties/pt/css-box-model)
>>>>>>> d05fd124de4a37b05860bda1b0e62ba5ee9fbb1b
