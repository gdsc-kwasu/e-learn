---
id: structure
title: Basic page structure
sidebar_label: Page structure
slug: /html/structure
---

### Basic page structure

Before you can start adding content to your document, there's a basic structure you need to set up in your file. This structure isn't only required for your document to be compliant but will also allow you to provide useful information about your document. The basic structure of any HTML document consists of the following sections or elements:

- The DTD (!DOCTYPE declaration).
- The main container (html element).
- The head section (head element).
- The body section (body element).

### The Doctype Declaration

Every HTML document must begin with a basic declaration that identifies its type. This is a very useful measure that inform browsers beforehand, what type of document they are about to process, allowing them to adjust their processing mechanisms accordingly.

The DTD is inserted usign a special tag (!DOCTYPE) that takes a particular form for each document type. This declaration can only be present at the begining of the document. The following example shows the DTD for an HTML5 document:

> syntax

```html
<!DOCTYPE html>
```

Unless you're writing documents for a very particular scenario, this is the declaration you're going to use. With the arrival and establishment of HTML5 as the web standard, other DTDs have lost importance and sunk into oblivion.

### THE MAIN CONTAINER: The HTML Element

Having placed the DTD (!DOCTYPE) right at the top of the document, it's time to create the main container: a place where the whole document (except the DTD) will fall into. This container is inserted with the html element, and besides acting as a container, it provides a good chance to define the default language used by the document, through the global attribute lang.

The following shows the example to shows the structure of the main container and indicates where all element of documents should be placed.

> syntax

```html
<!DOCTYPE html>
<html>
  ...Document's Elements
</html>
```

The content of this element can be further divided into two sections: the **head** and **body**.

### The Document Head

The head section is a container for metadata about the document. This metadata can be classified in five categories according to the element used.

- **The document's title:** describes briefly the subject treated in the document. This is a required item and is inserted with the <mark> title </mark> element.

- **Style declarations:** groups style definitions used to set presentational attributes for the elements in the document. It's inserted with the <mark> style </mark> element.

- **Relational information:** indicates resources that are somehow related to the document. It's inserted with the <mark>link</mark> element.

The following examples shows the declaration of the **head** block of a document with some of the elemenets describe above.

> syntax

```html
<head>
  <title>MY FIRST WEBSITE</title>
  <style>
    table {
      width: 100%;
      border-color: black;
    }
  </style>
  <link rel="index" href="../css/style.css" />
</head>
```

### The Document Body

The <mark> body </mark> of a document is simply the container for its renderable part. This is the place to start writing your content (adding headings, paragraphs, images, etc.) and the section your visitors will immediately access when the page is loaded.

The vast majority of elements in HTML can be used inside this container. For example, you could place here all the elements created in the practice of the previous tutorial (Tags and attributes) to have a more complete version of that document.

> syntax

```html
<body>
  Hello World, Welcome to my website!!!
</body>
```

### PRATCICE

You've really done a great work by keeping up, practice more with all you've learnt so far. Try this:

> sytnax

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>MY FIRST PAGE</title>
  </head>
  <body>
    Hello World, today I woke up to learn HTML.
  </body>
</html>
```
