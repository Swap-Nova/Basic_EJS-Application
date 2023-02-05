## Why use EJS- Embedded JavaScript Templates?
* To avoid repetitive HTML files all the time for each condition. So therefore, we use templates for those who have similar content to each other.

## Install ejs:
```
npm install ejs
```

* In Express v4, a very basic setup using EJS would look like the following. (This assumes a ``views`` directory containing an ``index.ejs`` page.)

* <%= EJS %>: In this we are going to place our variable name.
So we will place a marker for that variable in our ejs file. That variable will be then called out in our js file by using ``res.render()``

### To run the server:
```
nodemon app.js
```
