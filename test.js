var yearly = require("./")
var assert = require("assert")
var fullYear = yearly.full()

function testCase({ subject, updated }) {
  var tested = yearly.test(subject)
  var bumped = yearly.bump(subject)
  assert.strictEqual(tested, false)
  assert.strictEqual(bumped, updated)
  console.log(subject.trim(), "=>", bumped.trim())
}

console.log("Testing...")
console.log()

assert.deepEqual(yearly.express("1991"), /\b1991\b/g)
assert.strictEqual(
  String(yearly.express("1991")),
  String(/\b1991\b/g)
)

testCase({
  subject: "0",
  updated: fullYear,
})

testCase({
  subject: "2000",
  updated: fullYear,
})

testCase({
  subject: "-0",
  updated: `-${fullYear}`,
})

testCase({
  subject: "0-",
  updated: `${fullYear}-`,
})

testCase({
  subject: "4747474747",
  updated: `${fullYear}`,
})

testCase({
  subject: `0${fullYear}`,
  updated: `${fullYear}`,
})

testCase({
  subject: `${fullYear}${fullYear}`,
  updated: `${fullYear}`,
})

testCase({
  subject: "2000 8000",
  updated: `${fullYear} ${fullYear}`,
})

testCase({
  subject: "2000.8000",
  updated: `${fullYear}.${fullYear}`,
})

testCase({
  subject: "2000,8000",
  updated: `${fullYear},${fullYear}`,
})

testCase({
  subject: "2000-8000",
  updated: `${fullYear}-${fullYear}`,
})

testCase({
  subject: "B2B",
  updated: "B2B",
})

testCase({
  subject: "9999 4EVER",
  updated: `${fullYear} 4EVER`,
})

testCase({
  subject: "2000_8000",
  updated: "2000_8000",
})

testCase({
  subject: "2000x8000",
  updated: "2000x8000",
})

testCase({
  subject: "Copyright (c) 1999 Mickey Mouse",
  updated: `Copyright (c) ${fullYear} Mickey Mouse`,
})

testCase({
  subject: "\n\nCopyright (c) 1999 Mickey Mouse\n\n",
  updated: `\n\nCopyright (c) ${fullYear} Mickey Mouse\n\n`,
})

testCase({
  subject: "\n\nCopyright (c) 1999, Mickey Mouse\n\n",
  updated: `\n\nCopyright (c) ${fullYear}, Mickey Mouse\n\n`,
})

console.log()
console.log("Tests passed :)")
