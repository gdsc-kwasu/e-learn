---
id: modernizer
title: Modernizer
sidebar_label: Using Modernizer
slug: /html/modernizer
---

### Using Modernizer

Modernizer is a JavaScript library that detects which HTML5 and CSS3 features your visitor’s browser supports. In detecting feature support, it allows developers to test for some of the new technologies and then provide fallbacks for browsers that do not support them. This is called feature detection and is much more efficient than browser sniffing.

> Modernizer is very useful for detecting CSS3 support, but this article will focus on HTML5. The principles are essentially the same, though.

#### Getting Started.

First, you need an HTML document.

```html
<!DOCTYPE html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello Modernizr</title>
    <script src="modernizr.js"></script>
  </head>
  <body></body>
</html>
```
