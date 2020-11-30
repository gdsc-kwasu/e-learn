---
id: applying-css
title: Different ways to apply CSS to an HTML document
sidebar_label: Applying CSS
slug: /css/applying-css
---

When applying CSS to an HTML document or a webpage, there are different approch that can be taken for it to be accomplished. 

Below are some of the approaches.

- [Inline Styling/application](#inline)
- [Embedded Styling](#embedded-styling)
- [External Styling](#external-styling)

### Inline Styling/application

This method of styling invloves the applicationf of CSS snippets/code blocks in between the html tags of an element. This approah takes place within the HTML file. 

The example below illustrates inline-styling. The snippet shows a `div` element, whoose background color is changed to green.

```html
<html>
    <head>
        <title>Inline</title>
    </head>
    <body>
        <div style="background-color: green";></div>
    </body>
</html>
```

### Embedded Styling

Embedded styling involves the process of adding CSS to your HTML document, but, instead of writing the styles in between individual elements in the HTML file, you would place all your styles inside a ```<style>``` element, in the `<head>` tag

The snippet below illustrates embedded styling

```html
<html>
    <head>
        <title>Inline</title>
        <style>
            div {
                background-color: green;
                height: 40px;
                width: 100px;
            }
        </style>
    </head>
    <body>
        <div>This is a green box</div>
    </body>
</html>
```
### External styling

This method or approach involves the linkage of an external stylesheet to your HTML document or webpage. For you to have an external stylesheet you would start by creating a new css file. Let's call it `styles.css` When that has been created. all you need to do is link it or reference it inside the HTML document. The approach applies to adding the external stylesheet to your HTML document as you did for the [embedded styling](#embedded-styling)

To place the external stylesheet in the HTML document, the snippet below iluustrates it.

```html
<link rel="stylesheet" src="styles.css" />
```

Going back to what you've already learnt in HTML, the `rel` attribute simply connotes the relationship of the type of file you are trying to link. Since the file that we're trying to reference is a stylesheet, therefore the attribute will be equal to a stylesheet `rel="stylesheet"`. If it were to be an icon or an image, the attribute will be equal to an icon/image `rel="icon/image"`.

The `src` attribute represents path to the file that you're are trying to reference or link. You can read more on [path-traversing](#link-to-path-traversing) to better understand the linking or referencing of files 