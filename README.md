# Dark Mode
A pure html and css library for dark mode in your website.

---

# Features
It has a smooth setting and also it changes via system settings aswell. Small, but useful.

---

# Usage
To use this library follow the steps below:

First, import the css with the following:
```html
<link rel="stylesheet" href="https://kk-designs.github.io/dark-mode/dark-mode.css">
```
Then you need the javascript with can be done similar to the css:
```html
<script src="https://kk-designs.github.io/dark-mode/dark-mode.js"></script>
```
<br>

Once your done with the imports your code looks something like this:
```html
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://kk-designs.github.io/dark-mode/dark-mode.css">
<script src="https://kk-designs.github.io/dark-mode/dark-mode.js"></script>
</head>
<body>
<!--Body content yet to be added-->
</body>
</html>
```
Now its time to add the last element; The button.
Add it in the body as the following:
```html
<button onclick='changeToDarkMode();'>Toggle dark mode</button>
```
And boom your done! See options and more below.

---

# Settings

Want to customize it? We'll we have some options for you. More options coming in the feature.

The only option we have right now is smooth change. It makes a trasistion so it doesn't look so abrupt. See the code below have to to get this:
```html
<button onclick='changeToDarkMode({"smooth_transition": true});'>Toggle dark mode</button>
```

---

# Demo
Use this demo to see how it works.
[DEMO](https://jsfiddle.net/xnupLwv8/ "Demo").

---

# Thanks for using this library!
