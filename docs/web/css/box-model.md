---
id: box-model
title: Understanding the box model
sidebar_label: The box model
slug: /css/box-model
---

## CSS Box Model

All **HTML** elements can be considered as boxes. In **CSS**, the term **"box model"** is used when talking about designs and layout.

The **CSS** box model is essentially a box that wraps around every **HTML** element. It consists of:

- Margins
- Borders
- Padding
- And the actual content.

The image below illustrates the box model.

```
    A CSS BOX MODEL IMAGE WILL BE HERE.

```

Explanation of the different parts of the box:

- **Content** - The content of the box, where text and images appear
- **Padding** - Clears an area around the content. The padding is transparent
- **Border** - A border that goes around the padding and content
- **Margin** - Clears an area outside the border. The margin is transparent.

  The box model allows us to add a border around elements, and to define space between elements.

```
div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}
```

### Width and Height of an Element

In order to set the **width** and **height** of an element correctly in all browsers, you need to know how the box model works.

Assume we want to style a `<div>` element to have a total width of 350px:

```
  div {
      width: 320px;
      padding: 10px;
      border: 5px solid gray;
      margin: 0;
  }
```

Here is the calculation:

```
  320px (width)
  + 20px (left + right padding)
  + 10px (left + right border)
  + 0px (left + right margin)
  = 350px
```

The total **width** of an element should be calculated like this:

Total element width = width + left padding + right padding + left border + right border + left margin + right margin

The **total height** of an element should be calculated like this:

Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin
