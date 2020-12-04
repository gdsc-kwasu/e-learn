---
id: html-task
title: Building a Login/Register page.
sidebar_label: HTML task
slug: /html/html-task
---

### Let's build a Login page

Before starting to code, it's always better to step back and take the time to think about your form. Designing a quick mockup will help you to define the right set of data you want to ask your user to enter. From a user experience (UX) point of view, it's important to remember that the bigger your form, the more you risk frustrating people and losing users. Keep it simple and stay focused: ask only for the data you absolutely need.

### Implementing our form HTML

Ok, let's have a go at creating the HTML for our form. We will use the following HTML

`<form>`, `<label>`, `<input>`, and `<button>`.

All forms start with a `<form>` element, like this:

```
<form action="" method="post">

</form>
```

This element formally defines a form. All of its attributes are optional, but it's standard practice to always set at least the **action** and **method** attributes:

- The action attribute defines the location (URL) where the form's collected data should be sent when it is submitted.
- The method attribute defines which HTTP method to send the data with (usually get or post).

For now, add the above `<form>` element into your HTML` <body>`.

### The `<label>` and `<input>` elements

Our Login form is not complex: the data entry portion contains three text fields, each with a corresponding `<label>`:

```html
<form action="" method="post">
    <div class="container">
        <h3>Login Page</h3>
        <p>
            <label for="uname">
                <b>Username</b>
            </label>
            <input type="text" placeholder="Enter Username" name="uname" required>
        </p>
        <p>
            <label for="psw">
                <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required>
        </p>
        <p>
            <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </p>
    </div>
</form>
```

Update your form code to look like the above.

**Note**:` the use of the for attribute on all <label> elements, which takes as its value the id of the form control with which it is associated — this is how you associate a form control with its label.`

There is great benefit to doing this — it associates the label with the form control, enabling mouse, trackpad, and touch device users to click on the label to activate the corresponding control, and it also provides an accessible name for screen readers to read out to their users.

### The `<button>` element

The markup for our form is almost complete; we just need to add a button to allow the user to send, or "submit", their data once they have filled out the form. This is done by using the `<button>` element.

```
<p>
    <button type="submit">Send your message</button>
</p>
```

The `<button>` element also accepts a type attribute — this accepts one of three values: submit, reset, or button.

- A click on a submit button (the default value) sends the form's data to the web page defined by the action attribute of the `<form>` element.

- A click on a reset button resets all the form widgets to their default value immediately. From a UX point of view, this is considered bad practice, so you should avoid using this type of button unless you really have a good reason to include one.

- A click on a button button does... nothing! That sounds silly, but it's amazingly useful for building custom buttons — you can define their chosen functionality with JavaScript.

### Putting our Codes Together

Putting all our codes together, Let see what we have.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Paget</title>
</head>
<body>

    <form action="" method="post">

    <div>
        <h3>Login Page</h3>
        <p>
            <label for="uname">
                <b>Username</b>
            </label>
            <input type="text" placeholder="Enter Username" name="uname" required>
        </p>
        <p>
            <label for="psw">
                <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required>
        </p>
        <p>
            <p>
            <button type="submit">Send your message</button>
            </p>
        </p>
        <p>
            <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
            </label>
        </p>
    </div>

    <div >
        <button type="button forgotPassword">Cancel</button>
        <span>Forgot <a href="#">password?</a></span>
    </div>

    </form>

</body>
</html>

```

**Congratulation**, we have finish writing our form's HTML code, try saving it and view it in your browser.
