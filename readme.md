# Introduction

**js-frills** is a little package that adds a few niceties to the core JS functionality.

# Installation

```bash
npm install --save https://github.com/jrc03c/js-frills
```

Then add it as a script in your web page:

```html
<script src="path/to/js-frills/js-frills.js"></script>
```

Or `require` it:

```js
require("js-frills")
```

# Usage

```js
(5).times.do(() => {
  console.log("Hello, frills!")
})

// Hello, frills!
// Hello, frills!
// Hello, frills!
// Hello, frills!
// Hello, frills!
```
