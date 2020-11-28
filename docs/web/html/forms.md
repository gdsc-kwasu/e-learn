---
id: forms
title: HTML Forms
sidebar_label: Forms
slug: /html/forms
---

### HTML Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing.

### The form Element

HTML Forms are required, when you want to collect some data from the site visitor. For example, during user registration you would like to collect information such as name, email address, credit card, etc.

A form will take input from the site visitor and then will post it to a back-end application such as CGI, ASP Script or PHP script etc. The back-end application will perform required processing on the passed data based on defined business logic inside the application.

There are various form elements available like text fields, textarea fields, drop-down menus, radio buttons, checkboxes, etc.

The HTML <mark>form</mark> tag is used to create an HTML form and it has following syntax −

> syntax

```html
<form>form element like input, textarea etc.</form>
```

### The Form Attribute

| **Sr. No** |                                                            **Attribute and Description**                                                             |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| 1.         |                                            **action:** Backend script ready to process your passed data.                                             |
| 2.         |                           **method:** Method to be used to upload data. The most frequently used are GET and POST methods.                           |
| 3.         | **target:** Specify the target window or frame where the result of the script will be displayed. It takes values like \_blank, \_self, \_parent etc. |

### HTML Form Controls

There are different types of form controls that you can use to collect data using HTML form −

- Text Input Controls
- Checkboxes Controls
- Radio Box Controls
- Select Box Controls
- File Select boxes
- Hidden Controls
- Clickable Buttons
- Submit and Reset Button
- Text Input Controls

#### There are three types of text input used on forms −

- **Single-line text input controls** − This control is used for items that require only one line of user input, such as search boxes or names. They are created using HTML **input** tag.

- **Password input controls** − This is also a single-line text input but it masks the character as soon as a user enters it. They are also created using HTMl **input** tag.

- **Multi-line text input controls** − This is used when the user is required to give details that may be longer than a single sentence. Multi-line input controls are created using HTML **textarea** tag.

- **Single-line text input controls** - This control is used for items that require only one line of user input, such as search boxes or names. They are created using HTML **input** tag.

#### Here is a basic example of a single-line text input used to take first name and last name:

> syntax

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Text Input Control</title>
  </head>

  <body>
    <form>
      First name: <input type="text" name="first name" />
      <br />
      Last name: <input type="text" name="last name" />
    </form>
  </body>
</html>
```

### Form Attribute Following is the list of attributes for input tag for creating text field.

| **Sr. No** |                                         **Attribute & Description**                                          |
| :--------- | :----------------------------------------------------------------------------------------------------------: |
| 1.         |       **type**: Indicates the type of input control and for text input control it will be set to text.       |
| 2.         | **name**: Used to give a name to the control which is sent to the server to be recognized and get the value. |
| 3.         |                 **value**: This can be used to provide an initial value inside the control.                  |
| 4.         |           **size**: Allows to specify the width of the text-input control in terms of characters.            |
| 5.         |    **maxlength:** Allows to specify the maximum number of characters a user can enter into the text box.     |

### Password input controls

This is also a single-line text input but it masks the character as soon as a user enters it. They are also created using HTML input tag but type attribute is set to password.

Example
Here is a basic example of a single-line password input used to take user password −

> syntax

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Password Input Control</title>
  </head>
  <body>
    <form>
      User ID: <input type="text" type="user_id" />
      <br />
      Password: <input type="password" type="password" />
    </form>
  </body>
</html>
```
