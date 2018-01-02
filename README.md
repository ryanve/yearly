# `yearly`

Year utility to test or bump year in a string. Useful for keeping license files up to date.

```
npm install yearly
```

```js
const yearly = require("yearly")
```

## API

### `yearly.bump(content)`
Replace any years in `content` with the current year. Uses `yearly.express` and `yearly.full`

```js
yearly.bump("47") // "2018"
yearly.bump("1999 4ever") // "2018 4ever"
yearly.bump("2000 8000") // "2018 2018"
yearly.bump("Copyright (c) 1999 Mickey Mouse") // "Copyright (c) 2018 Mickey Mouse"
```

### `yearly.test(content)`
Test if `content` contains current year. Uses `yearly.express` and `yearly.full`

```js
yearly.test("2018 4ever") // true
yearly.test("02018") // false
```

### `yearly.express(year)`
Create regex for `year` string. Uses word boundary in expression

```js
yearly.express("1999") // /\b1999\b/g
```

### `yearly.full()`
Get the full current local year string

```js
yearly.full() // "2018"
```

## `node`

### `test` if license has current year

```
npm install yearly --save-dev
```

```js
const yearly = require("yearly")
const assert = require("assert")
const fs = require("fs")

assert.ok(
  yearly.test(fs.readFileSync("LICENSE")),
  "Please update LICENSE to current year: " + yearly.full()
)
```

### `bump` license file

```
npm install edit-file yearly --save-dev
```

```js
const editFile = require("edit-file")
const yearly = require("yearly")

editFile("LICENSE", yearly.bump)
```

```
git diff
```

## `npm test` logs bump examples

```
node test
Testing...

0 => 2018
2000 => 2018
-0 => -2018
0- => 2018-
4747474747 => 2018
02018 => 2018
20182018 => 2018
2000 8000 => 2018 2018
2000.8000 => 2018.2018
2000,8000 => 2018,2018
2000-8000 => 2018-2018
B2B => B2B
9999 4EVER => 2018 4EVER
2000_8000 => 2000_8000
2000x8000 => 2000x8000
Copyright (c) 1999 Mickey Mouse => Copyright (c) 2018 Mickey Mouse
Copyright (c) 1999 Mickey Mouse => Copyright (c) 2018 Mickey Mouse
Copyright (c) 1999, Mickey Mouse => Copyright (c) 2018, Mickey Mouse

Tests passed :)
```
