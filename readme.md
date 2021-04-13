<p align="center">
  <img src="logo.png" width="400">
</p>

# Introduction

**js-frills** is a little package that adds a few niceties to the core JS functionality. You don't have to like or use them. :)

# Installation

```bash
npm install --save https://github.com/jrc03c/js-frills
```

Then add it as a script in your web page:

```html
<script src="path/to/js-frills.js"></script>
```

Or `require` it:

```js
require("js-frills")
```

# Usage

```js
(5).times.do((i) => {
  console.log("Hello, frills!", i)
})

// Hello, frills! 0
// Hello, frills! 1
// Hello, frills! 2
// Hello, frills! 3
// Hello, frills! 4

for (i of 5) console.log("Goodbye, frills!", i)

// Goodbye, frills! 0
// Goodbye, frills! 1
// Goodbye, frills! 2
// Goodbye, frills! 3
// Goodbye, frills! 4

let words = ["foo", "bar", "baz"]
for (i of 5) console.log(words.random())

// baz
// baz
// foo
// foo
// bar
```

I'll continue adding more things as I think of them!
