---
id: css-task
title: Let's add some colors to our Login/Register page
sidebar_label: CSS Task
slug: /css/css-task
---

### Basic form styling

Forms are notoriously tricky to style nicely. After writing your code in the HTML task, you'll see that it looks rather ugly. So for the moment we will just get you to add some CSS to make it look OK.

Now create a CSS file, and reference it in your html file using the code:

```
    <link rel="stylesheet" href="Name of your CSS file">
```

### Updating our html code

Before we start writing our styles, we need to select some of our tags using `class` in our html code.

```
<form action="" method="post">
    <div class="container">
            <h3 class="title">Login Page</h3>
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

   <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>

</form>
```

Update your form code to look like the above.

### Writing your Styles

After updating your form, go back to your CSS file and add the following Styles:

```
body {font-family: Arial, Helvetica, sans-serif;}
form {border: 3px solid #f1f1f1;}
.title{
    text-align: center;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
  border: 7px;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

.forgotPassword {
    background-color:#f1f1f1
}
```

### Adding Media Queries

We Use Media queries for Change styles on extra small screens or larger screen size. It can also be use to do so many things like:

- Width and height of the viewport
- Width and height of the device
- Orientation (is the tablet/phone in landscape or portrait mode?)
- resolution

  Manily, using media queries is a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).

So We will use Media Queries to change styles for `span` and `cancel button` on extra small screens.

```
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
```

Save and reload, you'll see that your form should look much less ugly.
