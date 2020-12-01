---
id: transitions
title: CSS Transitions and Animation
sidebar_label: Animation
slug: /css/animation
---

### Intro

**CSS transitions** provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.


### Which CSS properties can be transitioned?

The Web author can define which property has to be animated and in which way. This allows the creation of complex transitions. As it doesn't make sense to animate some properties, the list of animatable properties is limited to a finite set.


- Note: The set of properties that can be animated is changing as the specification develops.
- The auto value is often a very complex case. The specification recommends not animating from and to auto. Some user agents, like those based on Gecko, implement this requirement and others, like those based on WebKit, are less strict. Using animations with auto may lead to unpredictable results, depending on the browser and its version, and should be avoided.



Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.

The transition property is a shorthand property used to represent up to four transition-related longhand properties:


### Defining transitions


**CSS Transitions** are controlled using the shorthand transition property. This is the best way to configure transitions, as it makes it easier to avoid out of sync parameters, which can be very frustrating to have to spend lots of time debugging in CSS.


````
.example {
    transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
}

````


```transition-property```

Specifies the name or names of the CSS properties to which transitions should be applied. Only properties listed here are animated during transitions; changes to all other properties occur instantaneously as usual.


```transition-duration```

Specifies the duration over which transitions should occur. You can specify a single duration that applies to all properties during the transition, or multiple values to allow each property to transition over a different period of time.

```transition-duration: 0.5s``` ```transition-duration: 1s```

You can see the code and preview on how the transition duration works 
[here](https://css-tricks.com/almanac/properties/t/transition-duration/)

You can see the code and preview on how the transition property works  [here](https://css-tricks.com/almanac/properties/t/transition-property/)   


```trasition-timing-function```

Specifies a function to define how intermediate values for properties are computed. Timing functions determine how intermediate values of the transition are calculated. Most timing functions can be specified by providing the graph of the corresponding function, as defined by four points defining a cubic bezier. You can also choose easing from Easing Functions Cheat Sheet.


```transition-timing-function: ease``` ```transition-timing-function: linear```

You can see the code and preview on how the transition timing fucntion works 
[here](https://css-tricks.com/almanac/properties/t/transition-timing-function/)


```trasition-delay```

Defines how long to wait between the time a property is changed and the transition actually begins.


```transition-delay: 0.5s``` ```transition-delay: 1s```



```
div {
  transition: background-color 0.5s ease;
  background-color: red;
}
div:hover {
  background-color: green;
}

```


### EXAMPLE

**Simple example**

This example performs a four-second font size transition with a two-second delay between the time the user mouses over the element and the beginning of the animation effect:

```
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}

```

**Multiple animated properties example**

```
.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.box:hover {
    background-color: #FFCCCC;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
}

```

***When property value lists are of different lengths***

```

div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
}

```

This is treated as if it were:

```

div {
  transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s, 3s, 5s;
}

```


To read more about Css transition, click [here](https://learn.shayhowe.com/advanced-html-css/transitions-animations/)
