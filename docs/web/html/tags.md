---
id: tags
title: HTML tags and attributes
sidebar_label: Tags and Atrtributes
slug: /html/tags
---

### HTML tags and Attributes

An HTML element is defined by a start tag, some content, and an end tag.

#### HTML Elements

An HTML element is usually composed by two tags: the opening tag and the closing tag. An opening tag consists of the element's name enclosed by the lesser-than "<" and greater-than ">" signs. The closing tag is constructed like the opening tag but, in this case, the element's name is preceded by a slash ("/"). In the following example, you'll see the opening and closing tags for the p element.

> syntax

```html
<p>This is a paragraph</p>
```

The content of an element is, generally speaking, is whatever falls in between its opening and closing tags.

#### HTML Attributes

HTML attributes provide additional information about HTML elements.

- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"

### The href Attribute

The <mark> a </mark> tag defines a hyperlink. The href attribute specifies the URL (Universal Resource Locator) of the page the link goes to:

> syntax

```html
<a href="https://www.dsckwasu.club">Visit DSC KWASU</a>
```

### The src Attribute

The ```<img />``` tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed:

> syntax

```html
<img src="box.jpg" />
```

There are two ways to specify the URL in the src attribute:

- **Absolute URL** - Links to an external image that is hosted on another website. Example: src="https://www.DSCKwasu.com/images/logo.jpg".

Notes: External images might be under copyright. If you do not get permission to use it, you may be in violation of copyright laws. In addition, you cannot control external images; it can suddenly be removed or changed.

- **Relative URL** - Links to an image that is hosted within the website. Here, the URL does not include the domain name. If the URL begins without a slash, it will be relative to the current page. Example: src="logo.jpg". If the URL begins with a slash, it will be relative to the domain. Example: src="/images/logo.jpg".

Tip: It is almost always best to use relative URLs. They will not break if you change domain.

### The width and height Attributes

The <mark> img </mark> tag should also contain the width and height attributes, which specifies the width and height of the image (in pixels):

> syntax

```html
<img src="logo.jpg" width="300" height="300" />
```

### The alt Attribute

The required alt attribute for the <mark>img</mark> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to slow connection, or an error in the src attribute, or if the user uses a screen reader.

> syntax

```html
<img src="logo.jpg" alt="DSC KWASU Logo" />
```

### The style Attribute

The style attribute is used to add styles to an element, such as color, font, size, and more.

> syntax

```html
<p style="color:red;">This is a paragraph.</p>
```

### The lang Attribute

You should always include the <mark>lang</mark> attribute inside the **html** tag, to declare the language of the Web page. This is meant to assist search engines and browsers.

The following example specifies English as the language:

> syntax

```html
<!DOCTYPE html>
<html lang="en-US">
  <body>
    ...
  </body>
</html>
```

### The title Attribute

The title attribute defines some extra information about an element.
The value of the title attribute will be displayed as a tooltip when you mouse over the element:

> syntax

```html
<p title="I am a tooltip">This is a paragraph</p>
```

## We Suggest: Always Use Lowercase Attributes

The HTML standard does not require lowercase attribute names.

The title attribute (and all other attributes) can be written with uppercase or lowercase like title or TITLE.

## We Suggest: Always Quote Attribute Values

The HTML standard does not require quotes around attribute values.

## Single or Double Quotes?

Double quotes around attribute values are the most common in HTML, but single quotes can also be used.

In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:
