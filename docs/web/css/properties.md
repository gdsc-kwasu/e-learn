---
id: properties
title: Units, Measurements and colors
sidebar_label: Units
slug: /html/css-properties
---

In CSS there are different units for setting the length (width, height, padding, margin, font-size etc) of an element.

### Absolute Lengths
The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

| Units | Description                  |
|-------|------------------------------|
| cm    | centimeters                  |
| mm    | millimeters                  |
| in    | inches (1in = 96px = 2.54cm) |
| px    | pixels (1px = 1/96th of 1in) |
| pt    | points (1pt = 1/72 of 1in)   |
| pc    | picas (1pc = 12 pt)          |

**Pixels** (px) are relative to the viewing device. For low-dpi (device pixels) devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.

### Relative Lengths
Relative length units specify a length relative to another length property. Relative length units scale better between different rendering medium.

| Units | Description                                                                                |
|-------|--------------------------------------------------------------------------------------------|
| em    | Relative to the font-size of the element (2em means 2 times the size of the current  font) |
| mm    | Relative to the x-height of the current font (rarely used)                                 |
| ch    | Relative to the width of the "0" (zero)                                                    |
| rem   | Relative to font-size of the root element                                                  |
| vh    | Relative to 1% of the height of the viewport                                               |
| vw    | Relative to 1% of the width of the viewport                                                |

The **em** and **rem** units are practical in creating perfectly scalable layout!

The viewport respresent the current width of the browser. If the viewport is 50cm wide, 1vw = 0.5cm

To read more about the units in css, click [here](https://www.w3schools.com/cssref/css_units.asp)