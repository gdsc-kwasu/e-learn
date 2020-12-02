---
id: optimization
title: Optimizing CSS Files for production
sidebar_label: Optimization
slug: /css/optimization
---

### Why do you even need to optimize your CSS files?

The optimization of your CSS  is the process of modifying your stylesheets to make some aspect of it work more efficiently or use fewer resources.

When you optimize your stylesheets, you give your web-app or webpages the ability to load resources faster.

### Ways of optimizing your CSS files

#### Minify CSS

Minifying CSS is simply compressing your CSS file into a newer file with minimal white space. You don’t have to do it by hand of course, as there are automatic compressors available on the Internet. Here is one such [CSS minifier](http://www.cssminifier.com/)

#### Reduce unnecessary code
Another trick to improve page load speed is reducing unnecessary CSS code. This can be achieved by checking for redundant or duplicate CSS code using a tool like this one: http://unused-css.com/

#### Put CSS at top and JS at bottom
It is good practice to put your CSS stylesheet at the top (between <head> </head> tags) and your JavaScript at the bottom. Ensure that your CSS code is loaded before the rest of the page. A reason for JavaScript being placed at the bottom is its increased size and its subsequent effect on website speed.

#### Splitting CSS files
You can split CSS files, i.e. various stylesheets, if you’re targeting multiple browsers like IE, Chrome or Firefox. For example, instead of trying out CSS hacks in a single stylesheet, you can use IE conditional statements to load a different stylesheet (e.g. targeting IE6 for instance). This way, you wouldn’t be loading up IE code while using Chrome, and you would reduce the CSS file size by a great margin.

#### Reduce Whitespace
You should always try to reduce the whitespace in your CSS because increased white space can take up lots of bytes and can be the difference between a faster and a slower site in very large scale projects.

#### Document your code
You should document your code wherever possible. Using CSS comments like /* Comment here */ can help you identify useless code on many occasions. Even though adding comments takes up space, it is easily negligible.

 